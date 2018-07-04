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

import com.intrafind.api.Document;
import com.intrafind.sitesearch.service.SimpleAutocompleteClient;
import com.intrafind.sitesearch.service.SimpleIndexClient;
import com.intrafind.sitesearch.service.SimpleSearchClient;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.test.context.junit4.SpringRunner;

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

        var doc = new Document("sis-test");
        doc.set("key", "value");
        simpleIndex.index(doc);
        assertTrue(true);
        assertTrue(true);


//        final CreateIndexRequest request = new CreateIndexRequest("sis-config");
//        request.settings(Settings.builder()
//                .put("index.number_of_shards", 3)
//                .put("index.number_of_replicas", 2)
//        );
//
//
//        final RestHighLevelClient client = new RestHighLevelClient(
//                RestClient.builder(
//                        new HttpHost("localhost", 9200, "http"),
//                        new HttpHost("localhost", 9201, "http")));
//        final CreateIndexResponse createIndexResponse = client.indices().create(request);
//        client.close();
    }
}
