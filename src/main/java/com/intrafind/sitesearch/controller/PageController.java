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
import java.util.Optional;
import java.util.UUID;

@RestController
@RequestMapping(PageController.ENDPOINT)
public class PageController {
    public static final String ENDPOINT = "/pages";
    private static final Logger LOG = LoggerFactory.getLogger(PageController.class);
    private final PageService service;

    @Autowired
    private PageController(PageService service) {
        this.service = service;
    }

    //  /pages
    @RequestMapping(method = RequestMethod.POST)
    ResponseEntity<Page> indexNewSite(@RequestBody Page page) {
        // TODO use SiteCreation DTO with siteId & siteSecret
        Optional<Page> indexed = service.indexNewTenantCreatingSite(page);
        if (indexed.isPresent()) {
            Page created = indexed.get();
            return ResponseEntity.created(URI.create("https://sitesearch.cloud/sites/" + created.getId())).body(created);
        } else {
            return ResponseEntity.badRequest().build();
        }
    }

    //  /pages/{pageId}
    @RequestMapping(method = RequestMethod.GET, path = "{id}")
    ResponseEntity<FetchedPage> fetchById(
            @PathVariable("id") String id
    ) {
        Optional<FetchedPage> fetched = service.fetchById(id);
        if (fetched.isPresent()) {
            return ResponseEntity.ok(fetched.get());
        } else {
            return ResponseEntity.notFound().build();
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
