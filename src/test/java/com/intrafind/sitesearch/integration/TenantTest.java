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

import org.junit.Test;
import org.junit.runner.RunWith;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.test.context.junit4.SpringRunner;

@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
public class TenantTest {
    private static final Logger LOG = LoggerFactory.getLogger(TenantTest.class);
    @Autowired
    private TestRestTemplate caller;

    @Test
    public void assignSiteToTenant() throws Exception {
//        final ResponseEntity<Object> actual = caller.postForEntity(
//                TenantController.ENDPOINT + "?tenantId=e10011b2-7f95-49e4-a9cb-189f5f5a6654&tenantSecret=c041b603-e5b7-4623-8fe9-4cd08e5b4558",
//                HttpEntity.EMPTY, Object.class
//        );
//        assertEquals(HttpStatus.OK, actual.getStatusCode());
//        LOG.info("actual.getBody(): " + actual.getBody());
    }
}


