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

package de.intrafind.sitesearch.service;

import com.intrafind.api.Document;
import com.intrafind.api.Fields;
import com.intrafind.api.index.Index;
import com.intrafind.api.search.Hits;
import com.intrafind.api.search.Search;
import com.rometools.rome.feed.synd.SyndFeed;
import com.rometools.rome.io.FeedException;
import com.rometools.rome.io.SyndFeedInput;
import com.rometools.rome.io.XmlReader;
import de.intrafind.sitesearch.Application;
import de.intrafind.sitesearch.dto.Site;
import de.intrafind.sitesearch.dto.Tenant;
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

    private Search searchService = IfinderCoreClient.newHessianClient(Search.class, Application.I_FINDER_CORE + "/search");
    private Index indexService = IfinderCoreClient.newHessianClient(Index.class, Application.I_FINDER_CORE + "/index");

    public Site index(UUID id, Site site) {
        Document indexable = new Document(id.toString());
        indexable.set(Fields.BODY, site.getBody());
        indexable.set(Fields.TITLE, site.getTitle());
        indexable.set(Fields.URL, site.getUrl());
        indexable.set(Fields.TENANT, site.getTenant());
        indexable.set(TENANT_SECRET_FIELD, site.getTenantSecret());
        indexService.index(indexable);

        return fetchById(id.toString());
    }

    public Optional<List<UUID>> fetchAllDocuments(UUID tenantId) {
        // TODO only fetch ID info
        Hits documentWithTenantSecret = searchService.search(Fields.TENANT + ":" + tenantId.toString(), Search.HITS_LIST_SIZE, 1_000);

        if (documentWithTenantSecret.getDocuments().isEmpty()) {
            return Optional.empty();
        } else {
            List<UUID> documents = new ArrayList<>();
            documentWithTenantSecret.getDocuments().forEach(document -> {
                documents.add(UUID.fromString(document.getId()));
            });
            return Optional.of(documents);
        }
    }

    private Optional<UUID> fetchTenantSecret(UUID tenantId) {
        // TODO only fetch SECRET info
        Hits documentWithTenantSecret = searchService.search(Fields.TENANT + ":" + tenantId.toString(), Search.HITS_LIST_SIZE, 1);

        if (documentWithTenantSecret.getDocuments().isEmpty()) {
            return Optional.empty();
        } else {
            String tenantSecret = documentWithTenantSecret.getDocuments().get(0).get(TENANT_SECRET_FIELD);
            return Optional.of(UUID.fromString(tenantSecret));
        }
    }

    public Site fetchById(String id) {
        Optional<Document> found = indexService.fetch(Index.ALL, id).stream().findAny();

        if (found.isPresent()) {
            Document foundDocument = found.get();
            Site representationOfFoundDocument = new Site(UUID.fromString(foundDocument.get(Fields.TENANT)), null, foundDocument.get(Fields.TITLE), foundDocument.get(Fields.BODY), URI.create(foundDocument.get(Fields.URL)));
            representationOfFoundDocument.setId(foundDocument.getId());

            return representationOfFoundDocument;
        } else {
            return new Site();
        }
    }

    public Optional<Tenant> indexFeed(URI feedUrl, UUID tenantId, UUID tenantSecret) {
//        final UUID tenantIdToUse;
//        final UUID tenantSecretToUse;
        if (tenantId != null && tenantSecret != null) { // credentials are provided as a tuple only
//            tenantIdToUse = tenantId;
//            tenantSecretToUse = tenantSecret;

            final Optional<UUID> fetchedTenantSecret = fetchTenantSecret(tenantId);
            if (!fetchedTenantSecret.isPresent()) { // tenant does not exist
                return Optional.empty();
            } else if (tenantSecret.equals(fetchedTenantSecret.get())) { // authorized
//                updateIndex(tenantIdToUse); // TODO implement updateIndex(tenantIdToUse)
                return updateIndex(feedUrl, tenantId, tenantSecret);
            } else { // unauthorized
                return Optional.empty();
            }
        } else if (tenantId == null ^ tenantSecret == null) { // it does not make any sense if only one of the parameters is set
            return Optional.empty();
        } else { // consider request as first-usage-ownership-granting request, create new index
//            tenantIdToUse = UUID.randomUUID();
//            tenantSecretToUse = UUID.randomUUID();
            return updateIndex(feedUrl, UUID.randomUUID(), UUID.randomUUID());
        }
    }

    private Optional<Tenant> updateIndex(URI feedUrl, UUID tenantId, UUID tenantSecret) {
        LOG.info("URL-received: " + feedUrl);
        final AtomicInteger successfullyIndexed = new AtomicInteger(0);
        final List<UUID> documents = new ArrayList<>();
        List<URI> failedToIndex = new ArrayList<>();
        try {
            SyndFeed feed = new SyndFeedInput().build(new XmlReader(feedUrl.toURL()));

            feed.getEntries().forEach(entry -> {
                LOG.info("entry: " + entry.getTitle());
                LOG.info("link: " + entry.getLink());
                LOG.info("description: " + entry.getDescription().getValue());

                Site toIndex = new Site(tenantId, tenantSecret, entry.getTitle(), entry.getDescription().getValue(), URI.create(entry.getLink()));
                final UUID siteId = UUID.randomUUID();
                Site indexed = index(siteId, toIndex);
                if (indexed != null && !indexed.getId().isEmpty()) {
                    successfullyIndexed.incrementAndGet();
                    documents.add(siteId);
                    LOG.info("successfully-indexed: " + indexed.getId());
                } else {
                    failedToIndex.add(URI.create(entry.getLink()));
                    LOG.warn("unsuccessfully-indexed:" + entry.getLink());
                }
            });

            return Optional.of(new Tenant(tenantId, tenantSecret, successfullyIndexed.get(), documents, failedToIndex));
        } catch (FeedException | IOException e) {
            return Optional.empty();
        }
    }

    private void updateIndex(UUID tenantId) {
//        delete complete index & create a new index under the same tenantId
//        vs
//        update existing sites based on their url, add new sites that are not part of the index
    }

    public void delete(UUID documentId) {
        // just assume everything works... right?
        indexService.delete(documentId.toString());
    }
}