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

import com.intrafind.api.Fields;
import com.intrafind.api.search.Search;
import de.intrafind.sitesearch.Application;
import de.intrafind.sitesearch.dto.Hits;
import de.intrafind.sitesearch.dto.Site;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.net.URI;
import java.util.ArrayList;
import java.util.List;

@Service
public class SearchService {
    private static final Logger LOG = LoggerFactory.getLogger(SearchService.class);
    private final RestTemplate call = new RestTemplate();

    private Search search = IfinderCoreClient.newHessianClient(Search.class, Application.iFinderCore + "/search");

    public Hits search(String query, String tenantId) {
        com.intrafind.api.search.Hits hits = search.search(query);

        List<Site> siteDocuments = new ArrayList<>();
        // TODO introduce the tenant filter much earlier, at 9605 service level
        hits.getDocuments().stream().filter(document -> tenantId.equals(document.get(Fields.TENANT))).forEach(document -> {
            Site site = new Site();
            site.setId(document.getId());
            site.setUrl(URI.create(document.get(Fields.URL)));
            site.setTenant(document.get(Fields.TENANT));
            site.setContent(document.get(Fields.BODY));
            site.setTitle(document.get(Fields.TITLE));

            siteDocuments.add(site);
        });

        return new Hits(query, siteDocuments);
    }
}