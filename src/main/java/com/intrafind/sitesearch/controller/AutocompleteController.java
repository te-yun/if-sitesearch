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
import jetbrains.exodus.bindings.StringBinding;
import jetbrains.exodus.env.*;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.constraints.NotNull;
import java.util.HashMap;
import java.util.Map;
import java.util.UUID;
import java.util.concurrent.atomic.AtomicLong;

@CrossOrigin
@RestController
@RequestMapping(AutocompleteController.ENDPOINT)
public class AutocompleteController {
    public static final String ENDPOINT = "/autocomplete";
    private static final Logger LOG = LoggerFactory.getLogger(AutocompleteController.class);
    private final SearchService service;
    private Map<UUID, AtomicLong> searchCountPerTenant = new HashMap<>();

    @Autowired
    AutocompleteController(SearchService service) {
        this.service = service;
    }

    @RequestMapping(method = RequestMethod.GET)
    ResponseEntity<Hits> search(
            @CookieValue(value = "override-tenant", required = false) UUID cookieTenant,
            @RequestParam(value = "query", required = false, defaultValue = "") String query,
            @RequestParam(value = "tenantId") UUID tenantId
    ) {

        if (query.isEmpty()) return ResponseEntity.badRequest().build();

        // override tenantId with cookie value for debugging & speed up the getting started experience 
        if (cookieTenant != null) tenantId = cookieTenant;

        LOG.info("cookieTenant: " + cookieTenant);
        LOG.info("query: " + query);
        Hits searchResult = service.search(query, tenantId, true);
        if (searchResult.getResults().isEmpty()) {
            return ResponseEntity.notFound().build();
        } else {
            searchCountPerTenant.put(tenantId, new AtomicLong(searchCountPerTenant.getOrDefault(tenantId, new AtomicLong()).incrementAndGet()));
            LOG.info(tenantId + ": " + searchCountPerTenant.get(tenantId));
            // TODO save to xodus
            final Environment env = Environments.newInstance("data");
            UUID finalTenantId = tenantId;
            env.executeInTransaction(new TransactionalExecutable() {
                @Override
                public void execute(@NotNull final Transaction txn) {
                    final Store store = env.openStore("Messages", StoreConfig.WITHOUT_DUPLICATES, txn);
                    store.put(txn, StringBinding.stringToEntry(finalTenantId.toString()), StringBinding.stringToEntry(searchCountPerTenant.get(finalTenantId).toString()));
//                    store.put(txn, StringBinding.stringToEntry("Hello"), StringBinding.stringToEntry("World!"));
                    LOG.info("xodus-count: " + store.get(txn, StringBinding.stringToEntry(finalTenantId.toString())));
                    LOG.info("xodus-count-not-found: " + store.get(txn, StringBinding.stringToEntry("test")));
                }
            });
            env.close();
            return ResponseEntity.ok(searchResult);
        }
    }
}
