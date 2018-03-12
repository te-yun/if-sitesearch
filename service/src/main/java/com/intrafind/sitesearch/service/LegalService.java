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
import com.intrafind.sitesearch.dto.AnalyzedContract;
import com.intrafind.sitesearch.dto.Contract;
import okhttp3.*;
import org.apache.http.HttpHeaders;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import java.net.URI;
import java.util.Collections;
import java.util.Optional;

@Service
public class LegalService {
    private static final Logger LOG = LoggerFactory.getLogger(LegalService.class);

    private static final URI LEGAL_SERVICE_URI = URI.create("https://tagger.analyzelaw.com/json/tagger");
    private static final OkHttpClient HTTP_CLIENT = new OkHttpClient().newBuilder()
            .protocols(Collections.singletonList(Protocol.HTTP_1_1)) // required due to an OkHttp bug for HTTP2
            .build();
    private static final ObjectMapper MAPPER = new ObjectMapper();

    public Optional<AnalyzedContract> analyze(Contract contract) {
        final Request request;
        final Response response;
        try {
            request = new Request.Builder()
                    .url(LEGAL_SERVICE_URI.toString() + "?method=tag&param0=" + contract.getContent())
                    .header(HttpHeaders.AUTHORIZATION, System.getenv("BASIC_HASH_PASSWORD"))
                    .post(RequestBody.create(SiteCrawler.JSON_MEDIA_TYPE, ""))
                    .build();

            response = HTTP_CLIENT.newCall(request).execute();
            final AnalyzedContract analyzedContract = MAPPER.readValue(response.body().bytes(), AnalyzedContract.class);
            return Optional.of(analyzedContract);
        } catch (Exception e) {
            LOG.warn(e.getMessage());
        }
        return Optional.empty();
    }
}