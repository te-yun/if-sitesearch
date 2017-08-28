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
import com.intrafind.sitesearch.controller.SiteController;
import com.intrafind.sitesearch.dto.Autocomplete;
import com.intrafind.sitesearch.dto.Hits;
import com.intrafind.sitesearch.dto.Site;
import com.intrafind.sitesearch.integration.SearchTest;
import org.openjdk.jmh.annotations.Benchmark;
import org.openjdk.jmh.annotations.BenchmarkMode;
import org.openjdk.jmh.annotations.Mode;
import org.openjdk.jmh.annotations.Threads;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import java.util.*;

import static org.junit.Assert.*;

@Threads(10)
@BenchmarkMode(Mode.Throughput)
public class Load {
    private static final String[] LOREM_IPSUM = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras viverra enim vitae malesuada placerat. Nam auctor pellentesque libero, et venenatis enim molestie vel. Duis est metus, congue quis orci id, tincidunt mattis turpis. In fringilla ultricies sapien ultrices accumsan. Sed mattis tellus lacus, quis scelerisque turpis hendrerit et. In iaculis malesuada ipsum, ac rhoncus mauris auctor quis. Proin varius, ex vestibulum condimentum lacinia, ligula est finibus ligula, id consectetur nisi enim ut velit. Sed aliquet gravida justo ac condimentum. In malesuada sed elit vitae vestibulum. Mauris vitae congue lacus. Quisque vitae tincidunt orci. Donec viverra enim a lacinia pulvinar. Sed vel ullamcorper est. Vestibulum vel urna at nisl tincidunt blandit. Donec purus leo, interdum in diam in, posuere varius tellus. Quisque eleifend nulla at nulla vestibulum ullamcorper. Praesent interdum vehicula cursus. Morbi vitae nunc et urna rhoncus semper aliquam nec velit. Quisque aliquet et velit ut mollis. Sed mattis eleifend tristique. Praesent pharetra, eros eget viverra tempus, nisi turpis molestie metus, nec tristique nulla dolor a mauris. Nullam cursus finibus erat, in pretium urna fermentum ac. In hac habitasse platea dictumst. Cras id velit id nisi euismod eleifend. Duis vehicula gravida bibendum. Cras rhoncus, massa et accumsan euismod, metus arcu rutrum orci, eu porttitor lacus tellus sed quam. Morbi tincidunt est sit amet sem convallis porta in nec nisi. Sed ex enim, fringilla nec diam in, luctus pulvinar enim. Suspendisse potenti. Quisque ut pellentesque erat. In tincidunt metus id sem fringilla sagittis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin erat nunc, pharetra sit amet iaculis nec, malesuada eu dui. Nullam sagittis ut arcu vitae convallis. Mauris molestie gravida lectus, eu commodo quam bibendum aliquam. Donec laoreet sed dolor eu consectetur."
            .split("\\s");

    private final static Logger LOG = LoggerFactory.getLogger(Load.class);
    private static final String LOAD_TARGET = "https://dev.sitesearch.cloud";
    //    private static final String LOAD_TARGET = "http://localhost:8001";
    private static final TestRestTemplate CALLER = new TestRestTemplate();
    private static final Random PSEUDO_ENTROPY = new Random();

    private static final List<UUID> TENANTS = Arrays.asList(
            SearchTest.SEARCH_TENANT_ID,
            UUID.fromString("363d50f3-17cb-4756-aeca-7d3768092ae1"),
            UUID.fromString("1a6715d9-119f-48d1-9329-e8763273bbea")
    );
    private static final Map<String, Long> SEARCH_QUERIES = new HashMap<>();
    private static final List<String> QUERY_LIST_SEARCH = new ArrayList<>(SEARCH_QUERIES.keySet());
    private static final Map<String, Long> AUTOCOMPLETE_QUERIES = new HashMap<>();
    private static final List<String> QUERY_LIST_AUTOCOMPLETE = new ArrayList<>(AUTOCOMPLETE_QUERIES.keySet());

    static {
        SEARCH_QUERIES.put("knowledge", 1L);
        SEARCH_QUERIES.put("ifinder", 7L);
        SEARCH_QUERIES.put("\uD83E\uDD84", 25L);
    }

    static {
        AUTOCOMPLETE_QUERIES.put("kno", 1L);
        AUTOCOMPLETE_QUERIES.put("know", 1L);
        AUTOCOMPLETE_QUERIES.put("knowl", 1L);
        AUTOCOMPLETE_QUERIES.put("knowle", 1L);
        AUTOCOMPLETE_QUERIES.put("ifi", 6L);
        AUTOCOMPLETE_QUERIES.put("ifin", 6L);
        AUTOCOMPLETE_QUERIES.put("ifind", 6L);
        AUTOCOMPLETE_QUERIES.put("ifinde", 6L);
        AUTOCOMPLETE_QUERIES.put("ifinder", 6L);
    }

    @Benchmark
    public void staticFiles() throws Exception {
        final ResponseEntity<String> staticFile = CALLER.getForEntity(LOAD_TARGET, String.class);

        assertEquals(HttpStatus.OK, staticFile.getStatusCode());
        assertFalse(staticFile.getBody().isEmpty());
    }

    @Benchmark
    public void searchComplex() throws Exception {
        final int queryIndex = PSEUDO_ENTROPY.nextInt(SEARCH_QUERIES.size());
        final String query = QUERY_LIST_SEARCH.get(queryIndex);

        final ResponseEntity<Hits> actual = CALLER.getForEntity(
                LOAD_TARGET + SearchController.ENDPOINT
                        + "?query=" + query + "&tenantId=" + SearchTest.SEARCH_TENANT_ID,
                Hits.class
        );

        assertEquals(HttpStatus.OK, actual.getStatusCode());
        final long queryResultCount = SEARCH_QUERIES.get(query);
        assertEquals(queryResultCount, actual.getBody().getResults().size());
    }

    @Benchmark
    public void autocomplete() throws Exception {
        final int queryIndex = PSEUDO_ENTROPY.nextInt(AUTOCOMPLETE_QUERIES.size());
        final String query = QUERY_LIST_AUTOCOMPLETE.get(queryIndex);

        final ResponseEntity<Autocomplete> actual = CALLER.getForEntity(
                LOAD_TARGET + AutocompleteController.ENDPOINT
                        + "?query=" + query + "&tenantId=" + SearchTest.SEARCH_TENANT_ID,
                Autocomplete.class
        );

        assertEquals(HttpStatus.OK, actual.getStatusCode());
        final long queryResultCount = AUTOCOMPLETE_QUERIES.get(query);
        assertEquals(queryResultCount, actual.getBody().getResults().size());
    }

    private String generateLoremIpsum() {
        final StringBuilder loremIpsumText = new StringBuilder();
        for (String word : LOREM_IPSUM) {
            final int wordIndex = PSEUDO_ENTROPY.nextInt(LOREM_IPSUM.length);
            loremIpsumText.append(LOREM_IPSUM[wordIndex]).append(" ");
        }
        return loremIpsumText.toString();
    }

    @Threads(2)
    @Benchmark
    public void indexNewSiteAsNewTenant() throws Exception {
        final String loremIpsumText = generateLoremIpsum();
        final Site siteToIndex = new Site(
                null, null, null,
                loremIpsumText.substring(0, 42),
                loremIpsumText,
                "https://example.com/" + UUID.randomUUID()
        );

        final ResponseEntity<Site> actual = CALLER.exchange(
                LOAD_TARGET + SiteController.ENDPOINT,
                HttpMethod.PUT,
                new HttpEntity<>(siteToIndex),
                Site.class
        );

        assertEquals(HttpStatus.CREATED, actual.getStatusCode());
        assertNotNull(actual.getHeaders().getLocation());
    }

    @Threads(2)
    @Benchmark
    public void indexUpdateWithNewSites() throws Exception {
        final String loremIpsumText = generateLoremIpsum();
        final Site siteToIndex = new Site(
                null, null, null,
                loremIpsumText.substring(0, 42),
                loremIpsumText,
                "https://example.com/" + UUID.randomUUID()
        );

        final ResponseEntity<Site> actual = CALLER.exchange(
                LOAD_TARGET + SiteController.ENDPOINT
                        + "?tenantId=" + "e10011b2-7f95-49e4-a9cb-189f5f5a6654"
                        + "&tenantSecret=c041b603-e5b7-4623-8fe9-4cd08e5b4558",
                HttpMethod.PUT,
                new HttpEntity<>(siteToIndex),
                Site.class
        );

        assertEquals(HttpStatus.CREATED, actual.getStatusCode());
        assertNotNull(actual.getHeaders().getLocation());
    }

    @Threads(2)
    @Benchmark
    public void updateIndexedSite() throws Exception {
        final String loremIpsumText = generateLoremIpsum();
        final Site siteToIndex = new Site(
                null, null, null,
                loremIpsumText.substring(0, 42),
                loremIpsumText,
                "https://example.com/" + UUID.randomUUID()
        );

        final ResponseEntity<Site> actual = CALLER.exchange(
                LOAD_TARGET + SiteController.ENDPOINT
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
