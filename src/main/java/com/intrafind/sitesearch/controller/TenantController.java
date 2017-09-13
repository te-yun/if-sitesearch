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
import com.intrafind.sitesearch.dto.TenantOverview;
import com.intrafind.sitesearch.dto.TenantSiteAssignment;
import jetbrains.exodus.entitystore.*;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

import java.net.URI;
import java.util.UUID;

@RestController
public class TenantController {
    public static final String ENDPOINT = "/assignments";
    private static final Logger LOG = LoggerFactory.getLogger(TenantController.class);
    //    public static final PersistentEntityStore ACID_PERSISTENCE_ENTITY = PersistentEntityStores.newInstance("data/entity");
//    public static final PersistentEntityStore ACID_PERSISTENCE_ENTITY = PersistentEntityStores.newInstance(SearchController.ACID_PERSISTENCE_ENVIRONMENT);
    public static final PersistentEntityStore ACID_PERSISTENCE_ENTITY = PersistentEntityStores.newInstance(SearchController.ACID_PERSISTENCE_ENVIRONMENT, "administration");
    RestTemplate caller = new RestTemplate();

    // TODO add /tenant endpoint infix
    @RequestMapping(path = ENDPOINT + "/{tenantId}/sites/{siteId}", method = RequestMethod.POST)
    ResponseEntity<TenantSiteAssignment> assignSite(
            @PathVariable(value = "tenantId", required = false) UUID tenantId,
            @PathVariable(value = "siteId") UUID siteId,
            @RequestParam(value = "siteSecret") UUID siteSecret,
            @RequestBody TenantSiteAssignment tenantSiteAssignment
    ) {
        if (tenantId == null) {
            tenantId = UUID.randomUUID(); // TODO temporary, take the actual value once a way is implemented to verify that a tenant belongs to a user
        }
        // TODO introduce tenantSecret check
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

        LOG.warn(entityTxn.find("AuthProvider", "id", tenantSiteAssignment.getAuthProviderId()).size() + " AUTHS");
        Entity authProvider = entityTxn.find("AuthProvider", "id", tenantSiteAssignment.getAuthProviderId()).getFirst();
        if (authProvider == null) {
            authProvider = entityTxn.newEntity("AuthProvider");
            authProvider.setProperty("id", tenantSiteAssignment.getAuthProviderId());
        }
        tenant.addLink("authProvider", authProvider);   // TODO avoid duplicates // TODO add tests
        authProvider.addLink("tenant", tenant);

        LOG.warn(entityTxn.find("Site", "id", siteId.toString()).size() + " SITES");
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
                .created(URI.create("https://sitesearch.cloud/authentication-providers/").resolve(tenantSiteAssignment.getAuthProviderId()))
                .build();
    }

    @RequestMapping(path = "/authentication-providers/{providerId}", method = RequestMethod.GET)
    ResponseEntity<TenantOverview> obtainTenantOverview(
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

        final StoreTransaction findTxn = ACID_PERSISTENCE_ENTITY.beginReadonlyTransaction();
        final EntityIterable authProviders = findTxn.find("AuthProvider", "id", providerId);
        LOG.info(authProviders.size() + "SIZE");
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
