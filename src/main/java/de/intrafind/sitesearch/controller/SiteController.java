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

package de.intrafind.sitesearch.controller;

import de.intrafind.sitesearch.dto.Site;
import de.intrafind.sitesearch.dto.Tenant;
import de.intrafind.sitesearch.service.SiteService;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import io.swagger.annotations.ApiResponses;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@CrossOrigin
@RestController
@RequestMapping(SiteController.ENDPOINT)
public class SiteController {
    public static final String ENDPOINT = "/sites";
    private static final Logger LOG = LoggerFactory.getLogger(SiteController.class);
    private final SiteService service;

    @Autowired
    SiteController(SiteService service) {
        this.service = service;
    }

    /**
     * Fetches a specific site from index.
     *
     * @param id of the site to be fetched
     * @return site as it is present in index
     */
    @RequestMapping(method = RequestMethod.GET, path = "{id}")
    ResponseEntity<Site> fetchById(
            @PathVariable("id") String id
    ) {
        Optional<Site> fetched = service.fetchById(id);
        if (fetched.isPresent()) {
            return ResponseEntity.ok(fetched.get());
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @RequestMapping(method = RequestMethod.GET)
    ResponseEntity<List<UUID>> fetchAll(
            @RequestParam(value = "tenantId") UUID tenantId
    ) {
        Optional<List<UUID>> allDocumentsOfTenant = service.fetchAllDocuments(tenantId);
        if (allDocumentsOfTenant.isPresent()) {
            return ResponseEntity.ok(allDocumentsOfTenant.get());
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    /**
     * Inserts a site into index.
     *
     * @param site to be indexed
     */
    @RequestMapping(path = "{id}", method = RequestMethod.PUT)
    ResponseEntity<Site> index(
            @PathVariable("id") UUID id,
            @RequestBody Site site
    ) {
        // TODO make sure that an existing site is actually updated
//        return service.index(id, site);
        Optional<Site> indexed = service.index(id, site);
        if (indexed.isPresent()) {
            return ResponseEntity.ok(indexed.get());
        } else {
            return ResponseEntity.badRequest().build();
        }
    }

    @RequestMapping(path = "rss", method = RequestMethod.PUT)
    ResponseEntity<Tenant> indexFeed(
            @RequestParam(value = "tenantId", required = false, defaultValue = "") UUID tenantId,
            @RequestParam(value = "tenantSecret", required = false, defaultValue = "") UUID tenantSecret,
            @RequestParam(value = "feedUrl") URI feedUrl
    ) {
        Optional<Tenant> tenantCreatedInfo = service.indexFeed(feedUrl, tenantId, tenantSecret);
        if (tenantCreatedInfo.isPresent()) {
            return ResponseEntity.ok(tenantCreatedInfo.get());
        } else {
            return ResponseEntity.badRequest().build();
        }
    }

    /**
     * Deletes site from the index.
     *
     * @param id of a single document to delete
     */
    @RequestMapping(method = RequestMethod.DELETE, path = "{id}")
    @ApiOperation(value = "Deletes a document from index", response = ApiResponses.class)
    ResponseEntity deleteById(
            @ApiParam(value = "ID of a single document to delete", example = "5f2b9c2e-6071-4f30-8972-7781fac73726")
            @PathVariable(name = "id") UUID id
    ) {
        LOG.info("delete-event" + id);

        service.delete(id);
        return ResponseEntity.noContent().build();
    }

//    /**
//     * Deletes sites from the index.
//     *
//     * @param documentId  of a single document to delete
//     * @param documentIds a list of documents to delete
//     * @return IDs of not deleted documents
//     */
//    @RequestMapping(method = RequestMethod.DELETE)
//    @ApiResponses(value = {
//            @ApiResponse(code = 200, message = "IDs of not deleted documents", response = List.class, reference = "my-reference")}
//    )
//    @ApiOperation(value = "Deletes documents from index", response = ApiResponses.class)
//    List<String> delete(
//            @ApiParam(value = "ID of a single document to delete", example = "AV1kx0NCAsVjD7bV7B17")
//            @RequestParam(name = "documentId", required = false) String documentId,
//            @RequestBody(required = false) List<String> documentIds
//    ) {
//        return Collections.emptyList();
//    }
}
