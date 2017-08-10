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

import com.intrafind.sitesearch.controller.SiteController;
import com.intrafind.sitesearch.dto.Site;
import com.intrafind.sitesearch.dto.Tenant;
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
import java.util.List;
import java.util.UUID;

import static org.junit.Assert.*;

@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
public class SiteTest {
    private final static Logger LOG = LoggerFactory.getLogger(SiteTest.class);
    @Autowired
    private TestRestTemplate caller;
    private static final UUID TEST_TENANT = UUID.fromString("1a6715d9-119f-48d1-9329-e8763273bbea");

    private static Site buildSite(UUID id, UUID tenantSecret) {
        Site simple = new Site(
                id,
                TEST_TENANT, tenantSecret,
                "Cloud Solution", "Sitesearch is IntraFind's new SaaS solution.",
                URI.create("https://sitesearch.cloud")
        );
//        simple.setUrl(URI.create("https://www.intrafind.de/cloud"));
//        simple.setTenantId(TEST_TENANT);
//        simple.setTenantSecret(UUID.randomUUID());
//        simple.setBody("Sitesearch is IntraFind's new SaaS solution.");
//        simple.setTitle("Cloud Solution");
//        simple.setId(UUID.randomUUID()); // is ignored when persisted
        return simple;
    }

    @Test
    public void simpleIndexWithContentInside() throws Exception {
        UUID siteId = UUID.fromString("dd29d1ee-7912-11e7-96e0-025041000001");
        Site simple = buildSite(siteId, UUID.randomUUID());
        final ResponseEntity<Site> actual = caller.exchange(SiteController.ENDPOINT + "/" + siteId, HttpMethod.PUT, new HttpEntity<>(simple), Site.class);

        assertEquals(HttpStatus.OK, actual.getStatusCode());
        assertEquals(simple, actual.getBody());
    }

    @Test
    public void assureIrrelevancyOfSiteIdInBody() throws Exception {
        UUID relevantSiteId = UUID.fromString("f55d093a-7911-11e7-8fc8-025041000001");
        UUID irrelevantSiteId = UUID.randomUUID();

        Site simple = new Site(
                irrelevantSiteId,
                TEST_TENANT, UUID.randomUUID(),
                "SaaS Solution", "Sitesearch is IntraFind's new SaaS solution.",
                URI.create("https://sitesearch.cloud/tos.html")
        );
//        Site simple = new Site();
//        simple.setUrl(URI.create("https://www.intrafind.de/saas"));
//        simple.setTenantId(TEST_TENANT);
//        simple.setBody("Sitesearch is IntraFind's new SaaS solution.");
//        simple.setTitle("SaaS Solution");
//        simple.setId(irrelevantSiteId);

        ResponseEntity<Site> actual = caller.exchange(SiteController.ENDPOINT + "/" + relevantSiteId, HttpMethod.PUT, new HttpEntity<>(simple), Site.class);

        assertEquals(HttpStatus.OK, actual.getStatusCode());
        assertNotEquals(simple, actual.getBody());
        assertNotEquals(irrelevantSiteId, actual.getBody().getId());
        assertEquals(relevantSiteId, actual.getBody().getId());
    }

    @Test
    public void fetchById() throws Exception {
        final UUID yingId = UUID.fromString("265fff4c-7912-11e7-8e0d-025041000001");
        Site ying = buildSite(yingId, UUID.randomUUID());
        final UUID yangId = UUID.fromString("25585162-7912-11e7-a8c6-025041000001");
        Site yang = buildSite(yangId, UUID.randomUUID());

        final ResponseEntity<Site> actualYing = caller.exchange(SiteController.ENDPOINT + "/" + yingId, HttpMethod.PUT, new HttpEntity<>(ying), Site.class);
        assertEquals(HttpStatus.OK, actualYing.getStatusCode());
        assertEquals(ying, actualYing.getBody());
        final ResponseEntity<Site> actualYang = caller.exchange(SiteController.ENDPOINT + "/" + yangId, HttpMethod.PUT, new HttpEntity<>(yang), Site.class);
        assertEquals(HttpStatus.OK, actualYang.getStatusCode());
        assertEquals(yang, actualYang.getBody());

        final ResponseEntity<Site> actualYingFetched = caller.getForEntity(SiteController.ENDPOINT + "/" + yingId, Site.class);
        assertEquals(HttpStatus.OK, actualYingFetched.getStatusCode());
        assertEquals(ying, actualYingFetched.getBody());

        final ResponseEntity<Site> actualYangFetched = caller.getForEntity(SiteController.ENDPOINT + "/" + yangId, Site.class);
        assertEquals(HttpStatus.OK, actualYangFetched.getStatusCode());
        assertEquals(yang, actualYangFetched.getBody());

        assertNotEquals(actualYingFetched, actualYangFetched);
    }

    @Test
    public void updatedSite() throws Exception {
        UUID siteId = UUID.fromString("2c269452-7914-11e7-a634-025041000001");
        Site updatable = buildSite(siteId, UUID.randomUUID());
        final ResponseEntity<Site> create = caller.exchange(SiteController.ENDPOINT + "/" + siteId, HttpMethod.PUT, new HttpEntity<>(updatable), Site.class);
        assertEquals(HttpStatus.OK, create.getStatusCode());
        assertEquals(updatable, create.getBody());

        Site updatedSite = buildSite(siteId, UUID.randomUUID());
        updatedSite.setBody("updated");
        final ResponseEntity<Site> updated = caller.exchange(SiteController.ENDPOINT + "/" + siteId, HttpMethod.PUT, new HttpEntity<>(updatedSite), Site.class);
        assertEquals(HttpStatus.OK, updated.getStatusCode());
        assertNotEquals(updatable, updated.getBody());
        assertEquals(updatedSite, updated.getBody());

        updatedSite.setBody("no tenant secret provided");
//        final ResponseEntity<Site> updated = caller.exchange(SiteController.ENDPOINT + "/" + siteId, HttpMethod.PUT, new HttpEntity<>(updatedSite), Site.class);
//        assertEquals(HttpStatus.OK, updated.getStatusCode());
//        assertNotEquals(updatable, updated.getBody());
//        assertEquals(updatedSite, updated.getBody());

        // TODO do not update site when tenantSecret is not correct
        // TODO do not update site when tenantSecret is not provided
        // TODO do not update site when tenantSecret is provided in payload
    }

    @Test
    public void importFeed() throws Exception {
        final ResponseEntity<Tenant> exchange = caller.exchange(SiteController.ENDPOINT + "/rss?feedUrl=http://www.mvv-muenchen.de/de/aktuelles/fahrplanaenderungen/detail/rss.xml", HttpMethod.PUT, HttpEntity.EMPTY, Tenant.class);
        final Tenant creation = validateTenantSummary(exchange, 10);

        validateUpdatedSites(creation);
    }

    @Test
    public void importFeedAndReadSingleSite() throws Exception {
        final ResponseEntity<Tenant> exchange = caller.exchange(SiteController.ENDPOINT + "/rss?feedUrl=http://intrafind.de/share/enterprise-search-blog.xml", HttpMethod.PUT, HttpEntity.EMPTY, Tenant.class);
        final Tenant creation = validateTenantSummary(exchange, 25);

        LOG.info("tenantId: " + creation.getTenantId());
        validateUpdatedSites(creation);
    }

    private void validateUpdatedSites(Tenant tenant) {
        tenant.getDocuments().forEach(documentId -> {
            final ResponseEntity<Site> fetchedById = caller.exchange(SiteController.ENDPOINT + "/" + documentId, HttpMethod.GET, HttpEntity.EMPTY, Site.class);
            assertTrue(HttpStatus.OK.equals(fetchedById.getStatusCode()));
            assertTrue(tenant.getTenantId().equals(fetchedById.getBody().getTenantId()));
            assertTrue(!fetchedById.getBody().getBody().isEmpty());
            assertTrue(fetchedById.getBody().getUrl().isAbsolute());
            assertNull(fetchedById.getBody().getTenantSecret());
        });
    }

    @Test
    public void importFeedAndUpdate() throws Exception {
        // create index
        final ResponseEntity<Tenant> initialIndexCreation = caller.exchange(
                SiteController.ENDPOINT + "/rss?feedUrl=http://www.mvv-muenchen.de/de/aktuelles/meldungen/detail/rss.xml",
                HttpMethod.PUT, HttpEntity.EMPTY, Tenant.class);
        final Tenant tenantCreation = validateTenantSummary(initialIndexCreation, 10);

        UUID tenantIdFromCreation = tenantCreation.getTenantId();
        UUID tenantSecretFromCreation = tenantCreation.getTenantSecret();

        LOG.info("tenantIdFromCreation: " + tenantIdFromCreation);
        LOG.info("tenantSecretFromCreation: " + tenantSecretFromCreation);

        // update index
        final ResponseEntity<Tenant> anotherFeedReplacement = caller.exchange(
                SiteController.ENDPOINT + "/rss?feedUrl=http://intrafind.de/share/enterprise-search-blog.xml"
                        + "&tenantId=" + tenantIdFromCreation + "&tenantSecret=" + tenantSecretFromCreation,
                HttpMethod.PUT, HttpEntity.EMPTY, Tenant.class);
        Thread.sleep(55000);
        final Tenant tenantUpdate = validateTenantSummary(anotherFeedReplacement, 25);

        validateUpdatedSites(tenantUpdate);

        tryDeletionOfSites(tenantIdFromCreation);
    }

    private void tryDeletionOfSites(UUID tenantIdFromCreation) {
        final ResponseEntity<List> fetchAll = caller.exchange(SiteController.ENDPOINT + "?tenantId=" + tenantIdFromCreation, HttpMethod.GET, HttpEntity.EMPTY, List.class);
        assertTrue(HttpStatus.OK.equals(fetchAll.getStatusCode()));
        @SuppressWarnings("unchecked")
        List<String> sites = fetchAll.getBody();
        assertTrue(1 < sites.size());
        int siteCountBeforeDeletion = sites.size();
        sites.forEach(uuid -> {
            LOG.info("uuid: " + uuid);
            final ResponseEntity<ResponseEntity> deletion = caller.exchange(SiteController.ENDPOINT + "/" + uuid, HttpMethod.DELETE, HttpEntity.EMPTY, ResponseEntity.class);
            assertEquals(HttpStatus.NO_CONTENT, deletion.getStatusCode());
            assertNull(deletion.getBody());
        });
        LOG.info("siteCountBeforeDeletion: " + siteCountBeforeDeletion);
    }

    private Tenant validateTenantSummary(ResponseEntity<Tenant> anotherFeedReplacement, int indexEntriesCount) {
        assertEquals(HttpStatus.OK, anotherFeedReplacement.getStatusCode());
        final Tenant tenantUpdate = anotherFeedReplacement.getBody();
        assertTrue(tenantUpdate.getTenantId() != null);
        assertTrue(tenantUpdate.getTenantSecret() != null);
        assertEquals(indexEntriesCount, tenantUpdate.getSuccessCount());
        assertEquals(indexEntriesCount, tenantUpdate.getDocuments().size());
        assertTrue(tenantUpdate.getFailed().isEmpty());
        return tenantUpdate;
    }

    // TODO single page update

    // TODO https for feeds does not work yet, do not use URL class
    // TODO check if a tenant has the total number of sites that Tenant reports
    // TODO provoke 400 responses
}