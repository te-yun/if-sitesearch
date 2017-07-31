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
import de.intrafind.sitesearch.service.SiteService;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(SiteController.ENDPOINT)
public class SiteController {
    static final String ENDPOINT = "sites";
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
    Site fetchById(
            @PathVariable("id") String id
    ) {
        return service.fetchById(id);
    }

    /**
     * Inserts a site into index.
     *
     * @param site to be indexed
     */
    @RequestMapping(path = "{id}", method = RequestMethod.PUT)
    Site index(
            @PathVariable("id") String id,
            @RequestBody Site site
    ) {
        return service.index(id, site);
    }

    /**
     * Deletes sites from the index.
     *
     * @param documentId of a single document to delete
     */
    @RequestMapping(method = RequestMethod.DELETE, path = "{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    @ApiResponses(value = {
            @ApiResponse(code = 204, message = "IDs of not deleted documents", response = List.class, reference = "my-reference")}
    )
    @ApiOperation(value = "Deletes a document from index", response = ApiResponses.class)
    void deleteById(
            @ApiParam(value = "ID of a single document to delete", example = "AV1kx0NCAsVjD7bV7B17")
            @PathVariable(name = "documentId", required = false) String documentId
    ) {
        LOG.info("DELETE documentId = " + documentId);
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
