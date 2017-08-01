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

package de.intrafind.sitesearch.dto;

import java.io.Serializable;
import java.net.URI;
import java.util.Objects;

public class Site implements Serializable {
    private String tenant;
    private String title;
    private URI url;

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public URI getUrl() {
        return url;
    }

    public String getTenant() {
        return tenant;
    }

    private String id;

    public void setTenant(String tenant) {
        this.tenant = tenant;
    }

    public void setUrl(URI url) {
        this.url = url;
    }

    private String content;

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }


    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Site site = (Site) o;
        return Objects.equals(tenant, site.tenant) &&
                Objects.equals(title, site.title) &&
                Objects.equals(url, site.url) &&
                Objects.equals(id, site.id) &&
                Objects.equals(content, site.content);
    }

    @Override
    public int hashCode() {
        return Objects.hash(tenant, title, url, id, content);
    }
}
