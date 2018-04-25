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

import java.util.List;
import java.util.UUID;

// TODO consolidate with SiteProfile?
public class SiteProfileUpdate {
    private UUID secret;
    private List<SiteProfile.Config> configs;
    private String email;

    private SiteProfileUpdate() {
    }

    public SiteProfileUpdate(UUID secret, String email, List<SiteProfile.Config> configs) {
        this.secret = secret;
        this.email = email;
        this.configs = configs;
    }

    public SiteProfileUpdate(List<SiteProfile.Config> configs, String email) {
        this.email = email;
        this.configs = configs;
    }

    public List<SiteProfile.Config> getConfigs() {
        return configs;
    }

    public UUID getSecret() {
        return secret;
    }

    public void setSecret(UUID secret) {
        this.secret = secret;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
}
