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

import java.net.URI;
import java.util.List;
import java.util.Objects;
import java.util.UUID;

// TODO consolidate with SiteProfileUpdate?
public class SiteProfile {
    private UUID id;
    private UUID secret;
    private List<Config> configs;
    private String email;

    private SiteProfile() {
    }

    public SiteProfile(UUID id, UUID secret, String email, List<Config> configs) {
        this.id = id;
        this.secret = secret;
        this.email = email;
        this.configs = configs;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public UUID getId() {
        return id;
    }

    public void setId(UUID id) {
        this.id = id;
    }

    public UUID getSecret() {
        return secret;
    }

    public void setSecret(UUID secret) {
        this.secret = secret;
    }

    public List<Config> getConfigs() {
        return configs;
    }

    public static class Config {
        public static final String DEFAULT_PAGE_BODY_CSS_SELECTOR = "body";
        private URI url;
        private boolean allowUrlWithQuery = false;
        /**
         * Defaults to "body", overridable with any other CSS selector.
         */
        private String pageBodyCssSelector = DEFAULT_PAGE_BODY_CSS_SELECTOR;
        private boolean sitemapsOnly = false;

        private Config() {
        }

        public Config(final URI url, final String pageBodyCssSelector, final boolean sitemapsOnly, final boolean allowUrlWithQuery) {
            this.url = url;
            this.pageBodyCssSelector = pageBodyCssSelector;
            this.sitemapsOnly = sitemapsOnly;
            this.allowUrlWithQuery = allowUrlWithQuery;
        }

        public boolean allowUrlWithQuery(final UUID siteId) {
            final var mhSiteId = UUID.fromString("c7d080ff-6eec-496e-a70e-db5ec81948ab"); // save `allowUrlWithQuery` in sitePrfoile
            return siteId.equals(mhSiteId);
        }

        public boolean allowUrlWithQuery() {
            return allowUrlWithQuery;
        }

        public String getPageBodyCssSelector() {
            // Empty strings cannot be saved by the search service. Hence a non-empty default is required.
            return pageBodyCssSelector.isEmpty() ? DEFAULT_PAGE_BODY_CSS_SELECTOR : pageBodyCssSelector;
        }

        public URI getUrl() {
            return url;
        }

        public boolean isSitemapsOnly() {
            return sitemapsOnly;
        }

        @Override
        public String toString() {
            return "Config{" +
                    "url=" + url +
                    ", pageBodyCssSelector='" + pageBodyCssSelector + '\'' +
                    ", sitemapsOnly=" + sitemapsOnly +
                    '}';
        }

        @Override
        public boolean equals(Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;
            Config config = (Config) o;
            return sitemapsOnly == config.sitemapsOnly &&
                    Objects.equals(url, config.url) &&
                    Objects.equals(getPageBodyCssSelector(), config.getPageBodyCssSelector());
        }

        @Override
        public int hashCode() {
            return Objects.hash(url, getPageBodyCssSelector(), sitemapsOnly);
        }
    }
}
