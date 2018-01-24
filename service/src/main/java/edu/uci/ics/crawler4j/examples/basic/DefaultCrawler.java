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
import java.net.URI;
import java.util.Set;
import java.util.UUID;
import java.util.concurrent.atomic.AtomicInteger;
import java.util.regex.Pattern;

public class DefaultCrawler extends WebCrawler {
    private final static Logger LOG = LoggerFactory.getLogger(DefaultCrawler.class);
    private static final Pattern FILTERS = Pattern.compile(".*(\\.(css|js|gif|jpg|png|mp3|mp4|zip|gz))$");
    private static final AtomicInteger pages = new AtomicInteger(0);
    public static String crawlTarget;
    private static final ObjectMapper MAPPER = new ObjectMapper();
    private static final OkHttpClient HTTP_CLIENT = new OkHttpClient.Builder()
            .followRedirects(false)
            .followSslRedirects(false)
            .build();
    //    private static final Pattern FILTERS = Pattern.compile(".*(\\.(html|htm|txt|pdf))$");
    private PageService service = new PageService();

    private UUID siteId;
    private UUID siteSecret;

    public DefaultCrawler() {
        this.siteId = UUID.fromString("a2e8d60b-0696-47ea-bc48-982598ee35bd");
        this.siteSecret = UUID.fromString("04a0afc6-d89a-45c9-8ba8-41d393d8d2f8");
    }

    public DefaultCrawler(UUID siteId, UUID siteSecret) {
        this.siteId = siteId;
        this.siteSecret = siteSecret;
    }

    @Override
    public boolean shouldVisit(Page referringPage, WebURL url) {
        String href = url.getURL().toLowerCase();
        return !FILTERS.matcher(href).matches()
                && href.startsWith(crawlTarget)
                && noQueryParameter(url)
                ;
    }

    private boolean noQueryParameter(WebURL url) {
        return URI.create(url.getURL()).getQuery() == null || URI.create(url.getURL()).getQuery().isEmpty();
    }

    @Override
    public void visit(Page page) {
        String url = page.getWebURL().getURL();
        if (!url.endsWith("html")) { // TODO filter not necessary as the filter is applied in `shouldVisit`
            throw new RuntimeException("Not an HTML page: " + url);
        }

        if (page.getParseData() instanceof HtmlParseData) {
            HtmlParseData htmlParseData = (HtmlParseData) page.getParseData();
            String text = htmlParseData.getText();
            String body;
            if (
                    text.contains(" ö") ||
                            text.contains(" ä") ||
                            text.contains(" ü") ||
                            text.contains(" ß")
                    ) {
                body = text
                        .replaceAll(" ö", "ö")
                        .replaceAll(" ä", "ä")
                        .replaceAll(" ü", "ü")
                        .replaceAll(" ß", "ß")
                ;
            } else {
                body = text;
            }
            String html = htmlParseData.getHtml();
            String title = htmlParseData.getTitle();
            Set<WebURL> links = htmlParseData.getOutgoingUrls();

            com.intrafind.sitesearch.dto.Page sitePage = new com.intrafind.sitesearch.dto.Page(
                    title,
                    body
                            .replaceAll("(?s)<!--.+//-->", "")
                            .replaceAll("^\\s+|\\s+$", "").trim(),
                    url
            );
            LOG.info("sitePage: " + sitePage);
            try {
                Request request = new Request.Builder()
                        .url("https://api.sitesearch.cloud/sites/" + siteId + "/pages?siteSecret=" + siteSecret + "&clearIndex=true")
                        .put(RequestBody.create(MediaType.parse("application/json"), MAPPER.writeValueAsBytes(sitePage)))
                        .build();
                final Response response = HTTP_CLIENT.newCall(request).execute();
                if (response.code() != 200) {
                    LOG.error("response.code: " + response.code());
                    response.close();
                    throw new RuntimeException("Error while adding page to index");
                }
                response.close();
            } catch (IOException e) {
                LOG.error(e.getMessage());
            }

            LOG.info("outgoingURLs: " + links.size());
        }
        LOG.info("siteId: "+ siteId +" - pageCount: " + pages.incrementAndGet());
    }
}