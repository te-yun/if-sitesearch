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
import jetbrains.exodus.core.crypto.MessageDigestUtil;
import jetbrains.exodus.entitystore.*;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.util.Collections;
import java.util.UUID;

@CrossOrigin
@RestController
@RequestMapping(TenantController.ENDPOINT)
public class TenantController {
    public static final String ENDPOINT = "/tenants";
    private static final Logger LOG = LoggerFactory.getLogger(TenantController.class);
    private static final PersistentEntityStore ACID_PERSISTENCE_ENTITY = PersistentEntityStores.newInstance("data/entity");

    @RequestMapping(path = "/{siteId}/assign", method = RequestMethod.POST)
    ResponseEntity<TenantSiteAssignment> assignSite(
            @RequestParam(value = "siteId") UUID siteId,
            @RequestParam(value = "siteSecret") UUID siteSecret,
            @RequestBody TenantSiteAssignment tenantSiteAssignment
    ) {
        final StoreTransaction entityTxn = ACID_PERSISTENCE_ENTITY.beginTransaction();
        final Entity client = entityTxn.newEntity("Client");
        final EntityId id = client.getId();
        final String salt = MessageDigestUtil.sha256(Double.valueOf(Math.random()).toString());
        client.setProperty("company", tenantSiteAssignment.getCompany());
        client.setProperty("salt", salt);

        final Entity authentication = entityTxn.newEntity("Authentication");
        authentication.setProperty("provider", "github");
        client.addLink("authentication", authentication);
        authentication.setLink("client", client);

        client.setProperty("password", MessageDigestUtil.sha256(salt + siteSecret));
        client.setProperty("email", tenantSiteAssignment.getEmail());
//        final Entity clientFetched = entityTxn.getEntity(id);
//        clientFetched.getPropertyNames().forEach(property -> {
//            LOG.info("property.............: " + property);
//            LOG.info("property value..............: " + clientFetched.getProperty(property));
//        });
//
//        clientFetched.getLinkNames().forEach(
//                s -> {
//                    LOG.info("s: " + s);
//                    LOG.info("clientFetched.getLink(s): " + clientFetched.getLink(s));
//                }
//                );

        entityTxn.commit();
        ACID_PERSISTENCE_ENTITY.close();

        return ResponseEntity.created(URI.create("https://sitesearch.cloud/").resolve(String.valueOf(id.getLocalId())))
                .body(new TenantSiteAssignment(
                        Collections.emptyList(),
                        id.getLocalId(),
                        "salt",
                        "company",
                        "password",
                        "alexandder.orlov@intrafind.de"
                ));
    }
}
