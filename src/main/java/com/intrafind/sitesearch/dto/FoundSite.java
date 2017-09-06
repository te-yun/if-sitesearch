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

package com.intrafind.sitesearch.dto;

import java.io.Serializable;
import java.util.Objects;

public class FoundSite implements Serializable {
    // TODO remove raw fields
    private String title;
    //    private String titleRaw;
    private String body;
    //    private String bodyRaw;
    private String url;
//    private String urlRaw;

    private FoundSite() {
    }

//    public FoundSite(String title, String titleRaw, String body, String bodyRaw, String url, String urlRaw) {
//        this.title = title;
//        this.titleRaw = titleRaw;
//        this.body = body;
//        this.bodyRaw = bodyRaw;
//        this.url = url;
//        this.urlRaw = urlRaw;
//    }

    public FoundSite(String title, String body, String url) {
        this.title = title;
        this.body = body;
        this.url = url;
    }

//    public String getTitleRaw() {
//        return titleRaw;
//    }
//
//    public void setTitleRaw(String titleRaw) {
//        this.titleRaw = titleRaw;
//    }

//    public String getBodyRaw() {
//        return bodyRaw;
//    }
//
//    public void setBodyRaw(String bodyRaw) {
//        this.bodyRaw = bodyRaw;
//    }
//
//    public String getUrlRaw() {
//        return urlRaw;
//    }
//
//    public void setUrlRaw(String urlRaw) {
//        this.urlRaw = urlRaw;
//    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getUrl() {
        return url;
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
        FoundSite site = (FoundSite) o;
        return Objects.equals(title, site.title) &&
                Objects.equals(body, site.body) &&
                Objects.equals(url, site.url);
    }

    @Override
    public int hashCode() {
        return Objects.hash(title, body, url);
    }
}
