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

import de.intrafind.sitesearch.dto.Document;
import de.intrafind.sitesearch.service.IndexService;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Collections;
import java.util.List;

// TODO rename to Documents endpoint
@RestController
@RequestMapping(IndexController.ENDPOINT)
public class IndexController {
    static final String ENDPOINT = "/default-tenant/indexes";
    private static final Logger LOG = LoggerFactory.getLogger(IndexController.class);
    private final IndexService service;

    @Autowired
    IndexController(IndexService service) {
        this.service = service;
    }

    @RequestMapping(method = RequestMethod.PUT)
    void index(@RequestBody List<Document> document) {
        service.index(document);
    }


    // TODO instead of delete by queryParm use delete by "/<tenant>/documents/<id>"

    /**
     * Deletes documents from the index.
     *
     * @param documentId  of a single document to delete
     * @param documentIds a list of documents to delete
     * @return IDs of not deleted documents
     */
    @RequestMapping(method = RequestMethod.DELETE)
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "IDs of not deleted documents", response = List.class, reference = "my-reference")}
    )
    @ApiOperation(value = "Deletes documents from index", response = ApiResponses.class)
    List<String> delete(
            @ApiParam(value = "ID of a single document to delete", example = "AV1kx0NCAsVjD7bV7B17")
            @RequestParam(name = "documentId", required = false) String documentId,
            @RequestBody(required = false) List<String> documentIds
    ) {
        // TODO implement deletion
        return Collections.emptyList();
    }
}
