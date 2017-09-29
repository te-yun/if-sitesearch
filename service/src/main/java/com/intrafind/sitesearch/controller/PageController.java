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
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.util.Optional;

@CrossOrigin
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

    @RequestMapping(method = RequestMethod.POST)
    ResponseEntity<Page> indexNewSite(@RequestBody Page page) {
        // TODO use SiteCreation DTO with siteId & siteSecret onReturn
        Optional<Page> indexed = service.indexNewTenantCreatingSite(page);
        if (indexed.isPresent()) {
            Page created = indexed.get();
            return ResponseEntity.created(URI.create("https://sitesearch.cloud/sites/" + created.getId())).body(created);
        } else {
            return ResponseEntity.badRequest().build();
        }
    }

    @RequestMapping(method = RequestMethod.GET, path = "{id}")
    ResponseEntity<FetchedPage> fetchById(@PathVariable("id") String id) {
        Optional<FetchedPage> fetched = service.fetchById(id);
        if (fetched.isPresent()) {
            return ResponseEntity.ok(fetched.get());
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
