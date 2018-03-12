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

package com.intrafind.sitesearch.dto;

import com.google.common.hash.Hashing;

import java.net.URI;
import java.nio.charset.Charset;
import java.util.List;
import java.util.Objects;
import java.util.UUID;

public class SitePage {
    private String title;
    private String body;
    private String url;
    private List<String> labels;

    private SitePage() {
    }

    public SitePage(String title, String body, String url) {
        this.title = title;
        this.body = body;
        this.url = url;
    }

    public SitePage(String title, String body, String url, List<String> labels) {
        this.title = title;
        this.body = body;
        this.url = url;
        this.labels = labels;
    }

    public List<String> getLabels() {
        return labels;
    }

    public void setLabels(List<String> labels) {
        this.labels = labels;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getUrl() {
        return url;
    }

    public static String hashPageId(UUID siteId, String siteUrl) {
        return Hashing.sha256().hashString(siteId.toString() + siteUrl, Charset.forName("UTF-8")).toString();
    }

    public static String hashPageId(UUID siteId, URI siteUrl) {
        return Hashing.sha256().hashString(siteId.toString() + siteUrl, Charset.forName("UTF-8")).toString();
    }

    public void setUrl(String url) {
        this.url = url;
    }

    public String getBody() {
        return body;
    }

    public void setBody(String body) {
        this.body = body;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        SitePage page = (SitePage) o;
        return Objects.equals(title, page.title) &&
                Objects.equals(body, page.body) &&
                Objects.equals(url, page.url);
    }

    @Override
    public int hashCode() {
        return Objects.hash(title, body, url);
    }

    @Override
    public String toString() {
        return "{" +
                "\"title\":\"" + title + "\"," +
                "\"body\":\"" + body + "\"," +
                "\"url\":\"" + url + "\"" +
                "}";
    }
}
