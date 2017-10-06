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

package com.intrafind.sitesearch;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.test.context.junit4.SpringRunner;

import java.net.URI;

import static org.junit.Assert.*;

@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
public class SmokeTest {
    private static final Logger LOG = LoggerFactory.getLogger(SmokeTest.class);
    private static final String SEARCH_SERVICE_DOMAIN = "@main.sitesearch.cloud/";
    private static final String INVALID_CREDENTIALS = "https://" + System.getenv("SECURITY_USER_PASSWORD") + "invalid:" + System.getenv("SECURITY_USER_PASSWORD");

    @Autowired
    private TestRestTemplate caller;

//    @Autowired
//    private WebApplicationContext webApplicationContext;

    // TODO add CORS checks
    // TODO make sure subsequent successful executions are possible
    // TODO make sure CI turns red when one of the tests is broken
    // TODO CI notification

    @Test
    public void assureSiteSearchServiceBasicAuthProtectionForJsonPost() throws Exception {
        final ResponseEntity<String> secureEndpointJson = caller.postForEntity(URI.create(INVALID_CREDENTIALS + SEARCH_SERVICE_DOMAIN + "json/index?method=index"), HttpEntity.EMPTY, String.class);
        assertEquals(HttpStatus.UNAUTHORIZED, secureEndpointJson.getStatusCode());
        assertNull(secureEndpointJson.getBody());
    }

    @Test
    public void redirectFromHttpNakedDomain() throws Exception {
        final ResponseEntity<String> response = caller.exchange(
                "http://sitesearch.cloud",
                HttpMethod.GET,
                HttpEntity.EMPTY,
                String.class
        );
        assertEquals(HttpStatus.MOVED_PERMANENTLY, response.getStatusCode());
        assertTrue(response.getBody().contains("301 Moved Permanently"));
    }

    @Test
    public void redirectFromHttpApiDomain() throws Exception {
        final ResponseEntity<String> response = caller.exchange(
                "http://api.sitesearch.cloud",
                HttpMethod.GET,
                HttpEntity.EMPTY,
                String.class
        );
        assertEquals(HttpStatus.MOVED_PERMANENTLY, response.getStatusCode());
        assertTrue(response.getBody().contains("301 Moved Permanently"));
    }

    @Test
    public void productFrontpageContent() throws Exception {
        final ResponseEntity<String> response = caller.exchange(
                "https://sitesearch.cloud",
                HttpMethod.GET,
                HttpEntity.EMPTY,
                String.class
        );
        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertTrue(response.getBody().contains("<title>Simple Site Search</title>"));

        assureCorsHeaders(response);
    }

    private void assureCorsHeaders(ResponseEntity<String> response) {
        response.getHeaders().forEach((headerName, headerValues) -> {
            LOG.warn("headerName: " + headerName);
            headerValues.forEach(headerValue -> {
                LOG.warn("headerValue: " + headerValue);
            });
        });
    }

    @Test
    public void apiFrontpageContent() throws Exception {
        final ResponseEntity<String> response = caller.exchange(
                "https://api.sitesearch.cloud",
                HttpMethod.GET,
                HttpEntity.EMPTY,
                String.class
        );
        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertTrue(response.getBody().contains("<title>Simple Site Search</title>"));

        assureCorsHeaders(response);
    }
}