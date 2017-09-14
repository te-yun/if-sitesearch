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

import com.intrafind.sitesearch.controller.AssignmentController;
import com.intrafind.sitesearch.controller.SiteController;
import com.intrafind.sitesearch.dto.Site;
import com.intrafind.sitesearch.dto.TenantOverview;
import com.intrafind.sitesearch.dto.TenantSiteAssignment;
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

import java.util.UUID;

import static org.junit.Assert.*;

@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
public class AssignmentIntegration {
    private static final Logger LOG = LoggerFactory.getLogger(AssignmentIntegration.class);
    @Autowired
    private TestRestTemplate caller;

    private Site createSiteViaPageCreation() throws Exception {
        Site simple = SiteTest.buildSite(UUID.randomUUID());
        ResponseEntity<Site> actual = caller.exchange(SiteController.ENDPOINT, HttpMethod.POST, new HttpEntity<>(simple), Site.class);
        assertEquals(HttpStatus.CREATED, actual.getStatusCode());
        ResponseEntity<Site> newlyCreatedPageWithSiteId = caller.exchange(SiteController.ENDPOINT + "/" + actual.getBody().getId(), HttpMethod.GET, HttpEntity.EMPTY, Site.class);
        assertEquals(HttpStatus.OK, newlyCreatedPageWithSiteId.getStatusCode());
        assertEquals(actual.getBody().getId(), newlyCreatedPageWithSiteId.getBody().getId());

        return actual.getBody();
    }

    @Test
    public void assignSiteToTenant() throws Exception {
        final Site siteViaPageCreation = createSiteViaPageCreation();

        final UUID tenantId = UUID.randomUUID();
        final UUID siteId = siteViaPageCreation.getTenantId();
        final UUID siteSecret = siteViaPageCreation.getTenantSecret();
        final String authProvider = "testProvider-" + UUID.randomUUID();

        LOG.info("tenantId: " + tenantId);
        LOG.info("siteId: " + siteId);
        LOG.info("siteSecret: " + siteSecret);

        final ResponseEntity createTenantAssignmentInitially = assignTenantAndSiteToAuthProvider(tenantId, siteId, siteSecret, authProvider);
        // execute the above call again which should not change the resource state
        final ResponseEntity createdTenantAssignmentSubsequently = assignTenantAndSiteToAuthProvider(tenantId, siteId, siteSecret, authProvider);
        assertEquals(HttpStatus.CREATED, createdTenantAssignmentSubsequently.getStatusCode());
        assertNull(createdTenantAssignmentSubsequently.getBody());

        final ResponseEntity<TenantOverview> fetchedTenantOverview = obtainAuthProvidersAssignments(authProvider);
        assureSingleSimpleAssignment(fetchedTenantOverview, 1, 1);

        // add additional auth provider
        final String additionalAuthProvider = "testProvider-" + UUID.randomUUID();
        final ResponseEntity addAuthProvider = assignTenantAndSiteToAuthProvider(tenantId, siteId, siteSecret, additionalAuthProvider);
        assertEquals(HttpStatus.CREATED, addAuthProvider.getStatusCode());
        final ResponseEntity<TenantOverview> addedAuthProvider = obtainAuthProvidersAssignments(authProvider);
        assureSingleSimpleAssignment(addedAuthProvider, 1, 1);

        // add additional site
        final Site additionalSiteViaPageCreation = createSiteViaPageCreation();
        final ResponseEntity additionalSiteAddition = assignTenantAndSiteToAuthProvider(tenantId, additionalSiteViaPageCreation.getTenantId(), additionalSiteViaPageCreation.getTenantSecret(), authProvider);
        assertEquals(HttpStatus.CREATED, additionalSiteAddition.getStatusCode());
        final ResponseEntity<TenantOverview> additionalSiteAdded = obtainAuthProvidersAssignments(authProvider);
        assureSingleSimpleAssignment(additionalSiteAdded, 2, 1);

        // add additional tenant
        final ResponseEntity additionalTenantAddition = assignTenantAndSiteToAuthProvider(UUID.randomUUID(), additionalSiteViaPageCreation.getTenantId(), additionalSiteViaPageCreation.getTenantSecret(), authProvider);
        assertEquals(HttpStatus.CREATED, additionalTenantAddition.getStatusCode());
        final ResponseEntity<TenantOverview> additionalTenantAdded = obtainAuthProvidersAssignments(authProvider);
        assureSingleSimpleAssignment(additionalTenantAdded, 2, 2);

        // add additional tenant based on new site
        final Site anotherAdditionalSiteViaPageCreation = createSiteViaPageCreation();
        final ResponseEntity additionalTenantAdditionWithAdditionalSite = assignTenantAndSiteToAuthProvider(UUID.randomUUID(), anotherAdditionalSiteViaPageCreation.getTenantId(), anotherAdditionalSiteViaPageCreation.getTenantSecret(), authProvider);
        assertEquals(HttpStatus.CREATED, additionalTenantAdditionWithAdditionalSite.getStatusCode());
        final ResponseEntity<TenantOverview> additionalTenantAddedWithAdditionalSite = obtainAuthProvidersAssignments(authProvider);
        assureSingleSimpleAssignment(additionalTenantAddedWithAdditionalSite, 3, 3);

        // siteSecret does not match siteId's secret
        UUID invalidSiteSecret = UUID.randomUUID();
        final ResponseEntity invalidSiteSecretSubmission = assignTenantAndSiteToAuthProvider(tenantId, anotherAdditionalSiteViaPageCreation.getTenantId(), invalidSiteSecret, authProvider);
        assertEquals(HttpStatus.FORBIDDEN, invalidSiteSecretSubmission.getStatusCode());
        assertNull(invalidSiteSecretSubmission.getBody());
    }

    private ResponseEntity<TenantOverview> obtainAuthProvidersAssignments(String authProvider) {
        return caller.getForEntity(
                "/authentication-providers/" + authProvider + "?accessToken=951bcaff5792706965a6c37a0fab5b29d50bcc81",
                TenantOverview.class
        );
    }

    private void assureSingleSimpleAssignment(ResponseEntity<TenantOverview> fetchedTenantOverview, int siteSize, int tenantSize) {
        assertEquals(HttpStatus.OK, fetchedTenantOverview.getStatusCode());
        assertEquals(siteSize, fetchedTenantOverview.getBody().getSites().size());
        fetchedTenantOverview.getBody().getSites().forEach((id, secret) -> {
            assertNotNull(id);
            assertNotNull(secret);
        });
        assertEquals(tenantSize, fetchedTenantOverview.getBody().getTenants().size());
        fetchedTenantOverview.getBody().getTenants().forEach((uuid, tenantInfo) -> {
            assertNotNull(uuid);
            assertFalse(tenantInfo.getCompany().isEmpty());
            assertFalse(tenantInfo.getCompany().contains("@"));
            assertFalse(tenantInfo.getContactEmail().isEmpty());
            assertTrue(tenantInfo.getContactEmail().contains("@"));
        });
        assertEquals(1, fetchedTenantOverview.getBody().getAuthProviders().size());
    }

    private ResponseEntity assignTenantAndSiteToAuthProvider(UUID tenantId, UUID siteId, UUID siteSecret, String authProvider) {
        return caller.exchange(
                AssignmentController.ENDPOINT + "/tenants/" + tenantId + "/sites/" + siteId + "?siteSecret=" + siteSecret,
                HttpMethod.PUT,
                new HttpEntity<>(new TenantSiteAssignment("IntraFind Software AG", "alexander.orlov@intrafind.de", authProvider, "testProvider", System.getenv("GITHUB_PUBLIC_ACCESS_TOKEN"))),
                TenantSiteAssignment.class
        );
    }
}
