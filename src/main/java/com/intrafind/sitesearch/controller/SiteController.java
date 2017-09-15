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
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import io.swagger.annotations.ApiResponses;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@RestController
@RequestMapping(SiteController.ENDPOINT)
public class SiteController {
    public static final String ENDPOINT = "/pages";
    private static final Logger LOG = LoggerFactory.getLogger(SiteController.class);
    private final PageService service;

    @Autowired
    SiteController(PageService service) {
        this.service = service;
    }

    //  /sites/{siteId}/{url}
    @RequestMapping(path = "url", method = RequestMethod.GET)
    ResponseEntity<FetchedPage> fetchViaUrl(
            @RequestParam(value = "url") String url,
            @RequestParam(value = "siteId") UUID siteId
    ) {
        String pageId = Page.hashSiteId(siteId, url);

        Optional<FetchedPage> fetched = service.fetchById(pageId);
        if (fetched.isPresent()) {
            return ResponseEntity.ok(fetched.get());
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    //  /sites/{siteId}
    @RequestMapping(method = RequestMethod.GET)
    ResponseEntity<List<String>> fetchAll(
            @RequestParam(value = "siteId") UUID siteId
    ) {
        Optional<List<String>> allDocumentsOfTenant = service.fetchAllDocuments(siteId);
        if (allDocumentsOfTenant.isPresent()) {
            return ResponseEntity.ok(allDocumentsOfTenant.get());
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    //  /sites/{siteId}/pages/{id}?siteSecret
    @RequestMapping(path = "{id}", method = RequestMethod.PUT)
    ResponseEntity<FetchedPage> updateExistingPage(
            @PathVariable("id") String id,
            @RequestParam(name = "siteId") UUID siteId,
            @RequestParam(name = "siteSecret") UUID siteSecret,
            @RequestBody Page page
    ) {
        // TODO use SiteUpdate DTO with NO siteId & NO siteSecret provided

        // TODO make sure that an existing page is actually updated
        Optional<FetchedPage> indexed = service.indexExistingPage(id, siteId, siteSecret, page);
        if (indexed.isPresent()) {
            return ResponseEntity.ok(indexed.get());
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    //  /sites/{siteId}/pages?siteSecret
    @RequestMapping(method = RequestMethod.PUT)
    ResponseEntity<FetchedPage> updateExistingSiteViaUrl(
            @RequestParam(name = "siteId") UUID siteId,
            @RequestParam(name = "siteSecret") UUID siteSecret,
            @RequestBody Page page
    ) {
        String pageId = Page.hashSiteId(siteId, page.getUrl());
        // TODO use SiteUpdate DTO with NO siteId & NO siteSecret provided

        // TODO make sure that an existing page is actually updated
        Optional<FetchedPage> indexed = service.indexExistingPage(pageId, siteId, siteSecret, page);
        if (indexed.isPresent()) {
            return ResponseEntity.ok(indexed.get());
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    //  /sites/{siteId}/rss?feedUrl&siteSecret
    @RequestMapping(path = "rss", method = RequestMethod.PUT)
    ResponseEntity<Tenant> indexRssFeed(
            @RequestParam(value = "siteId", required = false) UUID siteId,
            @RequestParam(value = "siteSecret", required = false) UUID siteSecret,
            @RequestParam(value = "feedUrl") URI feedUrl
    ) {
        Optional<Tenant> tenantCreatedInfo = service.indexFeed(feedUrl, siteId, siteSecret);
        if (tenantCreatedInfo.isPresent()) {
            return ResponseEntity.ok(tenantCreatedInfo.get());
        } else {
            return ResponseEntity.badRequest().build();
        }
    }

    //  /sites/{siteId}/pages/{id}?siteSecret
    @RequestMapping(method = RequestMethod.DELETE, path = "{id}")
    @ApiOperation(value = "Deletes a document from index", response = ApiResponses.class)
    ResponseEntity deleteSiteById(
            @ApiParam(value = "ID of a single document to delete", example = "5f2b9c2e-6071-4f30-8972-7781fac73726")
            @PathVariable(name = "id") String id,
            @RequestParam(name = "siteSecret", required = false) UUID siteSecret // TODO SECURITY_ISSUE implement a corresponding check
    ) {
        LOG.info("delete-event" + id);
        service.delete(id);
        return ResponseEntity.noContent().build();
    }
}
