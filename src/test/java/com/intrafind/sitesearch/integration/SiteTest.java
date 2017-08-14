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
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.http.*;
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
        return simple;
    }

    @Before
    public void init() throws Exception {
        Site testSite = indexNewSite();
    }

    //    @Test
//    public void simpleIndexWithContentInside() throws Exception {
//        UUID irrelevantId = UUID.fromString("dd29d1ee-7912-11e7-96e0-025041000001");
//        Site simple = buildSite(irrelevantId, UUID.randomUUID());
//        final ResponseEntity<Site> actual = caller.exchange(SiteController.ENDPOINT, HttpMethod.PUT, new HttpEntity<>(simple), Site.class);
//
//        assertEquals(HttpStatus.CREATED, actual.getStatusCode());
//        assertEquals(simple, actual.getBody());
//        assertNotEquals(irrelevantId, actual.getBody().getId());
//        assertEquals("https://sitesearch.cloud/" + actual.getBody().getId(), actual.getHeaders().get(HttpHeaders.LOCATION).get(0));
//    }

    //    @Test
//    public void indexNewSite() throws Exception {
    private Site indexNewSite() throws Exception {
        UUID irrelevantSiteId = UUID.fromString("f55d093a-7911-11e7-8fc8-025041000001");
        Site simple = buildSite(irrelevantSiteId, UUID.randomUUID());

        ResponseEntity<Site> actual = caller.exchange(SiteController.ENDPOINT, HttpMethod.PUT, new HttpEntity<>(simple), Site.class);

        assertEquals(HttpStatus.CREATED, actual.getStatusCode());
        assertEquals(simple, actual.getBody());
        assertNotEquals("assure irrelevancy of siteId during creation", irrelevantSiteId, actual.getBody().getId());
        assertEquals("https://sitesearch.cloud/sites/" + actual.getBody().getId(), actual.getHeaders().get(HttpHeaders.LOCATION).get(0));

        return actual.getBody();
    }

    @Test
    public void fetchUpdatedById() throws Exception {
//        final UUID yingId = UUID.fromString("17f2d990-9c69-4ac2-9dd4-07355789391a");
//        Site ying = buildSite(yingId, UUID.randomUUID());
        Site ying = indexNewSite();
//        final UUID yangId = UUID.fromString("b52788f2-ae1d-4936-a71e-e92ec03c13fb");
        Site yang = indexNewSite();
        Thread.sleep(13000);

        final ResponseEntity<Site> actualYing = caller.exchange(SiteController.ENDPOINT + "/"
//                + ying.getId() +"?tenantId=bc594127-3c59-41ea-9421-7d678aecce8a&tenantSecret=70ae2286-75c0-400e-ba08-4523ad5bb60b", HttpMethod.PUT, new HttpEntity<>(ying), Site.class);
                + ying.getId() + "?tenantId=" + ying.getTenantId() + "&tenantSecret=" + ying.getTenantSecret(), HttpMethod.PUT, new HttpEntity<>(ying), Site.class);
        assertEquals(HttpStatus.OK, actualYing.getStatusCode());
        assertEquals(ying, actualYing.getBody());
        final ResponseEntity<Site> actualYang = caller.exchange(SiteController.ENDPOINT + "/"
//                + ying.getId()+"?tenantId=33e705ca-bb9c-4c10-90a0-f7d16a6f241f&tenantSecret=6b47a8af-4cf7-47de-b462-8627f291d433", HttpMethod.PUT, new HttpEntity<>(yang), Site.class);
                + yang.getId() + "?tenantId=" + yang.getTenantId() + "&tenantSecret=" + yang.getTenantSecret(), HttpMethod.PUT, new HttpEntity<>(yang), Site.class);
        assertEquals(HttpStatus.OK, actualYang.getStatusCode());
        assertEquals(yang, actualYang.getBody());

        final ResponseEntity<Site> actualYingFetched = caller.getForEntity(SiteController.ENDPOINT + "/" + ying.getId(), Site.class);
        assertEquals(HttpStatus.OK, actualYingFetched.getStatusCode());
        assertEquals(ying, actualYingFetched.getBody());

        final ResponseEntity<Site> actualYangFetched = caller.getForEntity(SiteController.ENDPOINT + "/" + yang.getId(), Site.class);
        assertEquals(HttpStatus.OK, actualYangFetched.getStatusCode());
        assertEquals(yang, actualYangFetched.getBody());

        Site fetchedYing = actualYingFetched.getBody();
        Site fetchedYang = actualYangFetched.getBody();
        assertEquals(fetchedYing, fetchedYang);
        assertNotEquals(fetchedYing.getId(), fetchedYang.getId());
        assertNotEquals(fetchedYing.getTenantId(), fetchedYang.getTenantId());
        assertNull(fetchedYing.getTenantSecret());
        assertNull(fetchedYang.getTenantSecret());
    }

    @Test
    public void updatedSite() throws Exception {
        UUID siteId = UUID.fromString("2c269452-7914-11e7-a634-025041000001");
        Site updatable = buildSite(siteId, UUID.randomUUID());
//        final ResponseEntity<Site> created = caller.exchange(SiteController.ENDPOINT + "/" + siteId, HttpMethod.PUT, new HttpEntity<>(updatable), Site.class);
        final ResponseEntity<Site> created = caller.exchange(SiteController.ENDPOINT, HttpMethod.PUT, new HttpEntity<>(updatable), Site.class);
        assertEquals(HttpStatus.CREATED, created.getStatusCode());
        assertEquals(updatable, created.getBody());
        Site createdSite = created.getBody();

        Thread.sleep(8000);

        final ResponseEntity<Site> updateWithTenantIdOnly = caller.exchange(SiteController.ENDPOINT + "/" + siteId
                + "?tenantId=" + createdSite.getTenantId(), HttpMethod.PUT, new HttpEntity<>(createdSite), Site.class);
        assertEquals("only valid tenantId is provided", HttpStatus.BAD_REQUEST, updateWithTenantIdOnly.getStatusCode());
        assertEquals(29791, updateWithTenantIdOnly.getBody().hashCode());

        final ResponseEntity<Site> updateWithTenantSecretOnly = caller.exchange(SiteController.ENDPOINT + "/" + siteId
                + "?tenantSecret=" + createdSite.getTenantId(), HttpMethod.PUT, new HttpEntity<>(createdSite), Site.class);
        assertEquals("only valid tenantSecret is provided", HttpStatus.BAD_REQUEST, updateWithTenantSecretOnly.getStatusCode());
        assertEquals(29791, updateWithTenantSecretOnly.getBody().hashCode());

        final ResponseEntity<Site> updateWithWrongTenantSecret = caller.exchange(SiteController.ENDPOINT + "/" + siteId
                        + "?tenantId=" + createdSite.getTenantId() + "&tenantSecret=" + UUID.randomUUID(),
                HttpMethod.PUT, new HttpEntity<>(createdSite), Site.class);
        assertEquals("tenantSecret is invalid", HttpStatus.NOT_FOUND, updateWithWrongTenantSecret.getStatusCode());
        assertNull(updateWithWrongTenantSecret.getBody());

        createdSite.setTitle("updated title");
        createdSite.setBody("updated body");
        createdSite.setUrl(URI.create("https://example.com/updated"));
        final ResponseEntity<Site> updated = caller.exchange(SiteController.ENDPOINT + "/" + siteId
                        + "?tenantId=" + createdSite.getTenantId() + "&tenantSecret=" + createdSite.getTenantSecret(),
                HttpMethod.PUT, new HttpEntity<>(createdSite), Site.class);
        assertEquals(HttpStatus.OK, updated.getStatusCode());
        assertEquals(createdSite, updated.getBody());
        assertEquals("updated body", updated.getBody().getBody());
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
//        final ResponseEntity<Tenant> anotherFeedReplacement = caller.exchange(
//                SiteController.ENDPOINT + "/rss?feedUrl=http://intrafind.de/share/enterprise-search-blog.xml"
//                        + "&tenantId=" + tenantIdFromCreation + "&tenantSecret=" + tenantSecretFromCreation,
//                HttpMethod.PUT, HttpEntity.EMPTY, Tenant.class);
//        final Tenant tenantUpdate = validateTenantSummary(anotherFeedReplacement, 25);
//
//        validateUpdatedSites(tenantUpdate);
//
//        tryDeletionOfSites(tenantIdFromCreation);
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