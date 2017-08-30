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

package com.intrafind.sitesearch;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.http.*;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.web.context.WebApplicationContext;

import java.net.URI;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNull;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
import static org.springframework.test.web.servlet.setup.MockMvcBuilders.webAppContextSetup;

@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
public class SecurityTest {
    private static final Logger LOG = LoggerFactory.getLogger(SecurityTest.class);

    @Autowired
    private TestRestTemplate caller;

    @Autowired
    private WebApplicationContext webApplicationContext;

    private MockMvc mockMvc;

    @Before
    public void setUp() throws Exception {
        this.mockMvc = webAppContextSetup(webApplicationContext).build();
    }

    @Test
    public void fetchIndexHtml() throws Exception {
        mockMvc.perform(get("/index.html"))
                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.TEXT_HTML))
        ;
    }

    @Test
    public void assureSiteSearchServiceBasicAuthProtection() throws Exception {
        final ResponseEntity<String> secureEndpointJson = caller.postForEntity(URI.create("http://" + System.getenv("SECURITY_USER_PASSWORD") + "invalid:" + System.getenv("SECURITY_USER_PASSWORD") + "@sitesearch.cloud:9605/json/index?method=index"), HttpEntity.EMPTY, String.class);
        assertEquals(HttpStatus.UNAUTHORIZED, secureEndpointJson.getStatusCode());
        assertNull(secureEndpointJson.getBody());

        final ResponseEntity<String> secureEndpointJsonGet = caller.getForEntity(URI.create("http://" + "invalid:" + "credentials" + "@sitesearch.cloud:9605/json/index?method=index"), String.class);
        assertEquals(HttpStatus.UNAUTHORIZED, secureEndpointJsonGet.getStatusCode());

        final ResponseEntity<String> secureEndpointHessian = caller.postForEntity(URI.create("http://" + System.getenv("SECURITY_USER_PASSWORD") + "invalid:" + System.getenv("SECURITY_USER_PASSWORD") + "@sitesearch.cloud:9605/hessian/index?method=index"), HttpEntity.EMPTY, String.class);
        assertEquals(HttpStatus.UNAUTHORIZED, secureEndpointHessian.getStatusCode());
        assertNull(secureEndpointHessian.getBody());

        final ResponseEntity<String> secureEndpointHessianGet = caller.exchange("http://invalid:credentials@sitesearch.cloud:9605/hessian/index?method=index", HttpMethod.GET, HttpEntity.EMPTY, String.class);
        assertEquals(HttpStatus.UNAUTHORIZED, secureEndpointHessianGet.getStatusCode());
    }
}