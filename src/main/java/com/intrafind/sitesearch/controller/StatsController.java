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
import jetbrains.exodus.bindings.StringBinding;
import jetbrains.exodus.env.*;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.constraints.NotNull;
import java.util.UUID;
import java.util.concurrent.atomic.AtomicLong;

@CrossOrigin
@RestController
@RequestMapping(StatsController.ENDPOINT)
public class StatsController {
    static final String ENDPOINT = "/stats";
    private static final Logger LOG = LoggerFactory.getLogger(StatsController.class);
    static final String QUERIES_PER_TENANT_STORE = "queriesPerTenant";

    @RequestMapping(method = RequestMethod.GET)
    ResponseEntity stats(
            @RequestParam(value = "tenantId") UUID tenantId
    ) {
        AtomicLong queryCount = new AtomicLong();
        final Environment env = Environments.newInstance("data");
//        final ContextualEnvironment contextualEnvironment = Environments.newContextualInstance("data");
        env.executeInTransaction(new TransactionalExecutable() {
            @Override
            public void execute(@NotNull final Transaction txn) {
                final Store store = env.openStore(QUERIES_PER_TENANT_STORE, StoreConfig.WITHOUT_DUPLICATES, txn);
                long queryCountValue = Long.valueOf(StringBinding.entryToString(store.get(txn, StringBinding.stringToEntry(tenantId.toString()))));
                queryCount.set(queryCountValue);
                LOG.info(tenantId + ": " + queryCountValue);
            }
        });
        env.close();
        return ResponseEntity.ok(new Stats(System.getenv("BUILD_NUMBER"), System.getenv("SCM_HASH"), queryCount.get()));
    }
}
