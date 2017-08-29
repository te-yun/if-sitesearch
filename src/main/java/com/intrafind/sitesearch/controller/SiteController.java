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

import com.intrafind.sitesearch.dto.Site;
import com.intrafind.sitesearch.dto.Tenant;
import com.intrafind.sitesearch.service.SiteService;
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

@CrossOrigin
@RestController
@RequestMapping(SiteController.ENDPOINT)
public class SiteController {
    public static final String ENDPOINT = "/sites";
    private static final Logger LOG = LoggerFactory.getLogger(SiteController.class);
    private final SiteService service;

    @Autowired
    SiteController(SiteService service) {
        this.service = service;
    }

    /**
     * Fetches a specific site from index.
     *
     * @param id of the site to be fetched
     * @return site as it is present in index
     */
    @RequestMapping(method = RequestMethod.GET, path = "{id}")
    ResponseEntity<Site> fetchById(
            @PathVariable("id") String id
    ) {
        Optional<Site> fetched = service.fetchById(id);
        if (fetched.isPresent()) {
            return ResponseEntity.ok(fetched.get());
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @RequestMapping(method = RequestMethod.GET)
    ResponseEntity<List<UUID>> fetchAll(
            @RequestParam(value = "tenantId") UUID tenantId
    ) {
        Optional<List<UUID>> allDocumentsOfTenant = service.fetchAllDocuments(tenantId);
        if (allDocumentsOfTenant.isPresent()) {
            return ResponseEntity.ok(allDocumentsOfTenant.get());
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    /**
     * Inserts a site into index.
     *
     * @param site to be indexed
     */
    @RequestMapping(path = "{id}", method = RequestMethod.PUT)
    ResponseEntity<Site> indexExistingSite(
            @PathVariable("id") String id,
            @RequestParam(name = "tenantId") UUID tenantId,
            @RequestParam(name = "tenantSecret") UUID tenantSecret,
            @RequestBody Site site
    ) {
        // TODO use SiteUpdate DTO with NO tenantId & NO tenantSecret provided

        // TODO make sure that an existing site is actually updated
        Optional<Site> indexed = service.indexExistingSite(id, tenantId, tenantSecret, site);
        if (indexed.isPresent()) {
            return ResponseEntity.ok(indexed.get());
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @RequestMapping(method = RequestMethod.PUT)
    ResponseEntity<Site> indexNewSite(@RequestBody Site site) {
        // TODO use SiteCreation DTO with tenantId & tenantSecret
        Optional<Site> indexed = service.indexNewTenantCreatingSite(site);
        if (indexed.isPresent()) {
            Site created = indexed.get();
            return ResponseEntity.created(URI.create("https://sitesearch.cloud/sites/" + created.getId())).body(created);
        } else {
            return ResponseEntity.badRequest().build();
        }
    }

    @RequestMapping(path = "rss", method = RequestMethod.PUT)
    ResponseEntity<Tenant> indexRssFeed(
            @RequestParam(value = "tenantId", required = false) UUID tenantId,
            @RequestParam(value = "tenantSecret", required = false) UUID tenantSecret,
            @RequestParam(value = "feedUrl") URI feedUrl
    ) {
        Optional<Tenant> tenantCreatedInfo = service.indexFeed(feedUrl, tenantId, tenantSecret);
        if (tenantCreatedInfo.isPresent()) {
            return ResponseEntity.ok(tenantCreatedInfo.get());
        } else {
            return ResponseEntity.badRequest().build();
        }
    }

    /**
     * Deletes site from the index.
     *
     * @param id of a single document to delete
     */
    @RequestMapping(method = RequestMethod.DELETE, path = "{id}")
    @ApiOperation(value = "Deletes a document from index", response = ApiResponses.class)
    ResponseEntity deleteSiteById(
            @ApiParam(value = "ID of a single document to delete", example = "5f2b9c2e-6071-4f30-8972-7781fac73726")
            @PathVariable(name = "id") String id
    ) {
        LOG.info("delete-event" + id);
        // TODO assure that only owner can delete a site
        service.delete(id);
        return ResponseEntity.noContent().build();
    }
}
