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

import com.intrafind.sitesearch.dto.Hits;
import com.intrafind.sitesearch.service.SearchService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;
import java.util.UUID;
import java.util.concurrent.atomic.AtomicLong;

@CrossOrigin
@RestController
@RequestMapping(SearchController.ENDPOINT)
public class SearchController {
    public static final String ENDPOINT = "/search";
    private static final Logger LOG = LoggerFactory.getLogger(SearchController.class);
    private final SearchService service;

    @Autowired
    SearchController(SearchService service) {
        this.service = service;
    }

    private AtomicLong searchCount = new AtomicLong();
    private Map<UUID, AtomicLong> searchCountPerTenant = new HashMap<>();
    @RequestMapping(method = RequestMethod.GET)
    ResponseEntity<Hits> search(
            @CookieValue(value = "override-tenant", required = false) UUID cookieTenant,
            @RequestParam(value = "sSearchTerm", required = false, defaultValue = "") String sSearchTerm, // legacy parameter
            @RequestParam(value = "query", required = false, defaultValue = "") String query,
            @RequestParam(value = "tenantId") UUID tenantId
    ) {

        // to stay compatible with the legacy API for now
        if (!sSearchTerm.isEmpty()) query = sSearchTerm;

        // override tenantId with cookie value for debugging & speed up the getting started experience 
        if (cookieTenant != null) tenantId = cookieTenant;

        LOG.info("cookieTenant: " + cookieTenant);
        LOG.info("query: " + query);
        Hits searchResult = service.search(query, tenantId);
        if (searchResult.getResults().isEmpty()) {
            return ResponseEntity.notFound().build();
        } else {
            final UUID finalTenantId = tenantId;
//            searchCountPerTenant.compute(tenantId, (uuid, atomicLong) -> {
//                LOG.info(finalTenantId +": " + atomicLong.get());
//                return new AtomicLong(atomicLong.incrementAndGet());
//            });
            return ResponseEntity.ok(searchResult);
        }
    }
}
