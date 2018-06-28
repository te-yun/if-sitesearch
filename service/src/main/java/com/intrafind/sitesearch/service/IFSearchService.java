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

import com.intrafind.api.search.Hits;
import com.intrafind.api.search.Search;
import com.intrafind.sitesearch.Application;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Repository;

//    @Profile("prod")
//    @Profile("!oss")
@Primary
@Repository
public class IFSearchService implements Search {
    static final Search SEARCH_SERVICE = IfinderCoreClient.newHessianClient(Search.class, Application.IFINDER_CORE + "/search");
    private static final Logger LOG = LoggerFactory.getLogger(IFSearchService.class);
// to wire beans, use annotations below
//    @Autowired
//    @Qualifier(value = "mysqlMessageRepository")
//    vs
//    @Autowired
//    @Qualifier(value = "inMemoryMessageRepository")

    @Override
    public Hits search(String searchQuery, Object... parameters) {
        LOG.info("IFSearchSe");
        LOG.info("IFSearchS");
        LOG.info("IFSearch");
        System.out.println("IFSearchService-sout");
        System.out.println("IFSearchService-sout1");
        return SEARCH_SERVICE.search(searchQuery, parameters);
    }
}

