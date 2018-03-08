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

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import java.net.URI;

@Service
public class LegalService {
    private static final Logger LOG = LoggerFactory.getLogger(LegalService.class);

    private static final URI LEGAL_SERVICE_URI = URI.create("https://" + System.getenv("SPRING_SECURITY_USER_PASSWORD") + ":" + System.getenv("SPRING_SECURITY_USER_PASSWORD") + "@tagger.analyzelaw.com/json");


    public Object analyze(Object o) {
        return o;
    }
}