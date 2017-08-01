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

import org.openjdk.jmh.annotations.Benchmark;
import org.openjdk.jmh.annotations.BenchmarkMode;
import org.openjdk.jmh.annotations.Mode;
import org.openjdk.jmh.annotations.Threads;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import static org.junit.Assert.*;

//@State(Scope.Benchmark)
public class LoadTest {
    private final static Logger LOG = LoggerFactory.getLogger(LoadTest.class);
    private static final String LOAD_TARGET = "http://sitesearch.cloud/index.html";

    @BenchmarkMode(Mode.SingleShotTime)
    @Threads(2)
    @Benchmark
    public void benchmark() throws Exception {
        final TestRestTemplate testRestTemplate = new TestRestTemplate();

        final String forObject = testRestTemplate.getForObject(LOAD_TARGET, String.class);
        final ResponseEntity<String> forEntity = testRestTemplate.getForEntity(LOAD_TARGET, String.class);

        System.out.println("MY TEST");

        assertNotNull(forObject);
        assertFalse(forObject.isEmpty());
        assertEquals(forEntity.getStatusCode(), HttpStatus.OK);
    }
}
