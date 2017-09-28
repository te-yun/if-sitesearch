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
import com.intrafind.sitesearch.dto.Tenant;
import com.intrafind.sitesearch.service.PageService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.UnsupportedEncodingException;
import java.net.URI;
import java.net.URLDecoder;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@CrossOrigin
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

    //  /sites/{siteId}/pages/url/{url}
    @RequestMapping(path = "{siteId}/pages/url/{url:.+}", method = RequestMethod.GET)
    ResponseEntity<FetchedPage> fetchViaUrl(
            @PathVariable(value = "siteId") UUID siteId,
            @PathVariable(value = "url") URI url
    ) throws UnsupportedEncodingException {
        String pageId = Page.hashPageId(siteId, URLDecoder.decode(url.toString(), "UTF-8"));
//        String pageId = Page.hashPageId(siteId, url.toString());

        Optional<FetchedPage> fetched = service.fetchById(pageId);
        if (fetched.isPresent()) {
            return ResponseEntity.ok(fetched.get());
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    //  /sites/{siteId}/pages?siteSecret
    @RequestMapping(path = "{siteId}/pages/url/{url:.+}", method = RequestMethod.PUT)
    ResponseEntity<FetchedPage> updateExistingPageViaUrl(
            @PathVariable(name = "siteId") UUID siteId,
            @PathVariable(name = "url") URI url,
            @RequestParam(name = "siteSecret") UUID siteSecret,
            @RequestBody Page page
    ) throws UnsupportedEncodingException {
        final String decodedUrl = URLDecoder.decode(url.toString(), "UTF-8");
        page.setUrl(decodedUrl); // make sure both URLs are aligned, TODO use a separate DTO sans-url later on

//        String pageId = Page.hashPageId(siteId, page.getUrl());
        String pageId = Page.hashPageId(siteId, decodedUrl);
        // TODO use SiteUpdate DTO with NO siteId & NO siteSecret provided

        // TODO make sure that an existing page is actually updated
        Optional<FetchedPage> indexed = service.indexExistingPage(pageId, siteId, siteSecret, page);
        if (indexed.isPresent()) {
            return ResponseEntity.ok(indexed.get());
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    //  /sites/{siteId}/pages/{id}?siteSecret
    @RequestMapping(path = "{siteId}/pages/{pageId}", method = RequestMethod.PUT)
    ResponseEntity<FetchedPage> updateExistingPage(
            @PathVariable(name = "siteId") UUID siteId,
            @PathVariable("pageId") String pageId,
            @RequestParam(name = "siteSecret") UUID siteSecret,
            @RequestBody Page page
    ) {
        // TODO use SiteUpdate DTO with NO siteId & NO siteSecret provided

        // TODO make sure that an existing page is actually updated
        Optional<FetchedPage> indexed = service.indexExistingPage(pageId, siteId, siteSecret, page);
        if (indexed.isPresent()) {
            return ResponseEntity.ok(indexed.get());
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    //  /sites/{siteId}
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

    //  /sites/{siteId}/rss?feedUrl&siteSecret
    @RequestMapping(path = "{siteId}/rss", method = RequestMethod.PUT)
    ResponseEntity<Tenant> indexRssFeed(
            @PathVariable(value = "siteId") UUID siteId,
            @RequestParam(value = "siteSecret") UUID siteSecret,
            @RequestParam(value = "feedUrl") URI feedUrl
    ) {
        return indexAsRssFeed(siteId, siteSecret, feedUrl);
    }

    //  /sites/{siteId}/rss?feedUrl&siteSecret
    @RequestMapping(path = "rss", method = RequestMethod.POST)
    ResponseEntity<Tenant> indexNewRssFeed(
            @RequestParam(value = "feedUrl") URI feedUrl
    ) {
        return indexAsRssFeed(null, null, feedUrl);
    }

    private ResponseEntity<Tenant> indexAsRssFeed(UUID siteId, UUID siteSecret, URI feedUrl) {
        Optional<Tenant> tenantCreatedInfo = service.indexFeed(feedUrl, siteId, siteSecret);
        if (tenantCreatedInfo.isPresent()) {
            return ResponseEntity.ok(tenantCreatedInfo.get());
        } else {
            return ResponseEntity.badRequest().build();
        }
    }

    //  /sites/{siteId}/pages/{id}?siteSecret
    @RequestMapping(path = "{siteId}/pages/{pageId}", method = RequestMethod.DELETE)
    ResponseEntity deleteSiteById(
            @PathVariable(name = "siteId") UUID siteId,
            @PathVariable(name = "pageId") String pageId,
            @RequestParam(name = "siteSecret") UUID siteSecret // TODO SECURITY_ISSUE implement a corresponding check
    ) {
        LOG.info("delete-event" + pageId);
        if (service.delete(siteId, siteSecret, pageId)) {
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.notFound().build(); // do not return UNAUTHORIZED/FORBIDDEN as those could be miss-used for brute force attacks
        }
    }
}
