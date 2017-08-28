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

import com.intrafind.sitesearch.controller.AutocompleteController;
import com.intrafind.sitesearch.controller.SearchController;
import com.intrafind.sitesearch.dto.Autocomplete;
import com.intrafind.sitesearch.dto.Hits;
import com.intrafind.sitesearch.integration.SearchTest;
import org.openjdk.jmh.annotations.Benchmark;
import org.openjdk.jmh.annotations.BenchmarkMode;
import org.openjdk.jmh.annotations.Mode;
import org.openjdk.jmh.annotations.Threads;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import static org.junit.Assert.assertEquals;

@Threads(100)
@BenchmarkMode(Mode.Throughput)
public class Load100Users {
    private final static Logger LOG = LoggerFactory.getLogger(Load100Users.class);
//    private static final TestRestTemplate CALLER = new TestRestTemplate();

    @Benchmark
    public void searchComplex() throws Exception {
        final int queryIndex = Load.PSEUDO_ENTROPY.nextInt(Load.SEARCH_QUERIES.size());
        final String query = Load.QUERY_LIST_SEARCH.get(queryIndex);

        final ResponseEntity<Hits> actual = Load.CALLER.getForEntity(
                Load.LOAD_TARGET + SearchController.ENDPOINT
                        + "?query=" + query + "&tenantId=" + SearchTest.SEARCH_TENANT_ID,
                Hits.class
        );

        assertEquals(HttpStatus.OK, actual.getStatusCode());
        final long queryResultCount = Load.SEARCH_QUERIES.get(query);
        assertEquals(queryResultCount, actual.getBody().getResults().size());
    }

    @Benchmark
    public void autocomplete() throws Exception {
        final int queryIndex = Load.PSEUDO_ENTROPY.nextInt(Load.AUTOCOMPLETE_QUERIES.size());
        final String query = Load.QUERY_LIST_AUTOCOMPLETE.get(queryIndex);

        final ResponseEntity<Autocomplete> actual = Load.CALLER.getForEntity(
                Load.LOAD_TARGET + AutocompleteController.ENDPOINT
                        + "?query=" + query + "&tenantId=" + SearchTest.SEARCH_TENANT_ID,
                Autocomplete.class
        );

        assertEquals(HttpStatus.OK, actual.getStatusCode());
        final long queryResultCount = Load.AUTOCOMPLETE_QUERIES.get(query);
        assertEquals(queryResultCount, actual.getBody().getResults().size());
    }
}
