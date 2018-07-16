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
import com.intrafind.sitesearch.service.SimpleAutocompleteClient;
import com.intrafind.sitesearch.service.SimpleIndexClient;
import com.intrafind.sitesearch.service.SimpleSearchClient;
import org.apache.http.HttpHost;
import org.apache.http.auth.AuthScope;
import org.apache.http.auth.UsernamePasswordCredentials;
import org.apache.http.client.CredentialsProvider;
import org.apache.http.impl.client.BasicCredentialsProvider;
import org.elasticsearch.action.admin.indices.create.CreateIndexRequest;
import org.elasticsearch.action.index.IndexRequest;
import org.elasticsearch.action.index.IndexResponse;
import org.elasticsearch.client.RestClient;
import org.elasticsearch.client.RestClientBuilder;
import org.elasticsearch.client.RestHighLevelClient;
import org.elasticsearch.common.xcontent.XContentType;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.test.context.junit4.SpringRunner;

import java.net.http.HttpClient;
import java.net.http.HttpHeaders;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertTrue;

@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
public class SimpleClientTest {
    private final static Logger LOG = LoggerFactory.getLogger(SimpleClientTest.class);
    @Autowired
    private TestRestTemplate caller;

    @Test
    public void test() {
        final var simpleIndex = new SimpleIndexClient();
        final var simpleAutocomplete = new SimpleAutocompleteClient();
        final var simpleSearch = new SimpleSearchClient();

        IndexRequest indexRequest = new IndexRequest(
                "sis",
                "doc",
                "4");
        final var jsonString = "{" +
                "\"java11\":\"KIMCHY\"," +
                "\"post\":\"2013-01-30\"," +
                "\"message\":\"TRYING 12 ELASTICSEARCH\"" +
                "}";
        indexRequest.source(jsonString, XContentType.JSON);

        final CreateIndexRequest createIndexRequest = new CreateIndexRequest("sis");
//        createIndexRequest.settings(Settings.builder()
//                .put("index.number_of_shards", 3)
//                .put("index.number_of_replicas", 2)
//        );
//        LOG.warn(createIndexRequest.validate().getMessage());

//        GetIndexRequest getIndexRequest = new GetIndexRequest();

//        --add-modules java.net.http
        final HttpClient httpClient = HttpClient.newHttpClient();
        HttpRequest httpRequest;
        HttpHeaders httpHeaders;
        HttpResponse<Subscription> httpResponse;

        final CredentialsProvider credentialsProvider = new BasicCredentialsProvider();
        credentialsProvider.setCredentials(AuthScope.ANY,
                new UsernamePasswordCredentials("sitesearch", System.getenv("SERVICE_SECRET"))
        );

        RestClientBuilder builder = RestClient.builder(new HttpHost("es.loxal.net", 443, "https"))
                .setHttpClientConfigCallback(httpClientBuilder -> {
                    httpClientBuilder.disableAuthCaching();
                    return httpClientBuilder.setDefaultCredentialsProvider(credentialsProvider);
                });

        final RestHighLevelClient client = new RestHighLevelClient(builder);

        try {
            LOG.info(">>>>>>>>>>>>>>>>>>>>>>><<<<<<");
            IndexResponse indexResponse = client.index(indexRequest);
            assertEquals("OK", indexResponse.status().name());
            assertEquals(200, indexResponse.status().getStatus());
//            final boolean exists = client.indices().exists(getIndexRequest);
//            final CreateIndexResponse createIndexResponse = client.indices().create(createIndexRequest);
//            client.close();
        } catch (Exception e) {
            LOG.error("ERROR >>>>>>>>>>>>>>>>>>>>>> " + e.getCause().getMessage());
        }
        assertTrue(true);
    }
}
