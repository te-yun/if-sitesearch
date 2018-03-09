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

package com.intrafind.sitesearch.service;

import com.fasterxml.jackson.databind.ObjectMapper;
import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.RequestBody;
import okhttp3.Response;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import java.net.URI;
import java.util.Optional;

@Service
public class LegalService {
    private static final Logger LOG = LoggerFactory.getLogger(LegalService.class);

    private static final URI LEGAL_SERVICE_URI = URI.create("https://" + System.getenv("PASSWORD") + ":" + System.getenv("PASSWORD") + "@tagger.analyzelaw.com/json");
    private static final OkHttpClient HTTP_CLIENT = new OkHttpClient();
    private static final ObjectMapper MAPPER = new ObjectMapper();

    public Optional<Object> analyze(Object o) {
        final Request request;
        final Response response;
        try {
            request = new Request.Builder()
                    .url(LEGAL_SERVICE_URI.toString() + "/tagger?method=tag&param0=test")
                    .put(RequestBody.create(SiteCrawler.JSON_MEDIA_TYPE, MAPPER.writeValueAsBytes(o)))
                    .build();

            response = HTTP_CLIENT.newCall(request).execute();
            return Optional.of(response.body().string());
        } catch (Exception e) {
            LOG.warn(e.getMessage());
        }
        return Optional.empty();
    }
}