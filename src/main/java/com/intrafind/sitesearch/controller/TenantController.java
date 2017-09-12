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

import com.intrafind.sitesearch.dto.TenantSiteAssignment;
import jetbrains.exodus.entitystore.*;
import org.jetbrains.annotations.NotNull;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

import java.net.URI;
import java.util.UUID;

@RestController
@RequestMapping(TenantController.ENDPOINT)
public class TenantController {
    public static final String ENDPOINT = "/tenants";
    private static final Logger LOG = LoggerFactory.getLogger(TenantController.class);
    public static final PersistentEntityStore ACID_PERSISTENCE_ENTITY = PersistentEntityStores.newInstance("data/entity");
    RestTemplate caller = new RestTemplate();

    @RequestMapping(path = "{tenantId}/{siteId}/assign", method = RequestMethod.POST)
    ResponseEntity<TenantSiteAssignment> assignSite(
            @PathVariable(value = "tenantId") UUID tenantId,
            @PathVariable(value = "siteId") UUID siteId,
            @RequestParam(value = "siteSecret") UUID siteSecret,
            @RequestBody TenantSiteAssignment tenantSiteAssignment
    ) {
        final StoreTransaction entityTxn = ACID_PERSISTENCE_ENTITY.beginTransaction();
        final Entity tenant = entityTxn.newEntity("Tenant");
//        final String passwordSalt = MessageDigestUtil.sha256(Double.valueOf(Math.random()).toString());
        final EntityId id = tenant.getId();
        tenant.setProperty("id", tenantId.toString());
        tenant.setProperty("company", tenantSiteAssignment.getCompany());
//        tenant.setProperty("passwordSalt", passwordSalt);
//        tenant.setProperty("password", MessageDigestUtil.sha256(passwordSalt + siteSecret));
        tenant.setProperty("contactEmail", tenantSiteAssignment.getContactEmail());

        final Entity authProvider = entityTxn.newEntity("AuthProvider");
        authProvider.setProperty("provider", "github");
//        authProvider.setProperty("email", "userAuthentication.details.email alexander.orlov@loxal.net");
//        authProvider.setProperty("name", "userAuthentication.details.name Alexander Orlov");
//        authProvider.setProperty("company", "userAuthentication.details.company loxal");
//        authProvider.setProperty("id", "userAuthentication.details.id 87507");
        authProvider.setProperty("id", tenantSiteAssignment.getAuthProviderId());
//        authProvider.setProperty("login", "userAuthentication.details.login loxal");
        tenant.addLink("authProvider", authProvider);
        authProvider.setLink("tenant", tenant);

        final Entity site = entityTxn.newEntity("Site");
        site.setProperty("id", siteId.toString());
        site.setProperty("secret", siteSecret.toString());
        tenant.addLink("site", site);
        site.setLink("tenant", site);

        entityTxn.commit();
        final Entity assignedTenant = getTenant(id);
        LOG.info("tenantId: " + id.getLocalId());
        LOG.info("authenticationId: " + authProvider.getId().getLocalId());
        LOG.info("siteId: " + site.getId().getLocalId());
//        ACID_PERSISTENCE_ENTITY.close();
        return ResponseEntity
                .created(URI.create("https://sitesearch.cloud/").resolve(String.valueOf(id.getLocalId())))
                .build();
    }

    private Entity getTenant(@NotNull EntityId id) {
        final StoreTransaction readTxn = ACID_PERSISTENCE_ENTITY.beginReadonlyTransaction();
        final Entity clientFetched = readTxn.getEntity(id);
        return clientFetched;
    }
}
