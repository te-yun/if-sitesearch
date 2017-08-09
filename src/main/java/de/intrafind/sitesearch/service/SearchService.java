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
import java.util.UUID;

@Service
public class SearchService {
    private static final Logger LOG = LoggerFactory.getLogger(SearchService.class);
    private final RestTemplate call = new RestTemplate();

    private Search searchService = IfinderCoreClient.newHessianClient(Search.class, Application.I_FINDER_CORE + "/search");

    public Hits search(String query, String tenantId) {
        com.intrafind.api.search.Hits hits = searchService.search(
                query + " AND " + Fields.TENANT + ":" + tenantId,

                Search.RETURN_FIELDS, Fields.BODY + "," + Fields.TITLE + "," + Fields.URL + "," + Fields.TENANT,

                Search.RETURN_TEASER_FIELDS, Fields.BODY,
                Search.RETURN_TEASER_COUNT, 1,
                Search.RETURN_TEASER_SIZE, 200,

                Search.HITS_LIST_SIZE, 1_000
        );

        LOG.info("query: " + query);
        List<Site> siteDocuments = new ArrayList<>();
        hits.getDocuments()
//                .stream()
                // TODO introduce the tenant filter much earlier, at 9605 service level
//                .filter(document -> tenantId.equals(document.get(Fields.TENANT)))
                .forEach(document -> {
                    Site site = new Site();
                    site.setId(document.getId());
                    site.setUrl(URI.create(document.get(Fields.URL)));
                    // TODO remove tenant INFO as it is not relevant here, consider separate DTO
                    site.setTenant(UUID.fromString(document.get(Fields.TENANT)));
                    site.setBody(document.get(Fields.BODY));
                    site.setTitle(document.get(Fields.TITLE));

                    siteDocuments.add(site);
                });

        return new Hits(query, siteDocuments);
    }
}