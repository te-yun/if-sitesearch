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

import de.intrafind.sitesearch.controller.SearchController;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.test.context.junit4.SpringRunner;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertTrue;

@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
public class StaticContentTest {
    @Autowired
    private TestRestTemplate caller;

    @Test
    public void indexPage() throws Exception {
        final ResponseEntity<String> staticContent = caller.getForEntity("/index.html", String.class);

        assertEquals(HttpStatus.OK, staticContent.getStatusCode());
        assertTrue(staticContent.getBody().contains("API Specification"));
    }

    @Test
    public void searchbarPage() throws Exception {
        final ResponseEntity<String> staticContent = caller.getForEntity("/searchbar/searchbar.html", String.class);

        assertEquals(HttpStatus.OK, staticContent.getStatusCode());
        assertTrue(staticContent.getBody().contains("js/app.js"));
    }

    /**
     * Reduces probability of a broken searchbar due to lack of proper configuration.
     */
    @Test
    public void searchbarConfiguration() throws Exception {
        final ResponseEntity<String> staticContent = caller.getForEntity("/searchbar/data/config.json", String.class);

        assertEquals(HttpStatus.OK, staticContent.getStatusCode());
        if (System.getenv("PWD") != null) { // assume, it runs on Windows and is not a CI server
            assertTrue(staticContent.getBody().contains("\"baseUrl\": \"http://sitesearch.cloud\","));
        }
        assertTrue(staticContent.getBody().contains("\"endpointSearch\": \"" + SearchController.ENDPOINT + "\","));
    }

    @Test
    public void searchbarAppJs() throws Exception {
        final ResponseEntity<String> staticContent = caller.getForEntity("/searchbar/js/app.js", String.class);

        assertEquals(HttpStatus.OK, staticContent.getStatusCode());
        assertTrue(staticContent.getBody().contains("if-app-searchbar"));
    }
}


