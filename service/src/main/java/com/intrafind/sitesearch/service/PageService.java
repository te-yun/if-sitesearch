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
import com.intrafind.sitesearch.dto.FetchedPage;
import com.intrafind.sitesearch.dto.Page;
import com.intrafind.sitesearch.dto.SiteCreation;
import com.intrafind.sitesearch.dto.SiteIndexSummary;
import com.rometools.rome.feed.synd.SyndFeed;
import com.rometools.rome.io.FeedException;
import com.rometools.rome.io.SyndFeedInput;
import com.rometools.rome.io.XmlReader;
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

    private static final Index INDEX_SERVICE = IfinderCoreClient.newHessianClient(Index.class, Application.IFINDER_CORE + "/index");
    private static final String SITE_CONFIGURATION_DOCUMENT_PREFIX = "site-configuration-";

    public Optional<FetchedPage> indexExistingPage(String id, UUID siteId, UUID siteSecret, Page page) {
        if (siteId != null && siteSecret != null) { // credentials are provided as a tuple only
            final Optional<UUID> fetchedSiteSecret = fetchSiteSecret(siteId);
            if (!fetchedSiteSecret.isPresent()) { // site does not exist
                return Optional.empty();
            } else if (siteSecret.equals(fetchedSiteSecret.get())) { // authorized
                return indexDocument(id, siteId, page);
            } else { // unauthorized
                return Optional.empty();
            }
        } else if (siteId == null ^ siteSecret == null) { // it does not make any sense if only one of the parameters is set
            return Optional.empty();
        } else { // consider request as first-usage-ownership-granting request, create new index
            return indexDocument(Page.hashPageId(UUID.randomUUID(), page.getUrl()), UUID.randomUUID(), page);
        }
    }

    private boolean isAllowedToModify(UUID siteId, UUID siteSecret) {
        final Optional<UUID> fetchedSiteSecret = fetchSiteSecret(siteId);
        return fetchedSiteSecret.isPresent() && siteSecret.equals(fetchedSiteSecret.get());
    }

    private Optional<FetchedPage> indexDocument(String id, UUID siteId, Page page) {
        Document doc = new Document(id);
        doc.set(Fields.BODY, page.getBody());
        doc.set(Fields.TITLE, page.getTitle());
        doc.set(Fields.URL, page.getUrl());
        doc.set(Fields.TENANT, siteId);
        INDEX_SERVICE.index(doc);
        LOG.info("siteId: " + siteId + " - bodySize: " + page.getBody().length() + " - titleSize: " + page.getTitle().length() + " - url: " + page.getUrl());
        return fetchById(id);
    }

    private static Optional<UUID> fetchSiteSecret(UUID siteId) {
        // TODO make this the only method to fetch siteSecret
        Optional<Document> siteConfiguration = INDEX_SERVICE.fetch(Index.ALL, SITE_CONFIGURATION_DOCUMENT_PREFIX + siteId).stream().findAny();
        return siteConfiguration.map(document -> UUID.fromString(document.get("secret")));
    }

    public Optional<List<String>> fetchAllDocuments(UUID siteId) {
        Hits documentWithSiteSecret = SearchService.SEARCH_SERVICE.search(
                Fields.TENANT + ":" + siteId.toString(),
                Search.RETURN_FIELDS, Fields.TENANT,
                Search.HITS_LIST_SIZE, 1_000
        );

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

    private static void storeSiteSecret(UUID siteId, UUID siteSecret) {
        // TODO remove Exodus as it is not 12factor in this context
        Document siteConfiguration = new Document(SITE_CONFIGURATION_DOCUMENT_PREFIX + siteId);
        siteConfiguration.set("secret", siteSecret);
        INDEX_SERVICE.index(siteConfiguration);
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

    public Optional<SiteIndexSummary> indexFeed(URI feedUrl, UUID siteId, UUID siteSecret, Boolean stripHtmlTags, Boolean isGeneric, boolean clearIndex) {
        if (siteId != null && siteSecret != null) { // credentials are provided as a tuple only
            final Optional<UUID> fetchedSiteSecret = fetchSiteSecret(siteId);
            if (!fetchedSiteSecret.isPresent()) { // tenant does not exist
                return Optional.empty();
            } else if (siteSecret.equals(fetchedSiteSecret.get())) { // authorized
                if (clearIndex) {
                    Optional<List<String>> allPages = fetchAllDocuments(siteId);
                    allPages.ifPresent(pages -> {
                        INDEX_SERVICE.delete(pages.toArray(new String[]{}));
                    });
                }
                if (isGeneric) {
                    return updateIndexGenerically(feedUrl, siteId, siteSecret, stripHtmlTags);
                } else {
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

    public SiteCreation createSite() {
        UUID siteId = UUID.randomUUID();
        UUID siteSecret = UUID.randomUUID();
        storeSiteSecret(siteId, siteSecret);
        return new SiteCreation(siteId, siteSecret);
    }

    static {
        new TrustAllX509TrustManager();
    }

    private Optional<SiteIndexSummary> readXml(NodeList nodeList, AtomicInteger successfullyIndexed, List<String> documents, List<String> failedToIndex, UUID siteId) {
        String title = null;
        String body = null;
        String url = null;
        Page toIndex;
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
                            title,
                            body,
                            url
                    );

                    if (toIndex.getTitle() != null && toIndex.getBody() != null && toIndex.getUrl() != null) {
                        final String pageId = Page.hashPageId(siteId, url);

                        Optional<FetchedPage> indexed = indexDocument(pageId, siteId, toIndex);
                        if (indexed.isPresent()) {
                            successfullyIndexed.incrementAndGet();
                            documents.add(pageId);
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

        return Optional.of(new SiteIndexSummary(siteId, null, successfullyIndexed.get(), documents, failedToIndex));
    }

    private Optional<SiteIndexSummary> updateIndexGenerically(URI feedUrl, UUID siteId, UUID siteSecret, Boolean stripHtmlTags) {
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

    private Optional<SiteIndexSummary> updateIndex(URI feedUrl, UUID siteId, UUID siteSecret, Boolean stripHtmlTags) {
        LOG.info("URL-received: " + feedUrl);
        final AtomicInteger successfullyIndexed = new AtomicInteger(0);
        final List<String> documents = new ArrayList<>();
        List<String> failedToIndex = new ArrayList<>();
        try {
            SyndFeed feed = new SyndFeedInput().build(new XmlReader(feedUrl.toURL()));

            feed.getEntries().forEach(entry -> {
                final String body;
                if (stripHtmlTags) {
                    body = entry.getDescription().getValue()
                            .replaceAll("\\<[^>]*>", "");
                } else {
                    body = entry.getDescription().getValue();
                }

                String url = entry.getLink();
                Page toIndex = new Page(
                        entry.getTitle(),
                        body,
                        url
                );
                final String pageId = Page.hashPageId(siteId, url);
                Optional<FetchedPage> indexed = indexDocument(pageId, siteId, toIndex);
                if (indexed.isPresent()) {
                    successfullyIndexed.incrementAndGet();
                    documents.add(pageId);
                } else {
                    failedToIndex.add(entry.getLink());
                    LOG.warn("unsuccessfully-indexed:" + entry.getLink());
                }
            });

            return Optional.of(new SiteIndexSummary(siteId, siteSecret, successfullyIndexed.get(), documents, failedToIndex));
        } catch (FeedException | IOException e) {
            LOG.warn(e.getMessage());
            return Optional.empty();
        }
    }


    public boolean clearSite(UUID siteId, UUID siteSecret) {
        if (isAllowedToModify(siteId, siteSecret)) {
            final Optional<List<String>> pages = fetchAllDocuments(siteId);
            if (pages.isPresent()) {
                String[] documents = new String[pages.get().size()];
                documents = pages.get().toArray(documents);
                INDEX_SERVICE.delete(documents);
                return true;
            }
        }
        return false;
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