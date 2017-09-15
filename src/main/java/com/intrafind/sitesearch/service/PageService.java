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
import com.intrafind.sitesearch.dto.FetchedSite;
import com.intrafind.sitesearch.dto.Page;
import com.intrafind.sitesearch.dto.Tenant;
import com.rometools.rome.feed.synd.SyndFeed;
import com.rometools.rome.io.FeedException;
import com.rometools.rome.io.SyndFeedInput;
import com.rometools.rome.io.XmlReader;
import jetbrains.exodus.ArrayByteIterable;
import jetbrains.exodus.ByteIterable;
import jetbrains.exodus.bindings.StringBinding;
import jetbrains.exodus.env.Store;
import jetbrains.exodus.env.StoreConfig;
import jetbrains.exodus.env.Transaction;
import org.jetbrains.annotations.NotNull;
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
public class PageService {
    private static final Logger LOG = LoggerFactory.getLogger(PageService.class);
    /**
     * @deprecated should be renamed to siteSecret; represents conceptually a siteSecret
     */
    public static final String TENANT_SECRET_FIELD = "tenantSecret";

    private static final Index INDEX_SERVICE = IfinderCoreClient.newHessianClient(Index.class, Application.IFINDER_CORE + "/index");

    public Optional<FetchedSite> indexExistingSite(String id, UUID tenantId, UUID tenantSecret, Page page) {
        if (tenantId != null && tenantSecret != null) { // credentials are provided as a tuple only
            final Optional<UUID> fetchedTenantSecret = fetchTenantSecret(tenantId);
            if (!fetchedTenantSecret.isPresent()) { // tenant does not exist
                return Optional.empty();
            } else if (tenantSecret.equals(fetchedTenantSecret.get())) { // authorized
                LOG.info("updating-feed: " + tenantId);
                return indexDocument(id, tenantId, tenantSecret, page);
            } else { // unauthorized
                return Optional.empty();
            }
        } else if (tenantId == null ^ tenantSecret == null) { // it does not make any sense if only one of the parameters is set
            return Optional.empty();
        } else { // consider request as first-usage-ownership-granting request, create new index
            return indexDocument(Page.hashSiteId(UUID.randomUUID(), page.getUrl()), UUID.randomUUID(), UUID.randomUUID(), page);
        }
    }

    private Optional<FetchedSite> indexDocument(String id, UUID tenantId, UUID tenantSecret, Page page) {
        Document indexable = new Document(id);
        indexable.set(Fields.BODY, page.getBody());
        indexable.set(Fields.TITLE, page.getTitle());
        indexable.set(Fields.URL, page.getUrl());
        indexable.set(Fields.TENANT, tenantId);
        indexable.set(TENANT_SECRET_FIELD, tenantSecret); // TODO will become superfluous once tenantSecret is stored in Exodus
        INDEX_SERVICE.index(indexable);

        return fetchById(id);
    }

    public Optional<Page> indexNewTenantCreatingSite(Page page) {
        String siteId = createTenant(page);

        return fetchNewTenantCreatingSiteById(siteId);
    }

    private String createTenant(Page page) {
        UUID tenantId = UUID.randomUUID();
        final ArrayByteIterable readableTenantId = StringBinding.stringToEntry(tenantId.toString());
        String siteId = Page.hashSiteId(tenantId, page.getUrl());

        SearchController.ACID_PERSISTENCE_ENVIRONMENT.executeInTransaction(txn -> {
            Document indexable = new Document(siteId);
            indexable.set(Fields.BODY, page.getBody());
            indexable.set(Fields.TITLE, page.getTitle());
            indexable.set(Fields.URL, page.getUrl());
            indexable.set(Fields.TENANT, tenantId);
            UUID tenantSecret = UUID.randomUUID();

            storeTenantSecret(readableTenantId, txn, tenantSecret);

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
        final ArrayByteIterable readableTenantId = StringBinding.stringToEntry(tenantId.toString());
        final ByteIterable[] tenantSecret = new ByteIterable[1];
        SearchController.ACID_PERSISTENCE_ENVIRONMENT.executeInReadonlyTransaction(txn -> {
            Store store = SearchController.ACID_PERSISTENCE_ENVIRONMENT.openStore(TENANT_SECRET_FIELD, StoreConfig.WITHOUT_DUPLICATES, txn);
            tenantSecret[0] = store.get(txn, readableTenantId);
        });
        if (tenantSecret[0] != null) {
            return Optional.of(
                    UUID.fromString(StringBinding.entryToString(tenantSecret[0]))
            );
        }

        { // TODO remove this once the Exodus persistence the leading way to store tenant secrets
            Hits documentWithTenantSecret = SearchService.SEARCH_SERVICE.search(Fields.TENANT + ":" + tenantId, Search.HITS_LIST_SIZE, 1);

            if (documentWithTenantSecret.getDocuments().isEmpty()) {
                return Optional.empty();
            } else {
                return Optional.of(UUID.fromString(
                        documentWithTenantSecret.getDocuments().get(0).get(TENANT_SECRET_FIELD)
                ));
            }
        }
    }

    private Optional<Page> fetchNewTenantCreatingSiteById(String id) {
        Optional<Document> found = INDEX_SERVICE.fetch(Index.ALL, id).stream().findAny();

        if (found.isPresent()) {
            Document foundDocument = found.get();
            Page representationOfFoundDocument = new Page(
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

    public Optional<FetchedSite> fetchById(String id) {
        Optional<Document> found = INDEX_SERVICE.fetch(Index.ALL, id).stream().findAny();

        if (found.isPresent()) {
            Document foundDocument = found.get();
            FetchedSite representationOfFoundDocument = new FetchedSite(
                    UUID.fromString(foundDocument.get(Fields.TENANT)),
                    foundDocument.getId(),
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
            storeTenantSecret(newTenantId, newTenantSecret);
            return updateIndex(feedUrl, newTenantId, newTenantSecret);
        }
    }

    private void storeTenantSecret(UUID tenantId, UUID tenantSecret) {
        final ArrayByteIterable iterableTenantId = StringBinding.stringToEntry(tenantId.toString());

        SearchController.ACID_PERSISTENCE_ENVIRONMENT.executeInTransaction(txn -> {
            storeTenantSecret(iterableTenantId, txn, tenantSecret);
        });
    }

    private void storeTenantSecret(ArrayByteIterable readableTenantId, @NotNull Transaction txn, UUID tenantSecret) {
        Store store = SearchController.ACID_PERSISTENCE_ENVIRONMENT.openStore(TENANT_SECRET_FIELD, StoreConfig.WITHOUT_DUPLICATES, txn);
        store.put(txn, readableTenantId, StringBinding.stringToEntry(tenantSecret.toString()));
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
                Page toIndex = new Page(
                        null,
                        tenantId,
                        tenantSecret, // TODO this will become superfluous once tenantSecret is stored in Exodus
                        entry.getTitle(), entry.getDescription().getValue(),
                        url
                );
                final String siteId = Page.hashSiteId(tenantId, url);
                Optional<FetchedSite> indexed = indexDocument(siteId, tenantId, tenantSecret, toIndex);
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