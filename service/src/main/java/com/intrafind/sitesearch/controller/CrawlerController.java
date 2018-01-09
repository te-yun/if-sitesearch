/*
 * Copyright 2018 IntraFind Software AG. All rights reserved.
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

import com.intrafind.sitesearch.service.CrawlerService;
import com.intrafind.sitesearch.service.PageService;
import com.intrafind.sitesearch.service.SearchService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

@RestController
@RequestMapping(CrawlerController.ENDPOINT)
public class CrawlerController {
    public static final String ENDPOINT = "/sites";
    private static final Logger LOG = LoggerFactory.getLogger(CrawlerController.class);
    private final PageService pageService;
    private final CrawlerService crawlerService;
    private final SearchService searchService;

    @Autowired
    private CrawlerController(PageService pageService, CrawlerService crawlerService, SearchService searchService) {
        this.pageService = pageService;
        this.crawlerService = crawlerService;
        this.searchService = searchService;
    }

    @RequestMapping(path = "{siteId}/crawling", method = RequestMethod.PUT)
    ResponseEntity crawl(
            @PathVariable(value = "siteId") UUID siteId,
            @RequestParam(value = "siteSecret") UUID siteSecret,
            @RequestParam(value = "url") String url
    ) {
        final String crawl = crawlerService.crawling();
        System.out.println("crawl: " + crawl);
        return ResponseEntity.ok().build();
    }
}
