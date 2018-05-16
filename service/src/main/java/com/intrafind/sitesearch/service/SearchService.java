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

import com.intrafind.api.Fields;
import com.intrafind.api.search.Search;
import com.intrafind.sitesearch.Application;
import com.intrafind.sitesearch.dto.FoundPage;
import com.intrafind.sitesearch.dto.Hits;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Service
public class SearchService {
    static final Search SEARCH_SERVICE = IfinderCoreClient.newHessianClient(Search.class, Application.IFINDER_CORE + "/search");
    static final String QUERY_SEPARATOR = ",";
    private static final String HIT_TEASER_PREFIX = "hit.teaser.";

    public Hits search(final String query, final UUID siteId) {
        com.intrafind.api.search.Hits hits = SEARCH_SERVICE.search(
//                query + " AND " + Fields.TENANT + ":" + siteId,
                query, Search.FILTER_QUERY, Fields.TENANT + ":" + siteId,
//  TODO optimize by not retrieving all fields              Search.RETURN_FIELDS, Fields.BODY + QUERY_SEPARATOR + Fields.TITLE + QUERY_SEPARATOR + Fields.URL + QUERY_SEPARATOR + Fields.TENANT + QUERY_SEPARATOR + QUERY_SEPARATOR +SiteService.PAGE_THUMBNAIL,

                Search.RETURN_TEASER_FIELDS, Fields.BODY + QUERY_SEPARATOR + Fields.TITLE + QUERY_SEPARATOR + Fields.URL,
//                Search.HITS_SORT, "-_date_",
//                Search.HITS_SORT, "_date_",
                Search.RETURN_TEASER_COUNT, 1,
                Search.RETURN_TEASER_SIZE, 150,
                Search.RETURN_TEASER_TAG_PRE, "<span class=\"if-teaser-highlight\">",
                Search.RETURN_TEASER_TAG_POST, "</span>",

                Search.HITS_LIST_SIZE, 50 // max total results
        );

        final List<FoundPage> siteDocuments = new ArrayList<>();
        hits.getDocuments().forEach(document -> {
            final FoundPage site = new FoundPage(
                    document.get(HIT_TEASER_PREFIX + Fields.TITLE),
                    document.get(HIT_TEASER_PREFIX + Fields.BODY),
                    document.get(HIT_TEASER_PREFIX + Fields.URL),
                    document.get(Fields.URL),
                    document.getAll(SiteService.PAGE_LABELS),
                    document.get(SiteService.PAGE_THUMBNAIL)
            );
            siteDocuments.add(site);
        });

        return new Hits(query, siteDocuments);
    }
}