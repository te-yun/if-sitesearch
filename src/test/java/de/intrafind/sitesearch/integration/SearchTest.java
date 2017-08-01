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

package de.intrafind.sitesearch.integration;

import de.intrafind.sitesearch.dto.Hits;
import de.intrafind.sitesearch.dto.Site;
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

@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
public class SearchTest {
    private final static Logger LOG = LoggerFactory.getLogger(SearchTest.class);
    @Autowired
    private TestRestTemplate caller;

    @Test
    public void simpleSearch() throws Exception {
        final ResponseEntity<Hits> actualLegacy = caller.getForEntity("/hits?sSearchTerm=Autocomplete", Hits.class);
        assertEquals(HttpStatus.OK, actualLegacy.getStatusCode());
        assertNotNull(actualLegacy.getBody());
        assertTrue(actualLegacy.getBody() instanceof Hits);

        final ResponseEntity<Hits> actual = caller.getForEntity("/hits?query=Autocomplete", Hits.class);

        assertEquals(HttpStatus.OK, actual.getStatusCode());
        assertNotNull(actual.getBody());
        assertEquals("Autocomplete", actual.getBody().getQuery());
        // TODO remove title attribute from Hits
        assertEquals(null, actual.getBody().getTitle());
        assertTrue(actual.getBody().getFacets().isEmpty());
        assertEquals(1, actual.getBody().getResults().size());
        Site found = actual.getBody().getResults().get(0);
        assertEquals("99", found.getId());
        assertEquals("1a6715d9-119f-48d1-9329-e8763273bbea", found.getTenant());
        assertEquals("Autocomplete Service - IntraFind Software AG", found.getTitle());
        assertEquals("https://www.intrafind.de/produkte/autocomplete", found.getUrl().toString());
        assertEquals("<h1>IntraFind Autocomplete - Ein kleines Instrument mit großen Auswirkungen für jeden starken Online Auftritt.</h1> <p>Klassische Autovervollständigungs-Technologien (Autocomplete) helfen dem Anwender während er seinen Suchbegriff eintippt den Suchbegriff automatisch zu vervollständigen und nach starten des Suchauftrages entsprechend Ergebnisse in Form einer Trefferliste zu erhalten. Dies geschieht jedoch meist 1:1 auf Basis der Worte, die dem Autocomplete bekannt sind (also z.B. vorhandene Produktnamen). Doch wie viele Anwender wollen viel Zeit darauf verwenden, die korrekte Schreibweise von Produktnamen oder von Markenbezeichnungen zu recherchieren?</p>", found.getContent());
    }

    /**
     * TODO should return 404 instead of 200
     */
    @Test
    public void simpleSearchNotFound() throws Exception {
        final ResponseEntity<Hits> actual = caller.getForEntity("/hits?query=not_found", Hits.class);

        assertEquals(HttpStatus.OK, actual.getStatusCode());
        assertNotNull(actual.getBody());
        assertEquals("not_found", actual.getBody().getQuery());
        assertTrue(actual.getBody().getResults().isEmpty());
    }
}


