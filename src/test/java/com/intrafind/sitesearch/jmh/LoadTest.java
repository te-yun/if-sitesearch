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

package com.intrafind.sitesearch.jmh;

import com.intrafind.sitesearch.controller.SearchController;
import com.intrafind.sitesearch.dto.Hits;
import com.intrafind.sitesearch.integration.SearchTest;
import org.openjdk.jmh.annotations.Benchmark;
import org.openjdk.jmh.annotations.BenchmarkMode;
import org.openjdk.jmh.annotations.Mode;
import org.openjdk.jmh.annotations.Threads;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import java.util.*;

import static org.junit.Assert.assertEquals;

public class LoadTest {
    private final static Logger LOG = LoggerFactory.getLogger(LoadTest.class);
    private static final String LOAD_TARGET = "https://sitesearch.cloud";
    //    private static final String LOAD_TARGET = "http://localhost:8001";
    private static final TestRestTemplate CALLER = new TestRestTemplate();

//    @BenchmarkMode(Mode.SingleShotTime)
//    @Threads(22)
//    @Benchmark
//    public void staticLoad() throws Exception {
//
//        final ResponseEntity<String> actual = CALLER.getForEntity(LOAD_TARGET, String.class);
//
//        assertNotNull(actual);
//        assertFalse(actual.getBody().isEmpty());
//        assertEquals(HttpStatus.OK, actual.getStatusCode());
//    }

    private static final List<UUID> tenants = Arrays.asList(
            SearchTest.SEARCH_TENANT_ID,
            UUID.fromString("363d50f3-17cb-4756-aeca-7d3768092ae1"),
            UUID.fromString("1a6715d9-119f-48d1-9329-e8763273bbea")
    );
    private static final Map<String, Long> queries = new HashMap<>();

    static {
        queries.put("knowledge", 1L);
        queries.put("ifinder", 7L);
        queries.put("\uD83E\uDD84", 25L);
    }

//    @BenchmarkMode(Mode.Throughput)
//    @Threads(1)
////    @Fork(9)
////    @OperationsPerInvocation(1000)
//    @Benchmark
//    public void search() throws Exception {
//        final ResponseEntity<Hits> actual = CALLER.getForEntity(
//                LOAD_TARGET + SearchController.ENDPOINT
//                        + "?query=knowledge&tenantId=" + SearchTest.SEARCH_TENANT_ID,
//                Hits.class
//        );
//
//        assertEquals(HttpStatus.OK, actual.getStatusCode());
//        assertEquals(1, actual.getBody().getResults().size());
//    }

    @BenchmarkMode(Mode.Throughput)
    @Threads(10)
    @Benchmark
    public void searchComplex() throws Exception {
        Random random = new Random();
//        final int queryIndex = random.nextInt(queries.size());
        final int queryIndex = random.nextInt(queries.size());
        LOG.info("queryIndex: " + queryIndex);
        LOG.info("queryIndex: " + queries.keySet());
        LOG.info("queryIndex: " + queries.keySet().toArray()[queryIndex]);
        LOG.info("queryIndex: " + queries.keySet());
        List<String> queryList = new ArrayList<>(queries.keySet());

        final String query = queryList.get(queryIndex);
        final ResponseEntity<Hits> actual = CALLER.getForEntity(
                LOAD_TARGET + SearchController.ENDPOINT
                        + "?query=" + query + "&tenantId=" + SearchTest.SEARCH_TENANT_ID,
                Hits.class
        );

        assertEquals(HttpStatus.OK, actual.getStatusCode());
        LOG.info("queryIndex: " + queryIndex);
        LOG.info("queryList.get(queryIndex): " + query);
        final long queryResultCount = queries.get(query);
        LOG.info("queries.get(queryList.get(queryIndex)): " + queryResultCount);
        assertEquals(queryResultCount, actual.getBody().getResults().size());
    }
}
