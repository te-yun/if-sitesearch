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

import com.fasterxml.jackson.databind.ObjectMapper;
import com.intrafind.sitesearch.dto.FoundPage;
import com.intrafind.sitesearch.dto.Hits;
import com.intrafind.sitesearch.integration.SearchTest;
import okhttp3.Headers;
import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.Response;
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
import java.util.HashMap;
import java.util.Map;

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

    // TODO make sure subsequent successful executions are possible

    @Test
    public void assureSiteSearchServiceBasicAuthProtectionForJsonPost() throws Exception {
        final ResponseEntity<String> secureEndpointJson = caller.postForEntity(URI.create(INVALID_CREDENTIALS + SEARCH_SERVICE_DOMAIN + "json/index?method=index"), HttpEntity.EMPTY, String.class);
        assertEquals(HttpStatus.UNAUTHORIZED, secureEndpointJson.getStatusCode());
        assertNull(secureEndpointJson.getBody());
    }

    private static final String productFrontpageMarker = "<title>IntraFind Site Search - Site Search</title>";

    @Test
    public void redirectFromHttpNakedDomain() throws Exception {
        final ResponseEntity<String> response = caller.exchange(
                "http://sitesearch.cloud",
                HttpMethod.GET,
                HttpEntity.EMPTY,
                String.class
        );
        assertEquals(HttpStatus.OK, response.getStatusCode());
    }

    @Test
    public void redirectFromUnencryptedWWW() throws Exception {
        final ResponseEntity<String> response = caller.exchange(
                "http://www.sitesearch.cloud",
                HttpMethod.GET,
                HttpEntity.EMPTY,
                String.class
        );
        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertTrue(response.getBody().contains(productFrontpageMarker));
    }

    @Test
    public void redirectFromWWW() throws Exception {
        final ResponseEntity<String> response = caller.exchange(
                "https://www.sitesearch.cloud",
                HttpMethod.GET,
                HttpEntity.EMPTY,
                String.class
        );
        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertTrue(response.getBody().contains(productFrontpageMarker));
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
        assertTrue(response.getBody().contains(productFrontpageMarker));
    }

    @Test
    public void redirectFromHttpApiDomain() throws Exception {
        final ResponseEntity<String> response = caller.exchange(
                "http://api.sitesearch.cloud",
                HttpMethod.GET,
                HttpEntity.EMPTY,
                String.class
        );
        assertEquals(HttpStatus.OK, response.getStatusCode());
    }

    public static final ObjectMapper MAPPER = new ObjectMapper();
    public static final OkHttpClient HTTP_CLIENT = new OkHttpClient.Builder()
            .followRedirects(false)
            .followSslRedirects(false)
            .build();
    private static final Map<String, String> CORS_TRIGGERING_REQUEST_HEADER = new HashMap<String, String>() {
        {
            put("origin", "https://example.com");
        }
    };

    private void assureCorsHeaders(Headers headers, int byteCount) {
        assertEquals(byteCount, headers.byteCount());
        assertEquals("https://example.com", headers.get("access-control-allow-origin"));
        assertEquals("true", headers.get("access-control-allow-credentials"));
    }

    @Test
    public void apiFrontpageContent() throws Exception {
        Request request = new Request.Builder()
                .url("https://api.sitesearch.cloud")
                .headers(Headers.of(CORS_TRIGGERING_REQUEST_HEADER))
                .build();
        final Response response = HTTP_CLIENT.newCall(request).execute();
        assertEquals(HttpStatus.OK.value(), response.code());
        assertNotNull(response.body());
        assertTrue(response.body().string().contains("<title>Simple Site Search</title>"));

        assertEquals(HttpStatus.OK.value(), response.code());
        assertNull(response.headers().get("x-frame-options"));
        assertNull(response.headers().get("X-Frame-Options"));
//        assureCorsHeaders(response.headers(), 472);
        assureCorsHeaders(response.headers(), 456);
    }

    @Test
    public void search() throws Exception {
        Request request = new Request.Builder()
                .url("https://api.sitesearch.cloud/search?query=Knowledge&siteId=" + SearchTest.SEARCH_SITE_ID)
                .headers(Headers.of(CORS_TRIGGERING_REQUEST_HEADER))
                .build();
        final Response response = HTTP_CLIENT.newCall(request).execute();

        assertEquals(HttpStatus.OK.value(), response.code());
        assertNotNull(response.body());
        Hits result = MAPPER.readValue(response.body().bytes(), Hits.class);
        assertEquals("Knowledge", result.getQuery());
        assertEquals(1, result.getResults().size());
        FoundPage found = result.getResults().get(0);
        assertEquals("Wie die Semantische Suche vom <span class=\"if-teaser-highlight\">Knowledge</span> Graph profitiert", found.getTitle());
        assertEquals("http:&#x2F;&#x2F;intrafind.de&#x2F;blog&#x2F;wie-die-semantische-suche-vom-<span class=\"if-teaser-highlight\">knowledge</span>-graph-profitiert", found.getUrl());
        assertEquals("http://intrafind.de/blog/wie-die-semantische-suche-vom-knowledge-graph-profitiert", found.getUrlRaw());
        assertTrue(found.getBody().startsWith("&lt;p&gt;Der <span class=\"if-teaser-highlight\">Knowledge</span> Graph ist vielen Nutzern bereits durch Google oder Facebook bekannt. Aber auch"));

        assureCorsHeaders(response.headers(), 406);
    }

    @Test
    public void autocomplete() throws Exception {
        Request request = new Request.Builder()
                .url("https://api.sitesearch.cloud/autocomplete?query=Knowledge&siteId=" + SearchTest.SEARCH_SITE_ID)
                .headers(Headers.of(CORS_TRIGGERING_REQUEST_HEADER))
                .build();
        final Response response = HTTP_CLIENT.newCall(request).execute();

        assertEquals(HttpStatus.OK.value(), response.code()); // actually 200, should be returned but due to a bug this is not the case yet
//        Hits result = MAPPER.readValue(response.body().bytes(), Autocomplete.class);
//        assertNotNull(actual.getBody());
//        assertEquals(1, actual.getBody().getResults().size());
//        assertEquals("knowledge graph", actual.getBody().getResults().get(0));
        assureCorsHeaders(response.headers(), 406);
    }
}