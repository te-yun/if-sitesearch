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

package edu.uci.ics.crawler4j.examples.basic;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.intrafind.sitesearch.service.PageService;
import edu.uci.ics.crawler4j.crawler.Page;
import edu.uci.ics.crawler4j.crawler.WebCrawler;
import edu.uci.ics.crawler4j.parser.HtmlParseData;
import edu.uci.ics.crawler4j.url.WebURL;
import okhttp3.*;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.io.IOException;
import java.util.Set;
import java.util.UUID;
import java.util.concurrent.atomic.AtomicInteger;
import java.util.regex.Pattern;

public class DefaultCrawler extends WebCrawler {
    private final static Logger LOG = LoggerFactory.getLogger(DefaultCrawler.class);
    private static final Pattern FILTERS = Pattern.compile(".*(\\.(css|js|gif|jpg|png|mp3|mp4|zip|gz))$");
    private static final ObjectMapper MAPPER = new ObjectMapper();
    private static final OkHttpClient HTTP_CLIENT = new OkHttpClient.Builder()
            .followRedirects(false)
            .followSslRedirects(false)
            .build();
    private static final AtomicInteger PAGES = new AtomicInteger(0);
    public static String crawlTarget = "https://www.migrosbank.ch/de/";
    //    private static final Pattern FILTERS = Pattern.compile(".*(\\.(html|htm|txt|pdf))$");
    private PageService service = new PageService();

    private UUID siteId;
    private UUID siteSecret;

    public DefaultCrawler(UUID siteId, UUID siteSecret) {
        this.siteId = siteId;
        this.siteSecret = siteSecret;
    }

    /**
     * This method receives two parameters. The first parameter is the page
     * in which we have discovered this new url and the second parameter is
     * the new url. You should implement this function to specify whether
     * the given url should be crawled or not (based on your crawling logic).
     * In this example, we are instructing the crawler to ignore urls that
     * have css, js, git, ... extensions and to only accept urls that start
     * with "http://www.ics.uci.edu/". In this case, we didn't need the
     * referringPage parameter to make the decision.
     */
    @Override
    public boolean shouldVisit(Page referringPage, WebURL url) {
        String href = url.getURL().toLowerCase();
        return !FILTERS.matcher(href).matches()
//        return FILTERS.matcher(href).matches()
                && href.startsWith(crawlTarget);
    }

    /**
     * This function is called when a page is fetched and ready
     * to be processed by your program.
     */
    @Override
    public void visit(Page page) {
        String url = page.getWebURL().getURL();
        if (!url.endsWith("html")) {
            LOG.error("NOT HTML>>>: " + url);
//            throw new RuntimeException("NOT HTML");
        }

        if (page.getParseData() instanceof HtmlParseData) {
            HtmlParseData htmlParseData = (HtmlParseData) page.getParseData();
            String text = htmlParseData.getText();
            String body = htmlParseData.getText();
            String html = htmlParseData.getHtml();
            String title = htmlParseData.getTitle();
            Set<WebURL> links = htmlParseData.getOutgoingUrls();

//            UUID siteId = UUID.fromString("760b7c78-508c-4625-ae69-c04c9efa0e34");
//            UUID siteSecret = UUID.fromString("aee39a92-1276-4602-86ef-fe7e32a7dd9f");
            com.intrafind.sitesearch.dto.Page sitePage = new com.intrafind.sitesearch.dto.Page(
                    title,
                    body.replaceAll("^\\s+|\\s+$", "").trim(),
                    url
            );
            System.out.println("sitePage: " + sitePage);
            try {
                Request request = new Request.Builder()
                        .url("https://api.sitesearch.cloud/sites/" + siteId + "/pages?siteSecret=" + siteSecret)
                        .put(RequestBody.create(MediaType.parse("application/json"), MAPPER.writeValueAsBytes(sitePage)))
                        .build();
                final Response response = HTTP_CLIENT.newCall(request).execute();
                if (response.code() != 200) {
                    LOG.error("response.code(): " + response.code());
                    response.close();
                    throw new RuntimeException("INVALID");
                }
                response.close();
            } catch (IOException e) {
                LOG.error(e.getMessage());
            }

            System.out.println("Number of outgoing links: " + links.size());
        }
        LOG.info("pageCount: " + PAGES.incrementAndGet());
    }
}