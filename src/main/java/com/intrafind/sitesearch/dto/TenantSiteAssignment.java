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
import java.util.UUID;

public class TenantSiteAssignment {
    private List<UUID> sites;
    private long id;
    private String salt;
    private String company;
    private String password;
    private String email;

    private TenantSiteAssignment() {
    }

    public TenantSiteAssignment(List<UUID> sites, long id, String salt, String company, String password, String email) {
        this.sites = sites;
        this.id = id;
        this.salt = salt;
        this.company = company;
        this.password = password;
        this.email = email;
    }

    public List<UUID> getSites() {
        return sites;
    }

    public void setSites(List<UUID> sites) {
        this.sites = sites;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getSalt() {
        return salt;
    }

    public void setSalt(String salt) {
        this.salt = salt;
    }

    public String getCompany() {
        return company;
    }

    public void setCompany(String company) {
        this.company = company;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
}
