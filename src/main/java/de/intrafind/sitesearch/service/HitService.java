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

package de.intrafind.sitesearch.service;

import de.intrafind.sitesearch.dto.Hits;
import de.intrafind.sitesearch.dto.Site;
import de.intrafind.sitesearch.repository.SiteRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class HitService {
    private final SiteRepository repository;
    private Logger LOG = LoggerFactory.getLogger(HitService.class);

    @Autowired
    public HitService(final SiteRepository repository) {
        this.repository = repository;
    }

    public Hits search(String query) {
        final List<Site> found = repository.findAllByContent(query);

        return new Hits(query, found);
    }
}