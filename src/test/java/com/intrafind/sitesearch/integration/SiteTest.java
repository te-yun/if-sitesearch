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

import java.util.List;
import java.util.UUID;
import java.util.concurrent.TimeUnit;

import static org.junit.Assert.*;

@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
public class SiteTest {
    private final static Logger LOG = LoggerFactory.getLogger(SiteTest.class);
    @Autowired
    private TestRestTemplate caller;
    private static final UUID TEST_TENANT = UUID.fromString("1a6715d9-119f-48d1-9329-e8763273bbea");

    private static String testSiteId;

    private static Site buildSite(UUID id, UUID tenantSecret) {
        final String url = "https://sitesearch.cloud";
        Site simple = new Site(
                Site.hashSiteId(TEST_TENANT, url),
                TEST_TENANT, tenantSecret,
                "Cloud Solution", "Site Search is IntraFind's new SaaS solution.",
                url
        );
        return simple;
    }

    private static UUID testSiteTenantId;
    private static UUID testSiteTenantSecret;

    @Before
    public void init() throws Exception {
        // TODO using this approach get rid of Thread.sleep
        Site testSite = indexNewSite();
        testSiteId = testSite.getId();
        testSiteTenantId = testSite.getTenantId();
        testSiteTenantSecret = testSite.getTenantSecret();
    }

    private Site indexNewSite() throws Exception {
        UUID irrelevantSiteId = UUID.fromString("f55d093a-7911-11e7-8fc8-025041000001");
        Site simple = buildSite(irrelevantSiteId, UUID.randomUUID());

        ResponseEntity<Site> actual = caller.exchange(SiteController.ENDPOINT, HttpMethod.POST, new HttpEntity<>(simple), Site.class);

        assertEquals(HttpStatus.CREATED, actual.getStatusCode());
        assertEquals(simple, actual.getBody());
        assertNotEquals("assure irrelevancy of siteId during creation", irrelevantSiteId, actual.getBody().getId());
        assertEquals("https://sitesearch.cloud/sites/" + actual.getBody().getId(), actual.getHeaders().get(HttpHeaders.LOCATION).get(0));

        ResponseEntity<Site> newlyCreatedSite = caller.exchange(SiteController.ENDPOINT + "/" + actual.getBody().getId(), HttpMethod.GET, new HttpEntity<>(simple), Site.class);
        assertEquals(HttpStatus.OK, newlyCreatedSite.getStatusCode());
        assertEquals(actual.getBody().getId(), newlyCreatedSite.getBody().getId());

        return actual.getBody();
    }

    @Test
    public void updateSiteViaUrl() throws Exception {
        final Site newSite = indexNewSite();
        final String updatedBodyContent = "Updated via Hash(tenantId, URL)";
        newSite.setBody(updatedBodyContent);

//        Thread.sleep(13_000);
        TimeUnit.MILLISECONDS.sleep(13_000);

        // update
        final ResponseEntity<Site> updatedSite = caller.exchange(SiteController.ENDPOINT
                        + "?tenantId=" + newSite.getTenantId() + "&tenantSecret=" + newSite.getTenantSecret(),
                HttpMethod.PUT, new HttpEntity<>(newSite), Site.class);
        assertEquals(HttpStatus.OK, updatedSite.getStatusCode());
        assertEquals(newSite.getId(), updatedSite.getBody().getId());
        assertEquals(updatedBodyContent, updatedSite.getBody().getBody());

        // fetch & check updated site
        assertEquals(Site.hashSiteId(newSite.getTenantId(), newSite.getUrl()), newSite.getId());
        final ResponseEntity<Site> fetchedUpdatedSite = caller.exchange(SiteController.ENDPOINT
                        + "/" + Site.hashSiteId(newSite.getTenantId(), newSite.getUrl()),
                HttpMethod.GET, HttpEntity.EMPTY, Site.class);

        assertEquals(HttpStatus.OK, fetchedUpdatedSite.getStatusCode());
        assertEquals(newSite.getId(), fetchedUpdatedSite.getBody().getId());
        assertEquals(updatedBodyContent, fetchedUpdatedSite.getBody().getBody());

        // fetch via URL
        final ResponseEntity<Site> fetchViaUrl = caller.exchange(SiteController.ENDPOINT
                        + "/url?tenantId=" + newSite.getTenantId() + "&url=" + newSite.getUrl(),
                HttpMethod.GET, HttpEntity.EMPTY, Site.class);
        assertEquals(HttpStatus.OK, fetchViaUrl.getStatusCode());
        assertEquals(newSite.getId(), fetchViaUrl.getBody().getId());
        assertEquals(updatedBodyContent, fetchViaUrl.getBody().getBody());
        assertEquals(newSite.getUrl(), fetchViaUrl.getBody().getUrl());
    }

    @Test
    public void fetchUpdatedById() throws Exception {
        Site ying = indexNewSite();
        Site yang = indexNewSite();
//        Thread.sleep(13000);
        TimeUnit.MILLISECONDS.sleep(13_000);

        final ResponseEntity<Site> actualYing = caller.exchange(SiteController.ENDPOINT + "/"
                + ying.getId() + "?tenantId=" + ying.getTenantId() + "&tenantSecret=" + ying.getTenantSecret(), HttpMethod.PUT, new HttpEntity<>(ying), Site.class);
        assertEquals(HttpStatus.OK, actualYing.getStatusCode());
        assertEquals(ying, actualYing.getBody());
        final ResponseEntity<Site> actualYang = caller.exchange(SiteController.ENDPOINT + "/"
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
        final ResponseEntity<Site> created = caller.exchange(SiteController.ENDPOINT, HttpMethod.POST, new HttpEntity<>(updatable), Site.class);
        assertEquals(HttpStatus.CREATED, created.getStatusCode());
        assertEquals(updatable, created.getBody());
        Site createdSite = created.getBody();

//        Thread.sleep(13_000);
        TimeUnit.MILLISECONDS.sleep(13_000);

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
        createdSite.setUrl("https://example.com/updated");
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

//        Thread.sleep(13_000);
        TimeUnit.MILLISECONDS.sleep(13_000);
        validateUpdatedSites(creation);
    }

    @Test
    public void importFeedAndReadSingleSiteWithSSL() throws Exception {  // TODO actually use SSL below >> httpS instead of http-sans-S
        final ResponseEntity<Tenant> exchange = caller.exchange(SiteController.ENDPOINT + "/rss?feedUrl=http://intrafind.de/share/enterprise-search-blog.xml", HttpMethod.PUT, HttpEntity.EMPTY, Tenant.class);
        final Tenant creation = validateTenantSummary(exchange, 25);

//        Thread.sleep(13_000);
        TimeUnit.MILLISECONDS.sleep(13_000);
        LOG.info("tenantId: " + creation.getTenantId());
        validateUpdatedSites(creation);
    }

    private void validateUpdatedSites(Tenant tenant) {
        tenant.getDocuments().forEach(documentId -> {
            final ResponseEntity<Site> fetchedById = caller.exchange(SiteController.ENDPOINT + "/" + documentId, HttpMethod.GET, HttpEntity.EMPTY, Site.class);
            assertTrue(HttpStatus.OK.equals(fetchedById.getStatusCode()));
            assertTrue(tenant.getTenantId().equals(fetchedById.getBody().getTenantId()));
            assertTrue(!fetchedById.getBody().getBody().isEmpty());
            assertNotNull(fetchedById.getBody().getUrl());
            assertNull(fetchedById.getBody().getTenantSecret());
        });
    }

    @Test
    public void importFeedAndUpdate() throws Exception {
        // create index
        final ResponseEntity<Tenant> initialIndexCreation = caller.exchange(
                SiteController.ENDPOINT + "/rss?feedUrl=http://www.mvv-muenchen.de/de/aktuelles/meldungen/detail/rss.xml",
                HttpMethod.PUT, HttpEntity.EMPTY, Tenant.class);
//        Thread.sleep(13_000);
        TimeUnit.MILLISECONDS.sleep(13_000);
        final Tenant tenantCreation = validateTenantSummary(initialIndexCreation, 10);

        UUID tenantIdFromCreation = tenantCreation.getTenantId();
        UUID tenantSecretFromCreation = tenantCreation.getTenantSecret();

        LOG.info("tenantIdFromCreation: " + tenantIdFromCreation);
        LOG.info("tenantSecretFromCreation: " + tenantSecretFromCreation);

        final ResponseEntity<Tenant> updateWithoutTenant = caller.exchange(
                SiteController.ENDPOINT + "/rss?feedUrl=http://intrafind.de/share/enterprise-search-blog.xml"
                        + "&tenantSecret=" + tenantSecretFromCreation,
                HttpMethod.PUT, HttpEntity.EMPTY, Tenant.class);
        assertEquals(HttpStatus.BAD_REQUEST, updateWithoutTenant.getStatusCode());

        final ResponseEntity<Tenant> updateWithoutSecret = caller.exchange(
                SiteController.ENDPOINT + "/rss?feedUrl=http://intrafind.de/share/enterprise-search-blog.xml"
                        + "&tenantId=" + tenantIdFromCreation,
                HttpMethod.PUT, HttpEntity.EMPTY, Tenant.class);
        assertEquals(HttpStatus.BAD_REQUEST, updateWithoutSecret.getStatusCode());

        final ResponseEntity<Tenant> updateWithInvalidSecret = caller.exchange(
                SiteController.ENDPOINT + "/rss?feedUrl=http://intrafind.de/share/enterprise-search-blog.xml"
                        + "&tenantId=" + tenantIdFromCreation + "&tenantSecret=" + UUID.randomUUID(),
                HttpMethod.PUT, HttpEntity.EMPTY, Tenant.class);
        assertEquals(HttpStatus.BAD_REQUEST, updateWithInvalidSecret.getStatusCode());


        // update index
        final ResponseEntity<Tenant> anotherFeedReplacement = caller.exchange(
                SiteController.ENDPOINT + "/rss?feedUrl=http://intrafind.de/share/enterprise-search-blog.xml"
                        + "&tenantId=" + tenantIdFromCreation + "&tenantSecret=" + tenantSecretFromCreation,
                HttpMethod.PUT, HttpEntity.EMPTY, Tenant.class);
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
        sites.forEach(siteId -> {
            LOG.info("siteId: " + siteId);
            final ResponseEntity<ResponseEntity> deletion = caller.exchange(SiteController.ENDPOINT + "/" + siteId, HttpMethod.DELETE, HttpEntity.EMPTY, ResponseEntity.class);
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
}