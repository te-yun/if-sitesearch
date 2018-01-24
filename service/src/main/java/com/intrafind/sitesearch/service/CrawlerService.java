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
import edu.uci.ics.crawler4j.crawler.CrawlConfig;
import edu.uci.ics.crawler4j.crawler.CrawlController;
import edu.uci.ics.crawler4j.examples.basic.DefaultCrawler;
import edu.uci.ics.crawler4j.fetcher.PageFetcher;
import edu.uci.ics.crawler4j.robotstxt.RobotstxtConfig;
import edu.uci.ics.crawler4j.robotstxt.RobotstxtServer;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.UUID;

@Service
public class CrawlerService {
    private static final Logger LOG = LoggerFactory.getLogger(CrawlerService.class);
    private static final String CRAWLER_STORAGE = "data/crawler";
    private static final int CRAWLER_THREADS = 5;

    public CrawlerJobResult crawl(String url, UUID siteId, UUID siteSecret) {
        DefaultCrawler.crawlTarget = url; // TODO pass to factory constructor
        LOG.info("crawlerTargetUrl: " + DefaultCrawler.crawlTarget);

        CrawlConfig config = new CrawlConfig();
        config.setCrawlStorageFolder(CRAWLER_STORAGE);
        config.setUserAgentString("Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/62.0.3202.94 Safari/537.36");
        config.setPolitenessDelay(100);
        config.setMaxOutgoingLinksToFollow(10);
        config.setMaxPagesToFetch(500);

        PageFetcher pageFetcher = new PageFetcher(config);
        RobotstxtConfig robotstxtConfig = new RobotstxtConfig();
        RobotstxtServer robotstxtServer = new RobotstxtServer(robotstxtConfig, pageFetcher);
        CrawlController controller;
        try {
            controller = new CrawlController(config, pageFetcher, robotstxtServer);
        } catch (Exception e) {
            LOG.error(e.getMessage());
            throw new RuntimeException();
        }

        controller.addSeed(url);
        controller.start(DefaultCrawler.class, CRAWLER_THREADS);
//        CrawlerControllerFactory factory = new CrawlerControllerFactory(siteId, siteSecret);
//        controller.startNonBlocking(factory, CRAWLER_THREADS);
//                controller.start(factory, CRAWLER_THREADS);


        String url1 = "https://example.com/page.html";
        String url2 = "https://example.com/url.html";

        return new CrawlerJobResult(Arrays.asList(url1, url2));
    }
}