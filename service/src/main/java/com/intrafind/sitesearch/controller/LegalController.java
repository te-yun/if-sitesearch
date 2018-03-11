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

import com.intrafind.sitesearch.dto.AnalyzedContract;
import com.intrafind.sitesearch.dto.Contract;
import com.intrafind.sitesearch.service.LegalService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;
import java.util.UUID;

@RestController
@RequestMapping(LegalController.ENDPOINT)
public class LegalController {
    public static final String ENDPOINT = "/legal";
    private static final Logger LOG = LoggerFactory.getLogger(LegalController.class);
    private final LegalService legalService;

    @Autowired
    private LegalController(LegalService legalService) {
        this.legalService = legalService;
    }

    @RequestMapping(path = "{tenant}/contract", method = RequestMethod.PUT)
    ResponseEntity<AnalyzedContract> analyze(
            @PathVariable(value = "tenant") UUID tenant,
            @RequestParam(value = "content") String content,
            @RequestBody Contract contract
    ) {
        final Optional<AnalyzedContract> analyzedContract = legalService.analyze(contract);
        return analyzedContract.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.badRequest().build());
    }
}
