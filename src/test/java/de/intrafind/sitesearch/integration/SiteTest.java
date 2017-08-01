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

import java.net.URI;

import static de.intrafind.sitesearch.controller.SiteController.ENDPOINT;
import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotNull;

@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
public class SiteTest {
    private final static Logger LOG = LoggerFactory.getLogger(SiteTest.class);
    @Autowired
    private TestRestTemplate caller;

    @Test
    public void simpleIndex() throws Exception {
        Site simpleCloud = new Site();
        simpleCloud.setUrl(URI.create("https://www.intrafind.de/cloud"));
        simpleCloud.setTenant("1a6715d9-119f-48d1-9329-e8763273bbea");
        simpleCloud.setContent("Sitesearch is IntraFind's new SaaS solution.");
        simpleCloud.setTitle("Cloud Solution");
//        {
//        	"tenant" : "1a6715d9-119f-48d1-9329-e8763273bbea",
//        	"url" : "https://www.intrafind.de/cloud",
//        	"title": "Cloud Solution",
//        	"content": "Sitesearch is IntraFind's new SaaS solution."
//        }
        Site simpleSaaS = new Site();
//        {
//        	"tenant" : "1a6715d9-119f-48d1-9329-e8763273bbea",
//        	"url" : "https://www.intrafind.de/saas",
//        	"title": "SaaS Solution",
//        	"content": "Sitesearch is IntraFind's new SaaS solution."
//        }

        final ResponseEntity<Site> actual = caller.postForEntity(ENDPOINT + "/123", simpleCloud, Site.class);

        assertEquals(HttpStatus.OK, actual.getStatusCode());
        assertNotNull(actual.getBody());
//        assertEquals("not_found", actual.getBody().getContent());
    }

    // TODO provoke 400 responses
}