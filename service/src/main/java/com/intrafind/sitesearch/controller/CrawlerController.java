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

import com.fasterxml.jackson.databind.ObjectMapper;
import com.intrafind.sitesearch.dto.CaptchaVerification;
import com.intrafind.sitesearch.dto.CrawlerJobResult;
import com.intrafind.sitesearch.service.CrawlerService;
import com.intrafind.sitesearch.service.PageService;
import com.intrafind.sitesearch.service.SearchService;
import com.intrafind.sitesearch.service.SiteCrawler;
import okhttp3.MediaType;
import okhttp3.Request;
import okhttp3.Response;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.net.URI;
import java.util.UUID;

@RestController
@RequestMapping(SitesController.ENDPOINT)
public class CrawlerController {
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

    public static final ObjectMapper MAPPER = new ObjectMapper();

    @RequestMapping(path = "{siteId}/crawl", method = RequestMethod.POST)
    ResponseEntity<CrawlerJobResult> crawl(
            @PathVariable(value = "siteId") UUID siteId,
            @RequestParam(value = "siteSecret") UUID siteSecret,
            @RequestParam(value = "url") URI url,
            @RequestParam(value = "token") String captchaToken
    ) {
        if (!pageService.isAllowedToModify(siteId, siteSecret)) {
            return ResponseEntity.notFound().build();
        }

        boolean captchaPassed = false;
        try {
            Request request = new Request.Builder()
                    .url("https://www.google.com/recaptcha/api/siteverify?secret=" + System.getenv("RECAPTCHA_SITE_SECRET") + "&response=" + captchaToken)
                    .post(okhttp3.RequestBody.create(MediaType.parse("applications/json"), ""))
                    .build();
            final Response response = SiteCrawler.HTTP_CLIENT.newCall(request).execute();
            final CaptchaVerification captchaVerification = MAPPER.readValue(response.body().bytes(), CaptchaVerification.class);

            LOG.info(System.getenv("RECAPTCHA_SITE_SECRET") + " | data-callback: " + captchaToken
                    + "captchaVerification: " + captchaVerification.getSuccess());

            if (captchaVerification.getSuccess() || "true".equals(System.getenv("DEV_SKIP_FLAG"))) {
                captchaPassed = true;
            }
        } catch (IOException e) {
            LOG.error(e.getMessage());
            return ResponseEntity.unprocessableEntity().build();
        }

        if (captchaPassed) {
            final CrawlerJobResult crawlerJobResult = crawlerService.crawl(url.toString(), siteId, siteSecret);

            return ResponseEntity.ok(crawlerJobResult);
        } else {
            return ResponseEntity.badRequest().build();
        }
    }
}
