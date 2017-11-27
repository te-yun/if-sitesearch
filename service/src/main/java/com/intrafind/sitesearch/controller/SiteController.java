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

package com.intrafind.sitesearch.controller;

import com.intrafind.sitesearch.dto.FetchedPage;
import com.intrafind.sitesearch.dto.Page;
import com.intrafind.sitesearch.dto.SiteCreation;
import com.intrafind.sitesearch.dto.SiteIndexSummary;
import com.intrafind.sitesearch.service.PageService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.UnsupportedEncodingException;
import java.net.URI;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@RestController
@RequestMapping(SiteController.ENDPOINT)
public class SiteController {
    public static final String ENDPOINT = "/sites";
    private static final Logger LOG = LoggerFactory.getLogger(SiteController.class);
    private final PageService service;

    @Autowired
    private SiteController(PageService service) {
        this.service = service;
    }

    @RequestMapping(method = RequestMethod.POST)
    ResponseEntity<SiteCreation> createNewSite() {
        // TODO use SiteCreation DTO with siteId & siteSecret onReturn
        SiteCreation newlyCreatedSite = service.createSite();
        return ResponseEntity
                .created(URI.create("https://api.sitesearch.cloud/sites/" + newlyCreatedSite.getSiteId()))
                .body(newlyCreatedSite);
    }

    @RequestMapping(path = "{siteId}/pages", method = RequestMethod.GET)
    ResponseEntity<FetchedPage> fetchViaUrl(
            @PathVariable(value = "siteId") UUID siteId,
//            @RequestParam(value = "url") URI url
            @RequestParam(value = "url") String url
    ) throws UnsupportedEncodingException {
        String pageId = Page.hashPageId(siteId, url);

        Optional<FetchedPage> fetched = service.fetchById(pageId);
        if (fetched.isPresent()) {
            return ResponseEntity.ok(fetched.get());
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @RequestMapping(path = "{siteId}/pages", method = RequestMethod.PUT)
    ResponseEntity<FetchedPage> addPageToSiteIndex(
            @PathVariable(name = "siteId") UUID siteId,
            @RequestParam(name = "siteSecret") UUID siteSecret,
            @RequestBody Page page
    ) {
//        page.setUrl(decodedUrl); // make sure both URLs are aligned, TODO use a separate DTO sans-url later on

        String pageId = Page.hashPageId(siteId, page.getUrl());
        // TODO use SiteUpdate DTO with NO siteId & NO siteSecret provided

        // TODO make sure that an existing page is actually updated
        Optional<FetchedPage> indexed = service.indexExistingPage(pageId, siteId, siteSecret, page);
        if (indexed.isPresent()) {
            return ResponseEntity.ok(indexed.get());
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @RequestMapping(path = "{siteId}/pages/{pageId}", method = RequestMethod.PUT)
    ResponseEntity<FetchedPage> updateExistingPageInSiteIndex(
            @PathVariable(name = "siteId") UUID siteId,
            @PathVariable("pageId") String pageId,
            @RequestParam(name = "siteSecret") UUID siteSecret,
            @RequestBody Page page
    ) {
        if (pageId.length() != 64) { // just good enough but not sufficient to guarantee a valid, collision-safe GLOBAL pageId
            return ResponseEntity.badRequest().build();
        }
        // TODO use SiteUpdate DTO with NO siteId & NO siteSecret provided

        // TODO make sure that an existing page is actually updated
        Optional<FetchedPage> indexed = service.indexExistingPage(pageId, siteId, siteSecret, page);
        if (indexed.isPresent()) {
            return ResponseEntity.ok(indexed.get());
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @RequestMapping(path = "{siteId}", method = RequestMethod.GET)
    ResponseEntity<List<String>> fetchAll(
            @PathVariable(value = "siteId") UUID siteId
    ) {
        Optional<List<String>> allDocumentsOfTenant = service.fetchAllDocuments(siteId);
        if (allDocumentsOfTenant.isPresent()) {
            return ResponseEntity.ok(allDocumentsOfTenant.get());
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @RequestMapping(path = "{siteId}/xml", method = RequestMethod.PUT)
    ResponseEntity<SiteIndexSummary> reimportIndex(
            @PathVariable(value = "siteId") UUID siteId,
            @RequestParam(value = "siteSecret") UUID siteSecret,
//            @RequestParam(value = "xmlUrl") URI xmlUrl,
            @RequestParam(value = "xmlUrl") String xmlUrl,
            @RequestParam(value = "stripHtmlTags", required = false, defaultValue = "false") Boolean stripHtmlTags,
            @RequestParam(value = "clearIndex", required = false, defaultValue = "false") Boolean clearIndex
    ) {
        return indexAsRssFeed(siteId, siteSecret, URI.create(xmlUrl), stripHtmlTags, true, clearIndex);
    }

    @RequestMapping(path = "{siteId}/rss", method = RequestMethod.PUT)
    ResponseEntity<SiteIndexSummary> indexRssFeed(
            @PathVariable(value = "siteId") UUID siteId,
            @RequestParam(value = "siteSecret") UUID siteSecret,
//            @RequestParam(value = "feedUrl") URI feedUrl,
            @RequestParam(value = "feedUrl") String feedUrl,
            @RequestParam(value = "stripHtmlTags", required = false, defaultValue = "false") Boolean stripHtmlTags
    ) {
        return indexAsRssFeed(siteId, siteSecret, URI.create(feedUrl), stripHtmlTags, false, false);
    }

    @RequestMapping(path = "rss", method = RequestMethod.POST)
    ResponseEntity<SiteIndexSummary> indexNewRssFeed(
            @RequestParam(value = "feedUrl") String feedUrl,
//            @RequestParam(value = "feedUrl") URI feedUrl,
            @RequestParam(value = "stripHtmlTags", required = false, defaultValue = "false") Boolean stripHtmlTags
    ) {
        return indexAsRssFeed(null, null, URI.create(feedUrl), stripHtmlTags, false, false);
    }

    private ResponseEntity<SiteIndexSummary> indexAsRssFeed(UUID siteId, UUID siteSecret, URI feedUrl, Boolean stripHtmlTags, Boolean isGeneric, Boolean clearIndex) {
        Optional<SiteIndexSummary> siteCreatedInfo = service.indexFeed(feedUrl, siteId, siteSecret, stripHtmlTags, isGeneric, clearIndex);
        if (siteCreatedInfo.isPresent()) {
            return ResponseEntity.ok(siteCreatedInfo.get());
        } else {
            return ResponseEntity.badRequest().build();
        }
    }

    @RequestMapping(path = "{siteId}/pages/{pageId}", method = RequestMethod.DELETE)
    ResponseEntity deleteById(
            @PathVariable(name = "siteId") UUID siteId,
            @PathVariable(name = "pageId") String pageId,
            @RequestParam(name = "siteSecret") UUID siteSecret
    ) {
        LOG.info("delete-event" + pageId);
        if (service.delete(siteId, siteSecret, pageId)) {
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.notFound().build(); // do not return UNAUTHORIZED/FORBIDDEN as those could be miss-used for brute force attacks
        }
    }

    @RequestMapping(path = "{siteId}/pages", method = RequestMethod.DELETE)
    ResponseEntity<?> deleteViaUrl(
            @PathVariable(value = "siteId") UUID siteId,
//            @RequestParam(value = "url") URI url,
            @RequestParam(value = "url") String url,
            @RequestParam(name = "siteSecret") UUID siteSecret
    ) throws UnsupportedEncodingException {
        String pageId = Page.hashPageId(siteId, url);

        return deleteById(siteId, pageId, siteSecret);
    }

    @RequestMapping(path = "{siteId}", method = RequestMethod.DELETE)
    ResponseEntity<?> clearSiteIndex(
            @PathVariable(value = "siteId") UUID siteId,
            @RequestParam(name = "siteSecret") UUID siteSecret
    ) {
        if (service.clearSite(siteId, siteSecret)) {
            return ResponseEntity.ok().build();
        } else {
            return ResponseEntity.noContent().build();
        }
    }
}
