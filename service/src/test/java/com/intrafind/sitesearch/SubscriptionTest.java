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
import org.junit.Ignore;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.UUID;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotNull;

@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
public class SubscriptionTest {
    private final static Logger LOG = LoggerFactory.getLogger(SubscriptionTest.class);
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

    @Ignore
    @Test
    public void subscribeViaGitHub() {
        final var gitHubEventPayload = "{\"zen\":\"Anything added dilutes everything else.\",\"hook_id\":16215959,\"hook\":{\"type\":\"Marketplace::Listing\",\"id\":16215959,\"name\":\"web\",\"active\":true,\"events\":[\"*\"],\"config\":{\"content_type\":\"json\",\"insecure_ssl\":\"0\",\"secret\":\"********\",\"url\":\"https://sitesearch.cloud/subscriptions\"},\"updated_at\":\"2017-09-18T07:48:02Z\",\"created_at\":\"2017-09-18T07:48:02Z\",\"marketplace_listing_id\":541},\"sender\":{\"login\":\"loxal\",\"id\":87507,\"avatar_url\":\"https://avatars0.githubusercontent.com/u/87507?v=4\",\"gravatar_id\":\"\",\"url\":\"https://api.github.com/users/loxal\",\"html_url\":\"https://github.com/loxal\",\"followers_url\":\"https://api.github.com/users/loxal/followers\",\"following_url\":\"https://api.github.com/users/loxal/following{/other_user}\",\"gists_url\":\"https://api.github.com/users/loxal/gists{/gist_id}\",\"starred_url\":\"https://api.github.com/users/loxal/starred{/owner}{/repo}\",\"subscriptions_url\":\"https://api.github.com/users/loxal/subscriptions\",\"organizations_url\":\"https://api.github.com/users/loxal/orgs\",\"repos_url\":\"https://api.github.com/users/loxal/repos\",\"events_url\":\"https://api.github.com/users/loxal/events{/privacy}\",\"received_events_url\":\"https://api.github.com/users/loxal/received_events\",\"type\":\"User\",\"site_admin\":false}}";

        final var gitHubWebhookHeaders = new HttpHeaders();
        gitHubWebhookHeaders.add("X-GitHub-Signature", "sha1=4ccaada6d03ec965dbe09c4c08f69d89f3ec269b");
        gitHubWebhookHeaders.add("X-GitHub-Delivery", UUID.randomUUID().toString());
        gitHubWebhookHeaders.add("X-GitHub-Event", "ping");
        final var gitHubEvent = new HttpEntity<>(gitHubEventPayload, gitHubWebhookHeaders);
        final var response = caller.exchange(
                "/subscriptions/github",
                HttpMethod.POST,
                gitHubEvent,
                Object.class
        );
        assertEquals(HttpStatus.OK, response.getStatusCode());
        final var subscription = response.getBody();
        LOG.warn(">>>>>>>>>>>>>>>>>>>>>>>gitHubWebhookHeaders.size> " + gitHubEvent.getHeaders().size());
        LOG.warn(">>>>>>>>>>>>>>>>>>>>>>>gitHubWebhookHeaders.Signature> " + gitHubEvent.getHeaders().get("X-GitHub-Signature"));
        LOG.warn(">>>>>>>>>>>>>>>>>>>>>>>gitHubWebhookHeaders.Event> " + gitHubEvent.getHeaders().get("X-GitHub-Event"));
        LOG.warn(">>>>>>>>>>>>>>>>>>>>>>>gitHubWebhookHeaders.Delivery> " + gitHubEvent.getHeaders().get("X-GitHub-Delivery"));
        LOG.warn(">>>>>>>>>>>>>>>>>>>>>>>BODY> " + subscription);
        LOG.warn(">>>>>>>>>>>>>>>>>>>>>>>CODE> " + response.getStatusCode());
        assertNotNull(subscription);
    }
}
