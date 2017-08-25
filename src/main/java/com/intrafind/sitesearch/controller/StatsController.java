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

import com.intrafind.sitesearch.dto.Stats;
import jetbrains.exodus.ArrayByteIterable;
import jetbrains.exodus.ByteIterable;
import jetbrains.exodus.bindings.LongBinding;
import jetbrains.exodus.bindings.StringBinding;
import jetbrains.exodus.env.Store;
import jetbrains.exodus.env.StoreConfig;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;
import java.util.concurrent.atomic.AtomicLong;

@CrossOrigin
@RestController
@RequestMapping(StatsController.ENDPOINT)
public class StatsController {
    //    public static final Environment EXODUS_ENV = Environments.newInstance("data");
    public static final String ENDPOINT = "/stats";
    private static final Logger LOG = LoggerFactory.getLogger(StatsController.class);
    static final String QUERIES_PER_TENANT_STORE = "tenantQueries";

    @RequestMapping(method = RequestMethod.GET)
    ResponseEntity<Stats> stats(
            @RequestParam(value = "tenantId") UUID tenantId
    ) {
        final AtomicLong queryCount = new AtomicLong();
//        Environment ACID_PERSISTENCE = Environments.newInstance("data");
//        final ContextualEnvironment contextualEnvironment = Environments.newContextualInstance("data");
//       SearchController. ACID_PERSISTENCE.executeInTransaction(txn -> {
        final ArrayByteIterable readableTenantId = StringBinding.stringToEntry(tenantId.toString());
        SearchController.ACID_PERSISTENCE.executeInReadonlyTransaction(txn -> {
            final Store store = SearchController.ACID_PERSISTENCE.openStore(QUERIES_PER_TENANT_STORE, StoreConfig.WITHOUT_DUPLICATES, txn);
            final ByteIterable queryCountValue = store.get(txn, readableTenantId);
            if (queryCountValue != null) {
                queryCount.set(LongBinding.entryToLong(queryCountValue));
            }
        });
//        SearchController.ACID_PERSISTENCE.close();
        return ResponseEntity.ok(new Stats(System.getenv("BUILD_NUMBER"), System.getenv("SCM_HASH"), queryCount.get()));
    }
}
