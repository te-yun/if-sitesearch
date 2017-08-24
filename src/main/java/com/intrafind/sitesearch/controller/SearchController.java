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
import java.util.UUID;

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

    //    private AtomicLong searchCount = new AtomicLong();
//    private Map<UUID, AtomicLong> queriesPerTenant = new HashMap<>();
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
        Hits searchResult = service.search(query, tenantId);
        if (searchResult.getResults().isEmpty()) {
            return ResponseEntity.notFound().build();
        } else {
            final UUID finalTenantId = tenantId;
//            queriesPerTenant.put(tenantId, new AtomicLong(queriesPerTenant.getOrDefault(tenantId, new AtomicLong()).incrementAndGet()));
//            LOG.info(tenantId + ": " + queriesPerTenant.get(tenantId));
//             TODO save to xodus
            final Environment env = Environments.newInstance("data");
            env.executeInTransaction(new TransactionalExecutable() {
                @Override
                public void execute(@NotNull final Transaction txn) {
                    final Store store = env.openStore(StatsController.QUERIES_PER_TENANT_STORE, StoreConfig.WITHOUT_DUPLICATES, txn);
                    long queryCount = 0;
                    if (store.get(txn, StringBinding.stringToEntry(finalTenantId.toString())) != null) {
                        queryCount = Long.valueOf(StringBinding.entryToString(store.get(txn, StringBinding.stringToEntry(finalTenantId.toString()))));
                        LOG.info("queryCount:>>>>>>>>>>>>>>>>>>>>>>>>> " + queryCount);
                    }

                    store.put(txn, StringBinding.stringToEntry(finalTenantId.toString()), StringBinding.stringToEntry(String.valueOf(++queryCount)));
                    LOG.info("xodus-count: " + store.get(txn, StringBinding.stringToEntry(finalTenantId.toString())));
                    LOG.info("queryCount: " + StringBinding.entryToString(store.get(txn, StringBinding.stringToEntry(finalTenantId.toString()))));
                    LOG.info("updated-queryCount: " + store.get(txn, StringBinding.stringToEntry(finalTenantId.toString())));
                }
            });
            env.close();
            return ResponseEntity.ok(searchResult);
        }
    }
}
