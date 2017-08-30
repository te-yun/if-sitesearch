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

import org.openjdk.jmh.annotations.Benchmark;
import org.openjdk.jmh.annotations.BenchmarkMode;
import org.openjdk.jmh.annotations.Mode;
import org.openjdk.jmh.annotations.Threads;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@Threads(100)
@BenchmarkMode(Mode.Throughput)
public class Load100Users {
    private static final Load10Users LOAD_10_USERS = new Load10Users();
    private static final Logger LOG = LoggerFactory.getLogger(Load100Users.class);

    @Benchmark
    public void searchComplex() throws Exception {
        LOAD_10_USERS.searchComplex();

//        final int queryIndex = Load10Users.PSEUDO_ENTROPY.nextInt(Load10Users.SEARCH_QUERIES.size());
//        final String query = Load10Users.QUERY_LIST_SEARCH.get(queryIndex);
//
//        final ResponseEntity<Hits> actual = Load10Users.CALLER.getForEntity(
//                Load10Users.LOAD_TARGET + SearchController.ENDPOINT
//                        + "?query=" + query + "&tenantId=" + SearchTest.SEARCH_TENANT_ID,
//                Hits.class
//        );
//
//        assertEquals(HttpStatus.OK, actual.getStatusCode());
//        final long queryResultCount = Load10Users.SEARCH_QUERIES.get(query);
//        assertEquals(queryResultCount, actual.getBody().getResults().size());
    }

    @Benchmark
    public void autocomplete() throws Exception {
        LOAD_10_USERS.autocomplete();

//        Load10Users.initAutocomplete();            // TODO remove this?
//
//        final int queryIndex = Load10Users.PSEUDO_ENTROPY.nextInt(Load10Users.AUTOCOMPLETE_QUERIES.size());
//        final String query = Load10Users.QUERY_LIST_AUTOCOMPLETE.get(queryIndex);
//
//        final ResponseEntity<Autocomplete> actual = Load10Users.CALLER.getForEntity(
//                Load10Users.LOAD_TARGET + AutocompleteController.ENDPOINT
//                        + "?query=" + query + "&tenantId=" + SearchTest.SEARCH_TENANT_ID,
//                Autocomplete.class
//        );

//        Autocomplete decay bug prevents assertions
//        assertEquals(HttpStatus.OK, actual.getStatusCode());
//        final long queryResultCount = Load10Users.AUTOCOMPLETE_QUERIES.get(query);
//        assertEquals(queryResultCount, actual.getBody().getResults().size());
    }
}
