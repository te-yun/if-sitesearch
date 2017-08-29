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

import com.google.common.hash.Hashing;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.io.Serializable;
import java.nio.charset.Charset;
import java.util.Objects;
import java.util.UUID;

public class Site implements Serializable {
    private static final Logger LOG = LoggerFactory.getLogger(Site.class);

    private String id;
    private UUID tenantId;
    private UUID tenantSecret;
    private String title;
    private String body;
    private String url;

    private Site() {
    }

    public Site(String id, UUID tenantId, UUID tenantSecret, String title, String body, String url) {
        this.id = id;
        this.tenantId = tenantId;
        this.tenantSecret = tenantSecret;
        this.title = title;
        this.body = body;
        this.url = url;
    }

    public UUID getTenantSecret() {
        return tenantSecret;
    }

    public void setTenantSecret(UUID tenantSecret) {
        this.tenantSecret = tenantSecret;
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

    public UUID getTenantId() {
        return tenantId;
    }

    public void setTenantId(UUID tenantId) {
        this.tenantId = tenantId;
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

    public static String hashSiteId(UUID tenantId, String siteUrl) {
        return Hashing.sha256().hashString(tenantId.toString() + siteUrl, Charset.forName("UTF-8")).toString();
    }

    public String getId() {
        return id;
    }


    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Site site = (Site) o;
        return Objects.equals(title, site.title) &&
                Objects.equals(body, site.body) &&
                Objects.equals(url, site.url);
    }

    @Override
    public int hashCode() {
        return Objects.hash(title, body, url);
    }

    public void setId(String id) {
        LOG.info("Objects.hashSiteId(url): " + Objects.hash(url));
        LOG.info("Objects.hashSiteId(tenantId): " + Objects.hash(tenantId));
        LOG.info("tenantId: " + tenantId + "#" + Objects.hash(url));
        this.id = id;
    }
}
