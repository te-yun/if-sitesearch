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

package de.intrafind.sitesearch.jmh;

import de.intrafind.sitesearch.dto.Hits;
import org.openjdk.jmh.annotations.*;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import static de.intrafind.sitesearch.controller.SearchController.ENDPOINT;
import static org.junit.Assert.*;

public class LoadTest {
    private final static Logger LOG = LoggerFactory.getLogger(LoadTest.class);
    private static final String LOAD_TARGET = "http://sitesearch.cloud/index.html";
    private static final TestRestTemplate CALLER = new TestRestTemplate();

    @BenchmarkMode(Mode.SingleShotTime)
    @Threads(22)
    @Benchmark
    public void staticLoad() throws Exception {

        final ResponseEntity<String> actual = CALLER.getForEntity(LOAD_TARGET, String.class);

        assertNotNull(actual);
        assertFalse(actual.getBody().isEmpty());
        assertEquals(HttpStatus.OK, actual.getStatusCode());
    }

    @BenchmarkMode(Mode.SingleShotTime)
    @Threads(22)
    @OperationsPerInvocation(99)
    @Benchmark
    public void simpleSearch() throws Exception {
        final ResponseEntity<Hits> actual = CALLER.getForEntity(ENDPOINT + "?query=Munich", Hits.class);

        assertEquals(HttpStatus.OK, actual.getStatusCode());
        assertNotNull(actual);
        assertNotNull(actual.getBody());
    }
}
