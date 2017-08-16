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
import com.intrafind.sitesearch.dto.Site;
import com.intrafind.sitesearch.dto.Tenant;
import com.rometools.rome.feed.synd.SyndFeed;
import com.rometools.rome.io.FeedException;
import com.rometools.rome.io.SyndFeedInput;
import com.rometools.rome.io.XmlReader;
import com.sun.net.ssl.HostnameVerifier;
import com.sun.net.ssl.HttpsURLConnection;
import com.sun.net.ssl.SSLContext;
import com.sun.net.ssl.TrustManager;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import javax.net.ssl.SSLSession;
import java.io.IOException;
import java.io.UnsupportedEncodingException;
import java.net.URI;
import java.net.URLEncoder;
import java.security.KeyManagementException;
import java.security.NoSuchAlgorithmException;
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

    public Optional<Site> indexExistingSite(UUID id, UUID tenantId, UUID tenantSecret, Site site) {
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
            return indexDocument(UUID.randomUUID(), UUID.randomUUID(), UUID.randomUUID(), site);
        }
    }

    private Optional<Site> indexDocument(UUID id, UUID tenantId, UUID tenantSecret, Site site) {
        Document indexable = new Document(id.toString());
        indexable.set(Fields.BODY, site.getBody());
        indexable.set(Fields.TITLE, site.getTitle());
        indexable.set(Fields.URL, site.getUrl());
        indexable.set(Fields.TENANT, tenantId);
        indexable.set(TENANT_SECRET_FIELD, tenantSecret);
        indexService.index(indexable);

        return fetchById(id);
    }

    public Optional<Site> indexNewTenantCreatingSite(Site site) {
        UUID id = UUID.randomUUID();
        Document indexable = new Document(id.toString());
        indexable.set(Fields.BODY, site.getBody());
        indexable.set(Fields.TITLE, site.getTitle());
        indexable.set(Fields.URL, site.getUrl());
        indexable.set(Fields.TENANT, UUID.randomUUID().toString());
        indexable.set(TENANT_SECRET_FIELD, UUID.randomUUID().toString());
        indexService.index(indexable);

        return fetchNewTenantCreatingSiteById(id);
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
        Hits documentWithTenantSecret = searchService.search(Fields.TENANT + ":" + tenantId, Search.HITS_LIST_SIZE, 1);

        if (documentWithTenantSecret.getDocuments().isEmpty()) {
            return Optional.empty();
        } else {
            String tenantSecret = documentWithTenantSecret.getDocuments().get(0).get(TENANT_SECRET_FIELD);
            return Optional.of(UUID.fromString(tenantSecret));
        }
    }

    private Optional<Site> fetchNewTenantCreatingSiteById(UUID id) {
        Optional<Document> found = indexService.fetch(Index.ALL, id.toString()).stream().findAny();

        if (found.isPresent()) {
            Document foundDocument = found.get();
            Site representationOfFoundDocument = new Site(
                    UUID.fromString(foundDocument.getId()),
                    UUID.fromString(foundDocument.get(Fields.TENANT)),
                    UUID.fromString(foundDocument.get(TENANT_SECRET_FIELD)),
                    foundDocument.get(Fields.TITLE),
                    foundDocument.get(Fields.BODY),
                    URI.create(foundDocument.get(Fields.URL))
            );

            return Optional.of(representationOfFoundDocument);
        } else {
            return Optional.empty();
        }
    }

    public Optional<Site> fetchById(UUID id) {
        Optional<Document> found = indexService.fetch(Index.ALL, id.toString()).stream().findAny();

        if (found.isPresent()) {
            Document foundDocument = found.get();
            Site representationOfFoundDocument = new Site(
                    UUID.fromString(foundDocument.getId()),
                    UUID.fromString(foundDocument.get(Fields.TENANT)), null,
                    foundDocument.get(Fields.TITLE), foundDocument.get(Fields.BODY),
                    URI.create(foundDocument.get(Fields.URL))
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
//                updateIndex(tenantIdToUse); // TODO implement updateIndex(tenantIdToUse)
                LOG.info("updating-feed: " + tenantId);
                return updateIndex(feedUrl, tenantId, tenantSecret);
            } else { // unauthorized
                return Optional.empty();
            }
        } else if (tenantId == null ^ tenantSecret == null) { // it does not make any sense if only one of the parameters is set
            return Optional.empty();
        } else { // consider request as first-usage-ownership-granting request, create new index
            return updateIndex(feedUrl, UUID.randomUUID(), UUID.randomUUID());
        }
    }


    static {
        try {
            configureUnsecureSSLConnections();
//        new TrustAllX509TrustManager();
//            TrustAllX509TrustManager.configureUnsecureSSLConnections();
        } catch (KeyManagementException | NoSuchAlgorithmException e) {
            LOG.warn(e.getMessage());
        }
    }

    private static void configureUnsecureSSLConnections() throws NoSuchAlgorithmException, KeyManagementException {
        SSLContext sc = SSLContext.getInstance("TLS");
        sc.init(null, new TrustManager[]{new TrustAllX509TrustManager()}, new java.security.SecureRandom());
        HttpsURLConnection.setDefaultSSLSocketFactory(sc.getSocketFactory());
        HttpsURLConnection.setDefaultHostnameVerifier(new HostnameVerifier() {
            @Override
            public boolean verify(String urlHostname, String certHostname) {
                return true;
            }

            public boolean verify(String string, SSLSession ssls) {
                return true;
            }
        });
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

                String encodedFeedUrl = "";
                try {
                    encodedFeedUrl = URLEncoder.encode(entry.getLink(), "UTF-8");
                } catch (UnsupportedEncodingException e) {
                    LOG.warn(e.getMessage());
                }

                Site toIndex = new Site(
                        null,
                        tenantId, tenantSecret,
                        entry.getTitle(), entry.getDescription().getValue(),
                        URI.create(encodedFeedUrl)
                );
                final UUID siteId = UUID.randomUUID();
                Optional<Site> indexed = indexDocument(siteId, tenantId, tenantSecret, toIndex);
                if (indexed.isPresent()) {
                    successfullyIndexed.incrementAndGet();
                    documents.add(siteId);
                    LOG.info("successfully-indexed: " + indexed.get().getId());
                } else {
                    failedToIndex.add(URI.create(entry.getLink()));
                    LOG.warn("unsuccessfully-indexed:" + entry.getLink());
                }
            });

            return Optional.of(new Tenant(tenantId, tenantSecret, successfullyIndexed.get(), documents, failedToIndex));
        } catch (FeedException | IOException e) {
            LOG.warn(e.getMessage());
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