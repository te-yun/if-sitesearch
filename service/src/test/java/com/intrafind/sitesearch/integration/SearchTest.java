/*
 * Copyright 2018 IntraFind Software AG. All rights reserved.
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

package com.intrafind.sitesearch.integration;

import com.intrafind.sitesearch.controller.SearchController;
import com.intrafind.sitesearch.dto.FoundPage;
import com.intrafind.sitesearch.dto.Hits;
import com.intrafind.sitesearch.jmh.LoadTest;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.reactive.server.EntityExchangeResult;
import org.springframework.test.web.reactive.server.WebTestClient;

import java.util.Collections;
import java.util.UUID;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertFalse;
import static org.junit.Assert.assertNotNull;
import static org.junit.Assert.assertTrue;

@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
public class SearchTest {
    public static final UUID SEARCH_SITE_ID = UUID.fromString("18e1cb09-b3ec-40e0-8279-dd005771f172");
    private static final Logger LOG = LoggerFactory.getLogger(SearchTest.class);
    @Autowired
    private TestRestTemplate caller;
    @Value("${local.server.port}")
    private int port;
    private WebTestClient webTestClient = WebTestClient.bindToServer().build();

    @Test
    public void simpleSearchDeprecated() {
        final ResponseEntity<Hits> searchResults = caller.getForEntity(SearchController.ENDPOINT + "?query=Knowledge&siteId=" + SEARCH_SITE_ID, Hits.class);

        assertEquals(HttpStatus.OK, searchResults.getStatusCode());
        assertNotNull(searchResults.getBody());
        assertEquals("Knowledge", searchResults.getBody().getQuery());
        assertEquals(1, searchResults.getBody().getResults().size());
        final FoundPage found = searchResults.getBody().getResults().get(0);
        assertEquals("Wie die Semantische Suche vom <span class=\"if-teaser-highlight\">Knowledge</span> Graph profitiert", found.getTitle());
        assertEquals("http:&#x2F;&#x2F;intrafind.de&#x2F;blog&#x2F;wie-die-semantische-suche-vom-<span class=\"if-teaser-highlight\">knowledge</span>-graph-profitiert", found.getUrl());
        assertEquals("http://intrafind.de/blog/wie-die-semantische-suche-vom-knowledge-graph-profitiert", found.getUrlRaw());
        assertTrue(found.getBody().startsWith("&lt;p&gt;Der <span class=\"if-teaser-highlight\">Knowledge</span> Graph ist vielen Nutzern bereits durch Google oder Facebook bekannt. Aber auch"));
    }

    @Test
    public void simpleSearch() throws Exception {
//        final ResponseEntity<Hits> searchResults = caller.getForEntity("/sites/" + SEARCH_SITE_ID + "/search?query=Knowledge", Hits.class);
        final var actual = webTestClient.get().uri("http://localhost:" + port + "/sites/" + SEARCH_SITE_ID + "/search?query=Knowledge");
        final EntityExchangeResult<byte[]> entityExchangeResult = actual.exchange().expectBody().returnResult();

//        assertEquals(HttpStatus.OK, searchResults.getStatusCode());
        assertEquals(HttpStatus.OK, entityExchangeResult.getStatus());
        assertNotNull(entityExchangeResult.getResponseBody());
//        assertNotNull(searchResults.getBody());
        final Hits hits = LoadTest.MAPPER.readValue(entityExchangeResult.getResponseBody(), Hits.class);
        assertEquals("Knowledge", hits.getQuery());
//        assertEquals("Knowledge", searchResults.getBody().getQuery());
//        assertEquals(1, searchResults.getBody().getResults().size());
        assertEquals(1, hits.getResults().size());
//        final FoundPage found = searchResults.getBody().getResults().get(0);
        final FoundPage found = hits.getResults().get(0);
        assertEquals("Wie die Semantische Suche vom <span class=\"if-teaser-highlight\">Knowledge</span> Graph profitiert", found.getTitle());
        assertEquals("http:&#x2F;&#x2F;intrafind.de&#x2F;blog&#x2F;wie-die-semantische-suche-vom-<span class=\"if-teaser-highlight\">knowledge</span>-graph-profitiert", found.getUrl());
        assertEquals("http://intrafind.de/blog/wie-die-semantische-suche-vom-knowledge-graph-profitiert", found.getUrlRaw());
        assertTrue(found.getBody().startsWith("&lt;p&gt;Der <span class=\"if-teaser-highlight\">Knowledge</span> Graph ist vielen Nutzern bereits durch Google oder Facebook bekannt. Aber auch"));
        assertEquals(Collections.emptyList(), found.getSisLabels());
        assertEquals("", found.getThumbnail());
    }

    @Test
    public void simpleSearchNotFoundDeprecated() {
        final ResponseEntity<Hits> actual = caller.getForEntity(SearchController.ENDPOINT + "?query=not_found&siteId=" + SEARCH_SITE_ID, Hits.class);

        assertEquals(HttpStatus.OK, actual.getStatusCode());
        assertNotNull(actual.getBody());
        assertTrue(actual.getBody().getResults().isEmpty());
        assertFalse(actual.getBody().getQuery().isEmpty());
    }

    @Test
    public void simpleSearchNotFound() throws Exception {
//        final ResponseEntity<Hits> actual = caller.getForEntity("/sites/" + SEARCH_SITE_ID + "/search?query=not_found", Hits.class);
        final var actual = webTestClient.get().uri("http://localhost:" + port + "/sites/" + SEARCH_SITE_ID + "/search?query=not_found");
        final EntityExchangeResult<byte[]> entityExchangeResult = actual.exchange().expectBody().returnResult();

//        assertEquals(HttpStatus.OK, actual.getStatusCode());
        assertEquals(HttpStatus.OK, entityExchangeResult.getStatus());
//        assertNotNull(actual.getBody());
        assertNotNull(entityExchangeResult.getResponseBody());
//        assertTrue(actual.getBody().getResults().isEmpty());
        final Hits hits = LoadTest.MAPPER.readValue(entityExchangeResult.getResponseBody(), Hits.class);
        assertTrue(hits.getResults().isEmpty());
//        assertFalse(actual.getBody().getQuery().isEmpty());
        assertFalse(hits.getQuery().isEmpty());
    }

    @Test
    public void searchWithoutSiteIdDeprecated() {
        final ResponseEntity<Hits> actual = caller.getForEntity(SearchController.ENDPOINT + "?query=not_found", Hits.class);

        assertEquals(HttpStatus.BAD_REQUEST, actual.getStatusCode());
//        assertNotNull(actual.getBody()); // TODO reenable once legacy hack for searchbar is removed
    }

    @Test
    public void searchWithoutSiteId() {
        final ResponseEntity<Hits> actual = caller.getForEntity("/sites/" + "/search?query=not_found", Hits.class);
        assertEquals(HttpStatus.BAD_REQUEST, actual.getStatusCode());

        final ResponseEntity<Hits> response = caller.getForEntity("/sites" + "?query=not_found", Hits.class);
        assertEquals(HttpStatus.METHOD_NOT_ALLOWED, response.getStatusCode());
//        assertNotNull(actual.getBody()); // TODO reenable once legacy hack for searchbar is removed
    }

    @Test
    public void searchWithInvalidSiteId() {
        final ResponseEntity<Hits> actual = caller.getForEntity("/sites/invalid-siteId" + "/search?query=not_found", Hits.class);
        assertEquals(HttpStatus.BAD_REQUEST, actual.getStatusCode());
    }
}


