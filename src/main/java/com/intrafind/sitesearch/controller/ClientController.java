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

import jetbrains.exodus.core.crypto.MessageDigestUtil;
import jetbrains.exodus.entitystore.*;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

@CrossOrigin
@RestController
@RequestMapping(ClientController.ENDPOINT)
public class ClientController {
    public static final String ENDPOINT = "/clients";
    private static final Logger LOG = LoggerFactory.getLogger(ClientController.class);

    @RequestMapping(path = "/assign", method = RequestMethod.POST)
    ResponseEntity<Object> clients(
            @RequestParam(value = "tenantId") UUID tenantId,
            @RequestParam(value = "tenantSecret") UUID tenantSecret
    ) {

//        LOG.info("this: " + this);

        //////////////////// store e-mail  move to /client endpoint
        final PersistentEntityStore entityStore = PersistentEntityStores.newInstance("data-entity");
        LOG.info("entityStore: " + entityStore);
        final StoreTransaction entityTxn = entityStore.beginTransaction();
        final Entity client = entityTxn.newEntity("Client");
        final String type = client.getType();
        LOG.info("type: " + type);
        final EntityId id = client.getId();
        LOG.info("id: " + id);
        final String salt = MessageDigestUtil.sha256(Double.valueOf(Math.random()).toString());
        LOG.info("salt: " + salt);
        client.setProperty("name", "IntraFind Software AG");
        client.setProperty("salt", salt);
        client.setProperty("password", MessageDigestUtil.sha256(salt + tenantSecret));
        client.setProperty("email", "alexander.orlov@intrafind.de");
        final Entity clientFetched = entityTxn.getEntity(id);
        clientFetched.getPropertyNames().forEach(property -> {
            LOG.info("property: " + property);
            LOG.info("property value: " + clientFetched.getProperty(property));
        });
        entityTxn.commit();
        entityStore.close();
        ////////////////////
        return ResponseEntity.ok(null);
    }
}
