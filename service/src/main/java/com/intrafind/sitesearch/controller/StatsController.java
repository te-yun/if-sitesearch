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

package com.intrafind.sitesearch.controller;

import com.intrafind.sitesearch.dto.Stats;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import reactor.core.publisher.Mono;

import java.util.UUID;

@RestController
@RequestMapping(StatsController.ENDPOINT)
public class StatsController {

    public static final String ENDPOINT = "/stats";

    //    http://www.baeldung.com/spring-webflux
    @RequestMapping(method = RequestMethod.GET)
    Mono<Stats> stats(
            @RequestParam(value = "siteId", required = false) UUID siteId
    ) {
        return Mono.just(new Stats(
                System.getenv("BUILD_NUMBER"),
                System.getenv("SCM_HASH"),
                System.getenv("HOSTNAME"))
        );
    }
}
