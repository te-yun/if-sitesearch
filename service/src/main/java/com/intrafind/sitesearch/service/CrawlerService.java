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

import com.intrafind.sitesearch.controller.CrawlerControllerFactory;
import com.intrafind.sitesearch.dto.CrawlerJobResult;
import com.intrafind.sitesearch.dto.SiteProfile;
import crawlercommons.sitemaps.*;
import edu.uci.ics.crawler4j.crawler.CrawlConfig;
import edu.uci.ics.crawler4j.crawler.CrawlController;
import edu.uci.ics.crawler4j.fetcher.PageFetcher;
import edu.uci.ics.crawler4j.robotstxt.RobotstxtConfig;
import edu.uci.ics.crawler4j.robotstxt.RobotstxtServer;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.net.URI;
import java.net.URL;
import java.util.*;
import java.util.stream.Collectors;

@Service
public class CrawlerService {
    private static final Logger LOG = LoggerFactory.getLogger(CrawlerService.class);
    private static final String CRAWLER_STORAGE = "data/crawler";
    private static final Random RANDOM_VERSION = new Random();
    public static final String SITE_SEARCH_USER_AGENT = "SiteSearch.cloud";

    public CrawlerJobResult recrawl(UUID siteId, UUID siteSecret, SiteProfile siteProfile) {
        final var urls = new ArrayList<String>();
        for (final var siteConfig : siteProfile.getConfigs()) {
            final var config = new CrawlConfig();
            config.setCrawlStorageFolder(CRAWLER_STORAGE);
            final var crawlerThreads = 2;
            config.setUserAgentString(SITE_SEARCH_USER_AGENT);
            config.setPolitenessDelay(200); // to avoid being blocked by crawled websites

            final var pageFetcher = new PageFetcher(config);
            final var robotstxtConfig = new RobotstxtConfig();
            final var robotstxtServer = new RobotstxtServer(robotstxtConfig, pageFetcher);
            robotstxtConfig.setEnabled(false); // crawler-commons' robots.txt rules interpretation is used later on instead

            final CrawlController controller;
            try {
                controller = new CrawlController(config, pageFetcher, robotstxtServer);
            } catch (final Exception e) {
                LOG.error("CRAWLER_INITIALIZATION_FAILURE: " + e.getMessage());
                throw new RuntimeException(e.getMessage());
            }

            if (siteConfig.isSitemapsOnly()) {
                useSitemapsOnly(config, controller, siteConfig.getUrl().toString());
            } else {
                controller.addSeed(siteConfig.getUrl().toString());
            }

            final CrawlController.WebCrawlerFactory<?> factory = new CrawlerControllerFactory(
                    siteId, siteSecret, siteConfig.getUrl(),
                    siteConfig.getPageBodyCssSelector(),
                    siteConfig.isAllowUrlWithQuery()
            );
            final var mhSiteId = UUID.fromString("c7d080ff-6eec-496e-a70e-db5ec81948ab");
            if (siteId.equals(mhSiteId)) { // TODO remove this
                LOG.warn("TEMPORARY_CHECK_FOR_MH - isAllowUrlWithQuery: " + siteConfig.isAllowUrlWithQuery());
            }
            controller.start(factory, crawlerThreads);

            final List<String> configUrls = controller.getCrawlersLocalData().stream()
                    .filter(Objects::nonNull)
                    .map(url -> (String) url)
                    .collect(Collectors.toList());

            urls.addAll(configUrls);
        }

        SiteCrawler.PAGE_COUNT.remove(siteId);
        return new CrawlerJobResult(urls.size(), urls);
    }

    private void useSitemapsOnly(CrawlConfig config, CrawlController controller, String url) {
        config.setMaxOutgoingLinksToFollow(0);
        config.setMaxDepthOfCrawling(0);
        final List<URL> seedUrls = extractSeedUrls(url);
        for (final URL pageUrl : seedUrls) {
            controller.addSeed(pageUrl.toString());
        }
    }

    public CrawlerJobResult crawl(String url, UUID siteId, UUID siteSecret, boolean isThrottled, boolean clearIndex, boolean sitemapsOnly, String pageBodyCssSelector) {
        final var config = new CrawlConfig();
        config.setCrawlStorageFolder(CRAWLER_STORAGE);
        final int crawlerThreads;
        if (isThrottled) {
            crawlerThreads = 2;
            config.setUserAgentString("Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0." + RANDOM_VERSION.nextInt(9999) + ".94 Safari/537.36");
            config.setPolitenessDelay(200); // to avoid being blocked by crawled websites
            config.setMaxPagesToFetch(500);
        } else {
            crawlerThreads = 5;
            config.setUserAgentString(SITE_SEARCH_USER_AGENT);
            config.setPolitenessDelay(200); // to avoid being blocked by crawled websites
        }

        final var pageFetcher = new PageFetcher(config);
        final var robotstxtConfig = new RobotstxtConfig();
        final var robotstxtServer = new RobotstxtServer(robotstxtConfig, pageFetcher);
        robotstxtConfig.setEnabled(false); // crawler-commons' robots.txt rules interpretation is used later on instead

        final CrawlController controller;
        try {
            controller = new CrawlController(config, pageFetcher, robotstxtServer);
        } catch (final Exception e) {
            LOG.error("CRAWLER_INITIALIZATION_FAILURE: " + e.getMessage());
            throw new RuntimeException(e.getMessage());
        }

        if (sitemapsOnly) {
            useSitemapsOnly(config, controller, url);
        } else {
            controller.addSeed(url);
        }

        final CrawlController.WebCrawlerFactory<?> factory =
                new CrawlerControllerFactory(siteId, siteSecret, URI.create(url), pageBodyCssSelector, false);
        controller.start(factory, crawlerThreads);

        final List<String> urls = controller.getCrawlersLocalData().stream()
                .filter(Objects::nonNull)
                .map(urlElement -> (String) urlElement)
                .collect(Collectors.toList());
        final int pageCount = urls.size();
        SiteCrawler.PAGE_COUNT.remove(siteId);

        return new CrawlerJobResult(pageCount, urls);
    }

    private List<URL> extractSeedUrls(final String url) {
        final List<URL> seedUrls = new ArrayList<>();
        final SiteMapParser siteMapParser = new SiteMapParser(false, true);
        try {
            final AbstractSiteMap abstractSiteMap = siteMapParser.parseSiteMap(new URL(url + "/sitemap.xml"));
            walkSiteMap(abstractSiteMap, seedUrls);
        } catch (UnknownFormatException | IOException e) {
            LOG.error(e.getMessage());
        }
        return seedUrls;
    }

    private void walkSiteMap(final AbstractSiteMap abstractSiteMap, final List<URL> seedUrls) throws UnknownFormatException, IOException {
        if (abstractSiteMap.isIndex()) {
            final Collection<AbstractSiteMap> siteMaps = ((SiteMapIndex) abstractSiteMap).getSitemaps();
            siteMaps.forEach(siteMapIndex -> {
                try {
                    walkSiteMap(siteMapIndex, seedUrls);
                } catch (UnknownFormatException | IOException e) {
                    LOG.error(e.getMessage());
                }
            });
        } else {
            final SiteMapParser siteMapParser = new SiteMapParser(false, true);
            final SiteMap siteMap = (SiteMap) siteMapParser.parseSiteMap(abstractSiteMap.getUrl());
            final Collection<SiteMapURL> siteMapUrls = siteMap.getSiteMapUrls();
            siteMapUrls.forEach(siteMapUrl -> seedUrls.add(siteMapUrl.getUrl()));

        }
    }
}