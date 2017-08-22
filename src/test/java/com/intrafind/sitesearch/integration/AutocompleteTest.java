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

package com.intrafind.sitesearch.integration;

import com.intrafind.sitesearch.controller.AutocompleteController;
import com.intrafind.sitesearch.dto.FoundSite;
import com.intrafind.sitesearch.dto.Hits;
import org.junit.Ignore;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.test.context.junit4.SpringRunner;

import static org.junit.Assert.*;

@Ignore
@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
public class AutocompleteTest {
    private static final Logger LOG = LoggerFactory.getLogger(AutocompleteTest.class);
    @Autowired
    private TestRestTemplate caller;

    @Test
    public void simpleAutocomplete() throws Exception {
        final ResponseEntity<Hits> actual = caller.getForEntity(AutocompleteController.ENDPOINT + "?query=Knowledge&tenantId=" + SearchTest.SEARCH_TENANT_ID, Hits.class);

        assertEquals(HttpStatus.OK, actual.getStatusCode());
        assertNotNull(actual.getBody());
        assertEquals("Knowledge", actual.getBody().getQuery());
        assertTrue(actual.getBody().getFacets().isEmpty());
        assertEquals(1, actual.getBody().getResults().size());
        FoundSite found = actual.getBody().getResults().get(0);
        assertEquals("Wie die Semantische Suche vom <span class='if-teaser-highlight'>Knowledge</span> Graph profitiert", found.getTitle());
        assertEquals("Wie die Semantische Suche vom Knowledge Graph profitiert", found.getTitleRaw());
        assertEquals("http:&#x2F;&#x2F;intrafind.de&#x2F;blog&#x2F;wie-die-semantische-suche-vom-<span class='if-teaser-highlight'>knowledge</span>-graph-profitiert", found.getUrl());
        assertEquals("http://intrafind.de/blog/wie-die-semantische-suche-vom-knowledge-graph-profitiert", found.getUrlRaw().toString());
        assertTrue(found.getBody().startsWith("&lt;p&gt;Der <span class='if-teaser-highlight'>Knowledge</span> Graph ist vielen Nutzern bereits durch Google oder Facebook bekannt. Aber auch"));
        assertTrue(found.getBodyRaw().startsWith("<p>Der Knowledge Graph ist vielen Nutzern bereits durch Google oder Facebook bekannt."));
    }

    @Test
    public void autocompleteNotFound() throws Exception {
        final ResponseEntity<Hits> actual = caller.getForEntity(AutocompleteController.ENDPOINT + "?query=not_found&tenantId=" + SearchTest.SEARCH_TENANT_ID, Hits.class);

        assertEquals(HttpStatus.NOT_FOUND, actual.getStatusCode());
        assertNull(actual.getBody());
    }

    @Test
    public void autocompleteWithoutTenant() throws Exception {
        final ResponseEntity<Hits> actual = caller.getForEntity(AutocompleteController.ENDPOINT + "?query=not_found", Hits.class);

        assertEquals(HttpStatus.BAD_REQUEST, actual.getStatusCode());
        assertNotNull(actual.getBody());
    }
}


