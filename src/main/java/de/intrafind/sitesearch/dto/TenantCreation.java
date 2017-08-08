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
import java.util.List;
import java.util.UUID;

public class TenantCreation implements Serializable {
    private UUID tenantId;
    private UUID tenantSecret;
    private Integer successfullyIndexed;
    private List<URI> failed;

    private TenantCreation() {
    }

    public TenantCreation(UUID tenantId, UUID tenantSecret, Integer successfullyIndexed, List<URI> failed) {
        this.tenantId = tenantId;
        this.tenantSecret = tenantSecret;
        this.successfullyIndexed = successfullyIndexed;
        this.failed = failed;
    }

    public List<URI> getFailed() {
        return failed;
    }

    public void setFailed(List<URI> failed) {
        this.failed = failed;
    }

    public Integer getSuccessfullyIndexed() {
        return successfullyIndexed;
    }

    public void setSuccessfullyIndexed(Integer successfullyIndexed) {
        this.successfullyIndexed = successfullyIndexed;
    }

    public UUID getTenantId() {
        return tenantId;
    }

    public void setTenantId(UUID tenantId) {
        this.tenantId = tenantId;
    }

    public UUID getTenantSecret() {
        return tenantSecret;
    }

    public void setTenantSecret(UUID tenantSecret) {
        this.tenantSecret = tenantSecret;
    }
}
