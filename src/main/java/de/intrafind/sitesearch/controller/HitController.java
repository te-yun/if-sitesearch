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

import de.intrafind.sitesearch.dto.Hits;
import de.intrafind.sitesearch.service.HitService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(HitController.ENDPOINT)
public class HitController {
    public static final String ENDPOINT = "/hits";
    private static final Logger LOG = LoggerFactory.getLogger(HitController.class);
    private final HitService service;

    @Autowired
    HitController(HitService service) {
        this.service = service;
    }

    @RequestMapping(method = RequestMethod.GET)
    Hits search(
            @RequestParam(value = "sSearchTerm") String sSearchTerm, // legacy parameter
            @RequestParam(value = "query", required = false) String query
    ) {
        // to stay compatible to the legacy API for now
        query = sSearchTerm;
        LOG.info("query = " + query);

        return service.search(query);
    }

//    @RequestMapping(method = RequestMethod.GET)
//    Hits iFinderLegacySearch(
//            @RequestParam(value = "sSearchTerm") String sSearchTerm,
//            @RequestParam(value = "action", defaultValue = "facetsandsearch") String action,
//            @RequestParam(value = "iSearchIndex", defaultValue = "1") int iSearchIndex,
//            @RequestParam(value = "limit", defaultValue = "20") int limit,
//            @RequestParam(value = "limit", defaultValue = "0") int start
//    ) {
//        LOG.info("==========");
//        LOG.info(sSearchTerm);
//        LOG.info(action);
//        LOG.info("" + iSearchIndex);
//        LOG.info("" + limit);
//        LOG.info("" + start);
//        LOG.info("==========");
//
//        return search(sSearchTerm);
//    }
}
