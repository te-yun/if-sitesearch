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

package com.intrafind.sitesearch.controller;

import com.google.common.collect.Lists;
import com.google.common.collect.Maps;
import com.intrafind.sitesearch.dto.GitHubUser;
import com.intrafind.sitesearch.dto.TenantOverview;
import com.intrafind.sitesearch.dto.TenantSiteAssignment;
import com.intrafind.sitesearch.service.SiteService;
import jetbrains.exodus.bindings.StringBinding;
import jetbrains.exodus.entitystore.*;
import jetbrains.exodus.env.Store;
import jetbrains.exodus.env.StoreConfig;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.HttpServerErrorException;
import org.springframework.web.client.RestTemplate;

import java.net.URI;
import java.util.UUID;

@RestController
public class AssignmentController {
    public static final String ENDPOINT = "/assignments";
    private static final Logger LOG = LoggerFactory.getLogger(AssignmentController.class);
    public static final PersistentEntityStore ACID_PERSISTENCE_ENTITY = PersistentEntityStores.newInstance(SearchController.ACID_PERSISTENCE_ENVIRONMENT, "administration");
    RestTemplate caller = new RestTemplate();

    @RequestMapping(path = ENDPOINT + "/tenants/{tenantId}/sites/{siteId}", method = RequestMethod.PUT)
    ResponseEntity<TenantSiteAssignment> assignSite(
            @PathVariable(value = "tenantId") UUID tenantId, // TODO temporary, take the passed value... once a way is implemented to verify that a tenant belongs to a user
            @PathVariable(value = "siteId") UUID siteId,
            @RequestParam(value = "siteSecret") UUID siteSecret,
            @RequestBody TenantSiteAssignment tenantSiteAssignment
    ) {
        final UUID obtainedSiteSecret = obtainSiteSecret(siteId);
        if (!obtainedSiteSecret.equals(siteSecret)) {
            return ResponseEntity.status(HttpStatus.FORBIDDEN).build();
        }

        final ResponseEntity<GitHubUser> githubUser = caller.getForEntity(URI.create("https://api.github.com/user?access_token=" + tenantSiteAssignment.getAuthProviderToken()), GitHubUser.class);
        // TODO disable during integration tests only, on CI & locally
        if (System.getenv("DEV_SKIP_FLAG") == null) { // skip accessToken checks when running locally
            if (!HttpStatus.OK.equals(githubUser.getStatusCode())
                    || !tenantSiteAssignment.getAuthProviderId().equals(githubUser.getBody().getId())) {
                LOG.warn("Invalid oAuth2 accessToken {} for given authProvider {} & authProviderId {}", tenantSiteAssignment.getAuthProviderToken(), tenantSiteAssignment.getAuthProvider(), tenantSiteAssignment.getAuthProviderId());
                return ResponseEntity.status(HttpStatus.FORBIDDEN).build();
            }
        }

        // TODO prevent duplicate Assignments 204, or better NO_MODIFICATION
        final StoreTransaction entityTxn = ACID_PERSISTENCE_ENTITY.beginTransaction();
        Entity tenant = entityTxn.find("Tenant", "id", tenantId.toString()).getFirst();
        if (tenant == null) {
            tenant = entityTxn.newEntity("Tenant");
            tenant.setProperty("id", tenantId.toString());
        }
        // TODO create tenant when it does not exist
        tenant.setProperty("company", tenantSiteAssignment.getCompany());
        tenant.setProperty("contactEmail", tenantSiteAssignment.getContactEmail());

        if (entityTxn.find("AuthProvider", "id", tenantSiteAssignment.getAuthProviderId()).size() > 1) {
            throw new HttpServerErrorException(HttpStatus.INTERNAL_SERVER_ERROR, "Duplicate AuthProvider ID found: " + tenantSiteAssignment.getAuthProviderId());
        }
        Entity authProvider = entityTxn.find("AuthProvider", "id", tenantSiteAssignment.getAuthProviderId()).getFirst();
        if (authProvider == null) {
            authProvider = entityTxn.newEntity("AuthProvider");
            authProvider.setProperty("id", tenantSiteAssignment.getAuthProviderId());
        }
        tenant.addLink("authProvider", authProvider);   // TODO avoid duplicates // TODO add tests
        authProvider.addLink("tenant", tenant);

        if (entityTxn.find("Site", "id", siteId.toString()).size() > 1) {
            throw new HttpServerErrorException(HttpStatus.INTERNAL_SERVER_ERROR, "Duplicate Site ID found: " + siteId.toString());
        }
        Entity site = entityTxn.find("Site", "id", siteId.toString()).getFirst();
        if (site == null) {
            site = entityTxn.newEntity("Site");
            site.setProperty("id", siteId.toString());
            site.setProperty("secret", siteSecret.toString());
        }
        tenant.addLink("site", site);   // TODO avoid duplicates // TODO add tests
        site.addLink("tenant", tenant);

        entityTxn.commit();

        return ResponseEntity
                .created(URI.create("https://sitesearch.cloud/assignments/authentication-providers/").resolve(tenantSiteAssignment.getAuthProviderId()))
                .build();
    }

    private UUID obtainSiteSecret(UUID siteId) {
        return UUID.fromString(SearchController.ACID_PERSISTENCE_ENVIRONMENT.computeInReadonlyTransaction(txn -> {
            Store store = SearchController.ACID_PERSISTENCE_ENVIRONMENT.openStore(SiteService.TENANT_SECRET_FIELD, StoreConfig.WITHOUT_DUPLICATES, txn);
            return StringBinding.entryToString(store.get(txn, StringBinding.stringToEntry(siteId.toString())));
        }));
    }

    @RequestMapping(path = "/authentication-providers/{provider}/{providerId}", method = RequestMethod.GET)
    ResponseEntity<TenantOverview> obtainTenantOverview(
            @PathVariable(value = "provider") String provider,
            @PathVariable(value = "providerId") String providerId,
            @RequestParam(value = "accessToken") String accessToken
    ) {
        // TODO introduce check against oAuth endpoint
        TenantOverview tenantOverview = new TenantOverview(
                Maps.newHashMap(),
                Maps.newHashMap(),
                Lists.newArrayList()
        );
        LOG.info("providerId: " + providerId);
        LOG.info("accessToken: " + accessToken);

        // TODO make this a helper method that is reused above
        final ResponseEntity<GitHubUser> githubUser = caller.getForEntity(URI.create("https://api.github.com/user?access_token=" + accessToken), GitHubUser.class);
        if (System.getenv("DEV_SKIP_FLAG") == null) { // skip accessToken checks when running locally
            if (!HttpStatus.OK.equals(githubUser.getStatusCode())
                    || !providerId.equals(githubUser.getBody().getId())) {
                LOG.warn("Invalid oAuth2 accessToken {} for given authProvider {} & authProviderId {}", accessToken, provider, providerId);
                return ResponseEntity.status(HttpStatus.FORBIDDEN).build();
            }
        }

        final StoreTransaction findTxn = ACID_PERSISTENCE_ENTITY.beginReadonlyTransaction();
        final EntityIterable authProviders = findTxn.find("AuthProvider", "id", providerId);
        authProviders.forEach(authProvider -> {
            tenantOverview.getAuthProviders().add(authProvider.getProperty("id").toString());
            authProvider.getLinks("tenant").forEach(tenant -> {
                TenantOverview.TenantInfo tenantInfo = new TenantOverview.TenantInfo(tenant.getProperty("company").toString(), tenant.getProperty("contactEmail").toString());
                tenantOverview.getTenants().put(UUID.fromString(tenant.getProperty("id").toString()), tenantInfo);
                tenant.getLinks("site").forEach(site -> {
                    tenantOverview.getSites().put(UUID.fromString(site.getProperty("id").toString()), UUID.fromString(site.getProperty("secret").toString()));
                });
            });
        });
        findTxn.commit();

        return ResponseEntity.ok(tenantOverview);
    }

}
