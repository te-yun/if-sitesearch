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
import de.intrafind.sitesearch.dto.Hits;
import de.intrafind.sitesearch.dto.Site;
import de.intrafind.sitesearch.dto.TenantCreation;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.test.context.junit4.SpringRunner;

import java.net.URI;
import java.util.UUID;

import static de.intrafind.sitesearch.controller.SiteController.ENDPOINT;
import static org.junit.Assert.*;

@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
public class SiteTest {
    private final static Logger LOG = LoggerFactory.getLogger(SiteTest.class);
    @Autowired
    private TestRestTemplate caller;

    private static Site buildSite(String id) {
        Site simple = new Site();
        simple.setUrl(URI.create("https://www.intrafind.de/cloud"));
        simple.setTenant("1a6715d9-119f-48d1-9329-e8763273bbea");
        simple.setBody("Sitesearch is IntraFind's new SaaS solution.");
        simple.setTitle("Cloud Solution");
        simple.setId(id); // is ignored when persisted
        return simple;
    }

    @Test
    public void simpleIndexWithContentInside() throws Exception {
        UUID siteId = UUID.fromString("dd29d1ee-7912-11e7-96e0-025041000001");
        Site simple = buildSite(siteId.toString());
        final ResponseEntity<Site> actual = caller.postForEntity(ENDPOINT + "/" + siteId.toString(), simple, Site.class);

        assertEquals(HttpStatus.OK, actual.getStatusCode());
        assertEquals(simple, actual.getBody());
    }

    @Test
    public void assureIrrelevancyOfSiteIdInBody() throws Exception {
        String relevantSiteId = "f55d093a-7911-11e7-8fc8-025041000001";
        String irrelevantSiteId = "any-value";

        Site simple = new Site();
        simple.setUrl(URI.create("https://www.intrafind.de/saas"));
        simple.setTenant("1a6715d9-119f-48d1-9329-e8763273bbea");
        simple.setBody("Sitesearch is IntraFind's new SaaS solution.");
        simple.setTitle("SaaS Solution");
        simple.setId(irrelevantSiteId);

        ResponseEntity<Site> actual = caller.postForEntity(ENDPOINT + "/" + relevantSiteId, simple, Site.class);

        assertEquals(HttpStatus.OK, actual.getStatusCode());
        assertNotEquals(simple, actual.getBody());
        assertNotEquals(irrelevantSiteId, actual.getBody().getId());
        assertEquals(relevantSiteId, actual.getBody().getId());
    }

    @Test
    public void fetchById() throws Exception {
        final String yingId = "265fff4c-7912-11e7-8e0d-025041000001";
        Site ying = buildSite(yingId);
        final String yangId = "25585162-7912-11e7-a8c6-025041000001";
        Site yang = buildSite(yangId);

        final ResponseEntity<Site> actualYing = caller.postForEntity(ENDPOINT + "/" + yingId, ying, Site.class);
        assertEquals(HttpStatus.OK, actualYing.getStatusCode());
        assertEquals(ying, actualYing.getBody());
        final ResponseEntity<Site> actualYang = caller.postForEntity(ENDPOINT + "/" + yangId, yang, Site.class);
        assertEquals(HttpStatus.OK, actualYang.getStatusCode());
        assertEquals(yang, actualYang.getBody());

        final ResponseEntity<Site> actualYingFetched = caller.getForEntity(ENDPOINT + "/" + yingId, Site.class);
        assertEquals(HttpStatus.OK, actualYingFetched.getStatusCode());
        assertEquals(ying, actualYingFetched.getBody());

        final ResponseEntity<Site> actualYangFetched = caller.getForEntity(ENDPOINT + "/" + yangId, Site.class);
        assertEquals(HttpStatus.OK, actualYangFetched.getStatusCode());
        assertEquals(yang, actualYangFetched.getBody());

        assertNotEquals(actualYingFetched, actualYangFetched);
    }

    @Test
    public void updatedSite() throws Exception {
        String siteId = "2c269452-7914-11e7-a634-025041000001";
        Site updatable = buildSite(siteId);
        final ResponseEntity<Site> create = caller.postForEntity(ENDPOINT + "/" + siteId, updatable, Site.class);
        assertEquals(HttpStatus.OK, create.getStatusCode());
        assertEquals(updatable, create.getBody());

        Site updatedSite = buildSite(siteId);
        updatedSite.setBody("updated");
        final ResponseEntity<Site> updated = caller.postForEntity(ENDPOINT + "/" + siteId, updatedSite, Site.class);
        assertEquals(HttpStatus.OK, updated.getStatusCode());
        assertNotEquals(updatable, updated.getBody());
        assertEquals(updatedSite, updated.getBody());
    }

    @Test
    public void importFeed() throws Exception {
        final ResponseEntity<TenantCreation> exchange = caller.exchange(ENDPOINT + "/rss?feedUrl=http://intrafind.de/share/enterprise-search-blog.xml", HttpMethod.PUT, null, TenantCreation.class);
        assertEquals(HttpStatus.OK, exchange.getStatusCode());
        final TenantCreation tenantInfo = exchange.getBody();
        assertEquals(36, tenantInfo.getTenantId().length());
        assertEquals(36, tenantInfo.getTenantSecret().length());
        assertEquals(25, tenantInfo.getSuccessfullyIndexed().intValue());
        assertTrue(tenantInfo.getFailed().isEmpty());
    }

    @Test
    public void importFeedAndReadSingleSite() throws Exception {
        final ResponseEntity<TenantCreation> exchange = caller.exchange(ENDPOINT + "/rss?feedUrl=http://intrafind.de/share/enterprise-search-blog.xml", HttpMethod.PUT, null, TenantCreation.class);
        assertEquals(HttpStatus.OK, exchange.getStatusCode());
        final TenantCreation tenantInfo = exchange.getBody();
        assertEquals(36, tenantInfo.getTenantId().length());
        assertEquals(36, tenantInfo.getTenantSecret().length());
        assertEquals(25, tenantInfo.getSuccessfullyIndexed().intValue());
        assertTrue(tenantInfo.getFailed().isEmpty());

        Thread.sleep(2000);
        LOG.info("tenantId: " + tenantInfo.getTenantId());
        final ResponseEntity<Hits> hitFromTenant = caller.exchange(SearchController.ENDPOINT + "?query=Knowledge&tenantId=" + tenantInfo.getTenantId(), HttpMethod.GET, null, Hits.class);
        assertEquals(HttpStatus.OK, hitFromTenant.getStatusCode());
        assertEquals(1, hitFromTenant.getBody().getResults().size());
        assertEquals(tenantInfo.getTenantId(), hitFromTenant.getBody().getResults().get(0).getTenant());
        assertTrue(hitFromTenant.getBody().getResults().get(0).getBody().contains("Knowledge"));
        assertNull(hitFromTenant.getBody().getResults().get(0).getTenantSecret());
        assertTrue(hitFromTenant.getBody().getResults().get(0).getUrl().isAbsolute());
    }

//    @Test
//    public void dojo() throws Exception {
//        new Random().longs(10).forEach(i -> {
//            LOG.info("i>>> = " + i);
//            String siteId = UUID.randomUUID().toString();
//            Site ingestable = buildSite(String.valueOf(i));
//            final ResponseEntity<Site> create = caller.postForEntity(ENDPOINT + "/" + String.valueOf(i), ingestable, Site.class);
//            // TODO go from OK to NOT_FOUND to CREATED
////            assertEquals(HttpStatus.CREATED, create.getStatusCode());
//            assertEquals(ingestable, create.getBody());
//        });
//
//    }

    // TODO provoke 400 responses
}