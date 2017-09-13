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

package com.intrafind.sitesearch.integration;

import com.intrafind.sitesearch.controller.TenantController;
import com.intrafind.sitesearch.dto.TenantOverview;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.test.context.junit4.SpringRunner;

import static org.junit.Assert.assertEquals;

@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
public class TenantTest {
    private static final Logger LOG = LoggerFactory.getLogger(TenantTest.class);
    @Autowired
    private TestRestTemplate caller;

    @Test
    public void assignSiteToTenant() throws Exception {
        final ResponseEntity<TenantOverview> actual = caller.getForEntity(
                TenantController.ENDPOINT + "/910011b2-7f95-49e4-a9cb-189f5f5a6654/auth-providers/github/87507?accessToken=651bc4ff5792706965a6c37a0fab5b29d50bcc91",
                TenantOverview.class
        );
        assertEquals(HttpStatus.OK, actual.getStatusCode());
        LOG.info("actual.getBody(): " + actual.getBody());
    }
}


