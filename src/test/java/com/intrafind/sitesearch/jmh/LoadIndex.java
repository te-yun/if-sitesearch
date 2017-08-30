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

import com.intrafind.sitesearch.controller.SiteController;
import com.intrafind.sitesearch.dto.Site;
import org.openjdk.jmh.annotations.Benchmark;
import org.openjdk.jmh.annotations.BenchmarkMode;
import org.openjdk.jmh.annotations.Mode;
import org.openjdk.jmh.annotations.Threads;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import java.util.UUID;

import static org.junit.Assert.*;

@Threads(2)
@BenchmarkMode(Mode.Throughput)
public class LoadIndex {
    private final static Logger LOG = LoggerFactory.getLogger(LoadIndex.class);

    private static String generateLoremIpsum() {
        final StringBuilder loremIpsumText = new StringBuilder();
        for (String word : Load10Users.LOREM_IPSUM) {
            final int wordIndex = Load10Users.PSEUDO_ENTROPY.nextInt(Load10Users.LOREM_IPSUM.length);
            loremIpsumText.append(Load10Users.LOREM_IPSUM[wordIndex]).append(" ");
        }
        return loremIpsumText.toString();
    }

    @Benchmark
    public void indexNewSiteAsNewTenant() throws Exception {
        final String loremIpsumText = generateLoremIpsum();
        final Site siteToIndex = new Site(
                null, null, null,
                loremIpsumText.substring(0, 42),
                loremIpsumText,
                "https://example.com/" + UUID.randomUUID()
        );

        final ResponseEntity<Site> actual = Load10Users.CALLER.exchange(
                Load10Users.LOAD_TARGET + SiteController.ENDPOINT,
                HttpMethod.PUT,
                new HttpEntity<>(siteToIndex),
                Site.class
        );

        assertEquals(HttpStatus.CREATED, actual.getStatusCode());
        assertNotNull(actual.getHeaders().getLocation());
    }

    @Benchmark
    public void indexUpdateWithNewSites() throws Exception {
        final String loremIpsumText = generateLoremIpsum();
        final Site siteToIndex = new Site(
                null, null, null,
                loremIpsumText.substring(0, 42),
                loremIpsumText,
                "https://example.com/" + UUID.randomUUID()
        );

        final ResponseEntity<Site> actual = Load10Users.CALLER.exchange(
                Load10Users.LOAD_TARGET + SiteController.ENDPOINT
                        + "?tenantId=" + "e10011b2-7f95-49e4-a9cb-189f5f5a6654"
                        + "&tenantSecret=c041b603-e5b7-4623-8fe9-4cd08e5b4558",
                HttpMethod.PUT,
                new HttpEntity<>(siteToIndex),
                Site.class
        );

        assertEquals(HttpStatus.CREATED, actual.getStatusCode());
        assertNotNull(actual.getHeaders().getLocation());
    }

    @Benchmark
    public void updateIndexedSite() throws Exception {
        final String loremIpsumText = generateLoremIpsum();
        final Site siteToIndex = new Site(
                null, null, null,
                loremIpsumText.substring(0, 42),
                loremIpsumText,
                "https://example.com/" + UUID.randomUUID()
        );

        final ResponseEntity<Site> actual = Load10Users.CALLER.exchange(
                Load10Users.LOAD_TARGET + SiteController.ENDPOINT
                        + "/80147ae9-e5a1-4278-a647-3dc264bba0d4"
                        + "?tenantId=" + "e10011b2-7f95-49e4-a9cb-189f5f5a6654"
                        + "&tenantSecret=c041b603-e5b7-4623-8fe9-4cd08e5b4558",
                HttpMethod.PUT,
                new HttpEntity<>(siteToIndex),
                Site.class
        );

        assertEquals(HttpStatus.OK, actual.getStatusCode());
        assertNull(actual.getHeaders().getLocation());
    }
}
