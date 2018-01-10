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

package com.intrafind.sitesearch.service;

import com.intrafind.sitesearch.dto.CrawlerJobResult;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import java.util.Arrays;

@Service
public class CrawlerService {
    private static final Logger LOG = LoggerFactory.getLogger(CrawlerService.class);

    public CrawlerJobResult crawl() {
        String url = "https://example.com";
        String url1 = "https://example.com/page.html";
        String url2 = "https://example.com/url.html";

        return new CrawlerJobResult(Arrays.asList(url, url1, url2));
    }
}