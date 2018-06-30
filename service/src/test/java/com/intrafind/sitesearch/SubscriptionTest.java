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

package com.intrafind.sitesearch;

import com.intrafind.sitesearch.dto.Subscription;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;
import org.springframework.test.context.junit4.SpringRunner;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotNull;

@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
public class SubscriptionTest {

    @Autowired
    private TestRestTemplate caller;

    @Test
    public void subscribeViaSite() {
        final var response = caller.exchange(
                "/subscriptions/woo-commerce/551",
                HttpMethod.PUT,
                HttpEntity.EMPTY,
                Subscription.class
        );
        assertEquals(HttpStatus.OK, response.getStatusCode());
        final var subscription = response.getBody();
        assertNotNull(subscription);
        assertNotNull(subscription.getId());
        assertNotNull(subscription.getSiteId());
        assertNotNull(subscription.getPlan());
        assertNotNull(subscription.getAffiliate());
        assertNotNull(subscription.getPaymentMethod());
        assertNotNull(subscription.getRawSubscription());
    }
}
