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

import java.util.List;
import java.util.Map;
import java.util.UUID;

public class TenantOverview {
    private Map<UUID, TenantInfo> tenants;
    private Map<UUID, UUID> sites;
    private List<String> authProviders;

    private TenantOverview() {
    }

    public TenantOverview(Map<UUID, TenantInfo> tenants, Map<UUID, UUID> sites, List<String> authProviders) {
        this.tenants = tenants;
        this.sites = sites;
        this.authProviders = authProviders;
    }

    public Map<UUID, TenantInfo> getTenants() {
        return tenants;
    }

    public void setTenants(Map<UUID, TenantInfo> tenants) {
        this.tenants = tenants;
    }

    public Map<UUID, UUID> getSites() {
        return sites;
    }

    public void setSites(Map<UUID, UUID> sites) {
        this.sites = sites;
    }

    public List<String> getAuthProviders() {
        return authProviders;
    }

    public void setAuthProviders(List<String> authProviders) {
        this.authProviders = authProviders;
    }

    public static class TenantInfo {
        private String company;
        private String contactEmail;

        private TenantInfo() {
        }

        public TenantInfo(String company, String contactEmail) {
            this.company = company;
            this.contactEmail = contactEmail;
        }

        public String getCompany() {
            return company;
        }

        public void setCompany(String company) {
            this.company = company;
        }

        public String getContactEmail() {
            return contactEmail;
        }

        public void setContactEmail(String contactEmail) {
            this.contactEmail = contactEmail;
        }
    }
}
