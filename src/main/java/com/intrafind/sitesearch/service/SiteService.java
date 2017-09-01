/*
 * Copyright 2017 IntraFind Software AG. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package com.intrafind.sitesearch.service;

import com.intrafind.api.Document;
import com.intrafind.api.Fields;
import com.intrafind.api.index.Index;
import com.intrafind.api.search.Hits;
import com.intrafind.api.search.Search;
import com.intrafind.sitesearch.Application;
import com.intrafind.sitesearch.TrustAllX509TrustManager;
import com.intrafind.sitesearch.controller.SearchController;
import com.intrafind.sitesearch.dto.Site;
import com.intrafind.sitesearch.dto.Tenant;
import com.rometools.rome.feed.synd.SyndFeed;
import com.rometools.rome.io.FeedException;
import com.rometools.rome.io.SyndFeedInput;
import com.rometools.rome.io.XmlReader;
import jetbrains.exodus.ArrayByteIterable;
import jetbrains.exodus.bindings.StringBinding;
import jetbrains.exodus.env.Store;
import jetbrains.exodus.env.StoreConfig;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.net.URI;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.UUID;
import java.util.concurrent.atomic.AtomicInteger;

@Service
public class SiteService {
    private static final Logger LOG = LoggerFactory.getLogger(SiteService.class);
    private static final String TENANT_SECRET_FIELD = "tenantSecret";

    private static final Index INDEX_SERVICE = IfinderCoreClient.newHessianClient(Index.class, Application.IFINDER_CORE + "/index");

    public Optional<Site> indexExistingSite(String id, UUID tenantId, UUID tenantSecret, Site site) {
        if (tenantId != null && tenantSecret != null) { // credentials are provided as a tuple only
            final Optional<UUID> fetchedTenantSecret = fetchTenantSecret(tenantId);
            if (!fetchedTenantSecret.isPresent()) { // tenant does not exist
                return Optional.empty();
            } else if (tenantSecret.equals(fetchedTenantSecret.get())) { // authorized
                LOG.info("updating-feed: " + tenantId);
                return indexDocument(id, tenantId, tenantSecret, site);
            } else { // unauthorized
                return Optional.empty();
            }
        } else if (tenantId == null ^ tenantSecret == null) { // it does not make any sense if only one of the parameters is set
            return Optional.empty();
        } else { // consider request as first-usage-ownership-granting request, create new index
            return indexDocument(Site.hashSiteId(UUID.randomUUID(), site.getUrl()), UUID.randomUUID(), UUID.randomUUID(), site);
        }
    }

    private Optional<Site> indexDocument(String id, UUID tenantId, UUID tenantSecret, Site site) {
        Document indexable = new Document(id);
        indexable.set(Fields.BODY, site.getBody());
        indexable.set(Fields.TITLE, site.getTitle());
        indexable.set(Fields.URL, site.getUrl());
        indexable.set(Fields.TENANT, tenantId);
        indexable.set(TENANT_SECRET_FIELD, tenantSecret); // TODO will become superfluous once tenantSecret is stored in Exodus
        INDEX_SERVICE.index(indexable);

        return fetchById(id);
    }

    public Optional<Site> indexNewTenantCreatingSite(Site site) {
        String siteId = createTenant(site);

        return fetchNewTenantCreatingSiteById(siteId);
    }

    private String createTenant(Site site) {
        UUID tenantId = UUID.randomUUID();
        final ArrayByteIterable readableTenantId = StringBinding.stringToEntry(tenantId.toString());
        String siteId = Site.hashSiteId(tenantId, site.getUrl());

        SearchController.ACID_PERSISTENCE.executeInTransaction(txn -> {
            Document indexable = new Document(siteId);
            indexable.set(Fields.BODY, site.getBody());
            indexable.set(Fields.TITLE, site.getTitle());
            indexable.set(Fields.URL, site.getUrl());
            indexable.set(Fields.TENANT, tenantId);
            UUID tenantSecret = UUID.randomUUID();

            { // persist in data store
                Store store = SearchController.ACID_PERSISTENCE.openStore(TENANT_SECRET_FIELD, StoreConfig.WITHOUT_DUPLICATES, txn);
                store.put(txn, readableTenantId, StringBinding.stringToEntry(tenantSecret.toString()));
            }

            indexable.set(TENANT_SECRET_FIELD, tenantSecret);
            INDEX_SERVICE.index(indexable);
        });

        return siteId;
    }

    public Optional<List<String>> fetchAllDocuments(UUID tenantId) {
        // TODO only fetch ID info
        Hits documentWithTenantSecret = SearchService.SEARCH_SERVICE.search(Fields.TENANT + ":" + tenantId.toString(), Search.HITS_LIST_SIZE, 1_000);

        if (documentWithTenantSecret.getDocuments().isEmpty()) {
            return Optional.empty();
        } else {
            List<String> documents = new ArrayList<>();
            documentWithTenantSecret.getDocuments().forEach(document -> {
                documents.add(document.getId());
            });
            return Optional.of(documents);
        }
    }

    private Optional<UUID> fetchTenantSecret(UUID tenantId) {
        // TODO only fetch SECRET info
        Hits documentWithTenantSecret = SearchService.SEARCH_SERVICE.search(Fields.TENANT + ":" + tenantId, Search.HITS_LIST_SIZE, 1);

        if (documentWithTenantSecret.getDocuments().isEmpty()) {
            return Optional.empty();
        } else {
            String tenantSecret = documentWithTenantSecret.getDocuments().get(0).get(TENANT_SECRET_FIELD);
            return Optional.of(UUID.fromString(tenantSecret));
        }
    }

    private Optional<Site> fetchNewTenantCreatingSiteById(String id) {
        Optional<Document> found = INDEX_SERVICE.fetch(Index.ALL, id).stream().findAny();

        if (found.isPresent()) {
            Document foundDocument = found.get();
            Site representationOfFoundDocument = new Site(
                    foundDocument.getId(),
                    UUID.fromString(foundDocument.get(Fields.TENANT)),
                    UUID.fromString(foundDocument.get(TENANT_SECRET_FIELD)),
                    foundDocument.get(Fields.TITLE),
                    foundDocument.get(Fields.BODY),
                    foundDocument.get(Fields.URL)
            );

            return Optional.of(representationOfFoundDocument);
        } else {
            return Optional.empty();
        }
    }

    public Optional<Site> fetchById(String id) {
        Optional<Document> found = INDEX_SERVICE.fetch(Index.ALL, id).stream().findAny();

        if (found.isPresent()) {
            Document foundDocument = found.get();
            Site representationOfFoundDocument = new Site(
                    foundDocument.getId(),
                    UUID.fromString(foundDocument.get(Fields.TENANT)), null,
                    foundDocument.get(Fields.TITLE),
                    foundDocument.get(Fields.BODY),
                    foundDocument.get(Fields.URL)
            );

            return Optional.of(representationOfFoundDocument);
        } else {
            return Optional.empty();
        }
    }

    public Optional<Tenant> indexFeed(URI feedUrl, UUID tenantId, UUID tenantSecret) {
        if (tenantId != null && tenantSecret != null) { // credentials are provided as a tuple only
            final Optional<UUID> fetchedTenantSecret = fetchTenantSecret(tenantId);
            if (!fetchedTenantSecret.isPresent()) { // tenant does not exist
                return Optional.empty();
            } else if (tenantSecret.equals(fetchedTenantSecret.get())) { // authorized
                LOG.info("updating-feed: " + tenantId);
                return updateIndex(feedUrl, tenantId, tenantSecret);
            } else { // unauthorized
                return Optional.empty();
            }
        } else if (tenantId == null ^ tenantSecret == null) { // it does not make any sense if only one of the parameters is set
            return Optional.empty();
        } else { // consider request as first-usage-ownership-granting request (early binding), create new index
            UUID newTenantId = UUID.randomUUID();
            UUID newTenantSecret = UUID.randomUUID();
            createTenantForFeedIndex(newTenantId, newTenantSecret);
            return updateIndex(feedUrl, newTenantId, newTenantSecret);
        }
    }

    private void createTenantForFeedIndex(UUID tenantId, UUID tenantSecret) {
        final ArrayByteIterable readableTenantId = StringBinding.stringToEntry(tenantId.toString());

        SearchController.ACID_PERSISTENCE.executeInTransaction(txn -> {
            Store store = SearchController.ACID_PERSISTENCE.openStore(TENANT_SECRET_FIELD, StoreConfig.WITHOUT_DUPLICATES, txn);
            store.put(txn, readableTenantId, StringBinding.stringToEntry(tenantSecret.toString()));
        });
    }

    static {
        new TrustAllX509TrustManager();
    }

    private Optional<Tenant> updateIndex(URI feedUrl, UUID tenantId, UUID tenantSecret) {
        LOG.info("URL-received: " + feedUrl);
        final AtomicInteger successfullyIndexed = new AtomicInteger(0);
        final List<String> documents = new ArrayList<>();
        List<String> failedToIndex = new ArrayList<>();
        try {
            SyndFeed feed = new SyndFeedInput().build(new XmlReader(feedUrl.toURL()));

            feed.getEntries().forEach(entry -> {
                LOG.info("entry: " + entry.getTitle());
                LOG.info("link: " + entry.getLink());
                LOG.info("description: " + entry.getDescription().getValue());

                String url = entry.getLink();
                Site toIndex = new Site(
                        null,
                        tenantId,
                        tenantSecret, // TODO this will become superfluous once tenantSecret is stored in Exodus
                        entry.getTitle(), entry.getDescription().getValue(),
                        url
                );
                final String siteId = Site.hashSiteId(tenantId, url);
                Optional<Site> indexed = indexDocument(siteId, tenantId, tenantSecret, toIndex);
                if (indexed.isPresent()) {
                    successfullyIndexed.incrementAndGet();
                    documents.add(siteId);
                    LOG.info("successfully-indexed: " + indexed.get().getId());
                } else {
                    failedToIndex.add(entry.getLink());
                    LOG.warn("unsuccessfully-indexed:" + entry.getLink());
                }
            });

            return Optional.of(new Tenant(tenantId, tenantSecret, successfullyIndexed.get(), documents, failedToIndex));
        } catch (FeedException | IOException e) {
            LOG.warn(e.getMessage());
            return Optional.empty();
        }
    }

    public void delete(String documentId) {
        // just assume everything works... right?
        INDEX_SERVICE.delete(documentId);
    }
}