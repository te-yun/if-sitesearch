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

import com.intrafind.sitesearch.controller.SitesController;
import com.intrafind.sitesearch.dto.CrawlerJobResult;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.http.HttpStatus;
import org.springframework.http.RequestEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.UUID;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotNull;

@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
public class CrawlerTest {
    private static final UUID CRAWL_SITE_ID = UUID.fromString("a2e8d60b-0696-47ea-bc48-982598ee35bd");
    private static final UUID CRAWL_SITE_SECRET = UUID.fromString("04a0afc6-d89a-45c9-8ba8-41d393d8d2f8");
    private static final Logger LOG = LoggerFactory.getLogger(CrawlerTest.class);

    @Autowired
    private TestRestTemplate caller;

    @Test
    public void crawlExampleViaHttp() {
        final ResponseEntity<CrawlerJobResult> request = caller
                .postForEntity(SitesController.ENDPOINT + "/" + CRAWL_SITE_ID + "/crawl?siteSecret=" + CRAWL_SITE_SECRET
                                + "&url=http://example.com&token=" + UUID.randomUUID()
                                + "&email=feedback@sitesearch.cloud",
                        RequestEntity.EMPTY, CrawlerJobResult.class);

        assertEquals(HttpStatus.OK, request.getStatusCode());
        assertNotNull(request.getBody());
        assertEquals(1, request.getBody().getPageCount());
        assertEquals(2, request.getBody().getUrls().size());
    }

    @Test
    public void crawlHttp() {
        final ResponseEntity<CrawlerJobResult> request = caller
                .postForEntity(SitesController.ENDPOINT + "/" + CRAWL_SITE_ID + "/crawl?siteSecret=" + CRAWL_SITE_SECRET
                                + "&url=" + "http://example.de&token=" + UUID.randomUUID()
                                + "&email=feedback@sitesearch.cloud",
                        RequestEntity.EMPTY, CrawlerJobResult.class);

        assertEquals(HttpStatus.OK, request.getStatusCode());
        assertNotNull(request.getBody());
        assertEquals(15, request.getBody().getPageCount());
        assertEquals(16, request.getBody().getUrls().size());
    }

    @Test
    public void crawlSiteSearchViaHttps() {
        final ResponseEntity<CrawlerJobResult> request = caller
                .postForEntity(SitesController.ENDPOINT + "/" + CRAWL_SITE_ID + "/crawl?siteSecret=" + CRAWL_SITE_SECRET
                                + "&url=" + "https://sitesearch.cloud&token=" + UUID.randomUUID()
                                + "&email=feedback@sitesearch.cloud",
                        RequestEntity.EMPTY, CrawlerJobResult.class);

        assertEquals(HttpStatus.OK, request.getStatusCode());
        assertNotNull(request.getBody());
        assertEquals(12, request.getBody().getPageCount());
        assertEquals(13, request.getBody().getUrls().size());
    }

    @Test
    public void crawlHttps() {
        final ResponseEntity<CrawlerJobResult> request = caller
                .postForEntity(SitesController.ENDPOINT + "/" + CRAWL_SITE_ID + "/crawl?siteSecret=" + CRAWL_SITE_SECRET
                                + "&url=" + "https://api.sitesearch.cloud&token=" + UUID.randomUUID()
                                + "&email=feedback@sitesearch.cloud",
                        RequestEntity.EMPTY, CrawlerJobResult.class);

        assertEquals(HttpStatus.OK, request.getStatusCode());
        assertNotNull(request.getBody());
        assertEquals(7, request.getBody().getPageCount());
        assertEquals(8, request.getBody().getUrls().size());
    }
}


