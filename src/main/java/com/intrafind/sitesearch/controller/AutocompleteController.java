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

import com.intrafind.sitesearch.dto.Autocomplete;
import com.intrafind.sitesearch.service.SearchService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

@CrossOrigin
@RestController
@RequestMapping(AutocompleteController.ENDPOINT)
public class AutocompleteController {
    public static final String ENDPOINT = "api/autocomplete";
    private static final Logger LOG = LoggerFactory.getLogger(AutocompleteController.class);
    private final SearchService service;

    @Autowired
    AutocompleteController(SearchService service) {
        this.service = service;
    }

    @RequestMapping(method = RequestMethod.GET)
    ResponseEntity<Autocomplete> search(
            @CookieValue(value = "override-tenant", required = false) UUID cookieTenant,
            @RequestParam(value = "query", required = false, defaultValue = "") String query,
            @RequestParam(value = "tenantId") UUID tenantId
    ) {

        if (query.isEmpty()) return ResponseEntity.badRequest().build();

        // override tenantId with cookie value for debugging & speed up the getting started experience 
        if (cookieTenant != null) tenantId = cookieTenant;

        LOG.info("cookieTenant: " + cookieTenant);
        LOG.info("query: " + query);
        Autocomplete result = service.autocomplete(query, tenantId);
        if (result.getResults().isEmpty()) {
            return ResponseEntity.notFound().build();
        } else {
            return ResponseEntity.ok(result);
        }
    }
}
