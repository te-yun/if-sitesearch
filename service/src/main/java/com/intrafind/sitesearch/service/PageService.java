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
import com.intrafind.sitesearch.dto.FetchedPage;
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
import org.w3c.dom.Node;
import org.w3c.dom.NodeList;
import org.xml.sax.SAXException;

import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;
import javax.xml.parsers.ParserConfigurationException;
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
    public static final String SITE_SECRET_FIELD = "siteSecret";

    private static final Index INDEX_SERVICE = IfinderCoreClient.newHessianClient(Index.class, Application.IFINDER_CORE + "/index");

    public Optional<FetchedPage> indexExistingPage(String id, UUID siteId, UUID siteSecret, Page page) {
        if (siteId != null && siteSecret != null) { // credentials are provided as a tuple only
            final Optional<UUID> fetchedSiteSecret = fetchSiteSecret(siteId);
            if (!fetchedSiteSecret.isPresent()) { // site does not exist
                return Optional.empty();
            } else if (siteSecret.equals(fetchedSiteSecret.get())) { // authorized
                LOG.info("updating-feed: " + siteId);
                return indexDocument(id, siteId, siteSecret, page);
            } else { // unauthorized
                return Optional.empty();
            }
        } else if (siteId == null ^ siteSecret == null) { // it does not make any sense if only one of the parameters is set
            return Optional.empty();
        } else { // consider request as first-usage-ownership-granting request, create new index
            return indexDocument(Page.hashPageId(UUID.randomUUID(), page.getUrl()), UUID.randomUUID(), UUID.randomUUID(), page);
        }
    }

    private boolean isAllowedToModify(UUID siteId, UUID siteSecret) {
        final Optional<UUID> fetchedSiteSecret = fetchSiteSecret(siteId);
        return fetchedSiteSecret.isPresent() && siteSecret.equals(fetchedSiteSecret.get());
    }

    private Optional<FetchedPage> indexDocument(String id, UUID siteId, UUID siteSecret, Page page) {
        Document indexable = new Document(id);
        indexable.set(Fields.BODY, page.getBody());
        indexable.set(Fields.TITLE, page.getTitle());
        indexable.set(Fields.URL, page.getUrl());
        indexable.set(Fields.TENANT, siteId);
//        indexable.set(SITE_SECRET_FIELD, siteSecret); // TODO will become superfluous once siteSecret is stored in Exodus
        INDEX_SERVICE.index(indexable);

        return fetchById(id);
    }

    public Optional<Page> indexNewTenantCreatingSite(Page page) {
        String pageId = createTenant(page);

        return fetchNewTenantCreatingSiteById(pageId);
    }

    private String createTenant(Page page) {
        UUID siteId = UUID.randomUUID();
        final ArrayByteIterable readableSiteId = StringBinding.stringToEntry(siteId.toString());
        String pageId = Page.hashPageId(siteId, page.getUrl());

        SearchController.ACID_PERSISTENCE_ENVIRONMENT.executeInTransaction(txn -> {
            Document indexable = new Document(pageId);
            indexable.set(Fields.BODY, page.getBody());
            indexable.set(Fields.TITLE, page.getTitle());
            indexable.set(Fields.URL, page.getUrl());
            indexable.set(Fields.TENANT, siteId);
            UUID siteSecret = UUID.randomUUID();

            storeSiteSecret(readableSiteId, txn, siteSecret);

            indexable.set(SITE_SECRET_FIELD, siteSecret);
            INDEX_SERVICE.index(indexable);
        });

        return pageId;
    }

    public Optional<List<String>> fetchAllDocuments(UUID siteId) {
        // TODO only fetch ID info
        Hits documentWithSiteSecret = SearchService.SEARCH_SERVICE.search(Fields.TENANT + ":" + siteId.toString(), Search.HITS_LIST_SIZE, 1_000);

        if (documentWithSiteSecret.getDocuments().isEmpty()) {
            return Optional.empty();
        } else {
            List<String> documents = new ArrayList<>();
            documentWithSiteSecret.getDocuments().forEach(document -> {
                documents.add(document.getId());
            });
            return Optional.of(documents);
        }
    }

    private Optional<UUID> fetchSiteSecret(UUID siteId) {
        final ArrayByteIterable readableSiteId = StringBinding.stringToEntry(siteId.toString());
        final ByteIterable[] siteSecret = new ByteIterable[1];
        SearchController.ACID_PERSISTENCE_ENVIRONMENT.executeInTransaction(txn -> {
//        SearchController.ACID_PERSISTENCE_ENVIRONMENT.executeInReadonlyTransaction(txn -> {
            Store store = SearchController.ACID_PERSISTENCE_ENVIRONMENT.openStore(SITE_SECRET_FIELD, StoreConfig.WITHOUT_DUPLICATES, txn);
            siteSecret[0] = store.get(txn, readableSiteId);
        });
        if (siteSecret[0] != null) {
            return Optional.of(
                    UUID.fromString(StringBinding.entryToString(siteSecret[0]))
            );
        }

        { // TODO remove this once the Exodus persistence the leading way to store site secrets
            Hits documentWithSiteSecret = SearchService.SEARCH_SERVICE.search(Fields.TENANT + ":" + siteId, Search.HITS_LIST_SIZE, 1);

            if (documentWithSiteSecret.getDocuments().isEmpty()) {
                return Optional.empty();
            } else {
                return Optional.of(UUID.fromString(
                        documentWithSiteSecret.getDocuments().get(0).get(SITE_SECRET_FIELD)
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
                    UUID.fromString(foundDocument.get(SITE_SECRET_FIELD)),
                    foundDocument.get(Fields.TITLE),
                    foundDocument.get(Fields.BODY),
                    foundDocument.get(Fields.URL)
            );

            return Optional.of(representationOfFoundDocument);
        } else {
            return Optional.empty();
        }
    }

    public Optional<FetchedPage> fetchById(String id) {
        Optional<Document> found = INDEX_SERVICE.fetch(Index.ALL, id).stream().findAny();

        if (found.isPresent()) {
            Document foundDocument = found.get();
            FetchedPage representationOfFoundDocument = new FetchedPage(
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

    public Optional<Tenant> indexFeed(URI feedUrl, UUID siteId, UUID siteSecret, Boolean stripHtmlTags, Boolean isGeneric) {
        if (siteId != null && siteSecret != null) { // credentials are provided as a tuple only
            final Optional<UUID> fetchedSiteSecret = fetchSiteSecret(siteId);
            if (!fetchedSiteSecret.isPresent()) { // tenant does not exist
                return Optional.empty();
            } else if (siteSecret.equals(fetchedSiteSecret.get())) { // authorized
                if (isGeneric) {
                    return updateIndexGenerically(feedUrl, siteId, siteSecret, stripHtmlTags);
                } else {
                    LOG.info("updating-feed: " + siteId);
                    return updateIndex(feedUrl, siteId, siteSecret, stripHtmlTags);
                }
            } else { // unauthorized
                return Optional.empty();
            }
        } else if (siteId == null ^ siteSecret == null) { // it does not make any sense if only one of the parameters is set
            return Optional.empty();
        } else { // consider request as first-usage-ownership-granting request (early binding), create new index
            UUID newSiteId = UUID.randomUUID();
            UUID newSiteSecret = UUID.randomUUID();
            storeSiteSecret(newSiteId, newSiteSecret);
            if (isGeneric) {
                return Optional.empty();
            } else {
                return updateIndex(feedUrl, newSiteId, newSiteSecret, stripHtmlTags);
            }
        }
    }

    private void storeSiteSecret(UUID siteId, UUID siteSecret) {
        final ArrayByteIterable iterableSiteId = StringBinding.stringToEntry(siteId.toString());

        SearchController.ACID_PERSISTENCE_ENVIRONMENT.executeInTransaction(txn -> {
            storeSiteSecret(iterableSiteId, txn, siteSecret);
        });
    }

    private void storeSiteSecret(ArrayByteIterable readableSiteId, @NotNull Transaction txn, UUID siteSecret) {
        Store store = SearchController.ACID_PERSISTENCE_ENVIRONMENT.openStore(SITE_SECRET_FIELD, StoreConfig.WITHOUT_DUPLICATES, txn);
        store.put(txn, readableSiteId, StringBinding.stringToEntry(siteSecret.toString()));
    }

    static {
        new TrustAllX509TrustManager();
    }

    private Optional<Tenant> readXml(NodeList nodeList, AtomicInteger successfullyIndexed, List<String> documents, List<String> failedToIndex, UUID siteId) {
        String title = null;
        String body = null;
        String url = null;
        Page toIndex = null;
        for (int count = 0; count < nodeList.getLength(); count++) {
            Node tempNode = nodeList.item(count);
            if (tempNode.getNodeType() == Node.ELEMENT_NODE) {
                switch (tempNode.getNodeName()) {
                    case "title":
                        title = tempNode.getTextContent();
                        break;
                    case "body":
                        body = tempNode.getTextContent();
                        break;
                    case "url":
                        url = tempNode.getTextContent();
                        break;
                    default:
                        break;
                }

                if (tempNode.hasChildNodes()) {
                    toIndex = new Page(
                            null,
                            siteId,
                            null,
                            title,
                            body,
                            url
                    );

                    if (toIndex.getTitle() != null && toIndex.getBody() != null && toIndex.getUrl() != null) {
                        final String pageId = Page.hashPageId(siteId, url);

                        Optional<FetchedPage> indexed = indexDocument(pageId, siteId, null, toIndex);
                        if (indexed.isPresent()) {
                            successfullyIndexed.incrementAndGet();
                            documents.add(pageId);
                            LOG.info("index-successful: " + indexed.get().getId());
                        } else {
                            failedToIndex.add(url);
                            LOG.warn("index-failed:" + url);
                        }
                    }
                    readXml(tempNode.getChildNodes(), successfullyIndexed, documents, failedToIndex, siteId);
                }

                if ("Document".equals(tempNode.getNodeName())) {
                    title = null;
                    body = null;
                    url = null;
                    toIndex = null;
                }
            }
        }

        return Optional.of(new Tenant(siteId, null, successfullyIndexed.get(), documents, failedToIndex));
    }

    private Optional<Tenant> updateIndexGenerically(URI feedUrl, UUID siteId, UUID siteSecret, Boolean stripHtmlTags) {
        LOG.info("URL-received: " + feedUrl);
        final AtomicInteger successfullyIndexed = new AtomicInteger(0);
        final List<String> documents = new ArrayList<>();
        List<String> failedToIndex = new ArrayList<>();

        try {
            DocumentBuilder dBuilder = DocumentBuilderFactory.newInstance().newDocumentBuilder();
            org.w3c.dom.Document doc = dBuilder.parse(feedUrl.toURL().openStream());

            if (doc.hasChildNodes()) {
                return readXml(doc.getChildNodes(), successfullyIndexed, documents, failedToIndex, siteId);
            }

            return Optional.empty();
        } catch (ParserConfigurationException | IOException | SAXException e) {
            LOG.warn(e.getMessage());
            return Optional.empty();
        }
    }

    private Optional<Tenant> updateIndex(URI feedUrl, UUID siteId, UUID siteSecret, Boolean stripHtmlTags) {
        LOG.info("URL-received: " + feedUrl);
        final AtomicInteger successfullyIndexed = new AtomicInteger(0);
        final List<String> documents = new ArrayList<>();
        List<String> failedToIndex = new ArrayList<>();
        try {
            SyndFeed feed = new SyndFeedInput().build(new XmlReader(feedUrl.toURL()));

            feed.getEntries().forEach(entry -> {
                LOG.info("entry: " + entry.getTitle());
                LOG.info("link: " + entry.getLink());
                final String body;
                if (stripHtmlTags) {
                    body = entry.getDescription().getValue()
                            .replaceAll("\\<[^>]*>", "");
                    LOG.info("body with striped HTML: " + body);
                } else {
                    body = entry.getDescription().getValue();
                    LOG.info("raw body: " + body);
                }

                String url = entry.getLink();
                Page toIndex = new Page(
                        null,
                        siteId,
                        siteSecret, // TODO this will become superfluous once siteSecret is stored in Exodus
                        entry.getTitle(),
                        body,
                        url
                );
                final String pageId = Page.hashPageId(siteId, url);
                Optional<FetchedPage> indexed = indexDocument(pageId, siteId, siteSecret, toIndex);
                if (indexed.isPresent()) {
                    successfullyIndexed.incrementAndGet();
                    documents.add(pageId);
                    LOG.info("successfully-indexed: " + indexed.get().getId());
                } else {
                    failedToIndex.add(entry.getLink());
                    LOG.warn("unsuccessfully-indexed:" + entry.getLink());
                }
            });

            return Optional.of(new Tenant(siteId, siteSecret, successfullyIndexed.get(), documents, failedToIndex));
        } catch (FeedException | IOException e) {
            LOG.warn(e.getMessage());
            return Optional.empty();
        }
    }

    public boolean delete(UUID siteId, UUID siteSecret, String pageId) {
        if (isAllowedToModify(siteId, siteSecret)) {
            // just assume everything works... right?
            INDEX_SERVICE.delete(pageId);
            return true;
        } else {
            return false;
        }
    }
}