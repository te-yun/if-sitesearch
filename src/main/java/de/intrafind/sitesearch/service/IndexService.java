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

import de.intrafind.sitesearch.dto.Document;
import de.intrafind.sitesearch.repository.IndexRepository;
import org.elasticsearch.index.query.QueryBuilder;
import org.elasticsearch.index.query.QueryBuilders;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.elasticsearch.core.query.NativeSearchQueryBuilder;
import org.springframework.stereotype.Service;

@Service
public class IndexService {
    private static final Logger LOG = LoggerFactory.getLogger(IndexService.class);
    private final IndexRepository repository;

    @Autowired
    public IndexService(final IndexRepository repository) {
        this.repository = repository;
    }

    public void index(Document document) {
        LOG.info("INDEXED!");
        final Document index = repository.index(document);
        LOG.info("id: " + index.getId());
        final Document one = repository.findOne(index.getId());
        LOG.info(one.getId());


        // TODO use Query builder, check bookmarked tutorial

        new NativeSearchQueryBuilder().build().getQuery();
        QueryBuilder queryBuilder = QueryBuilders.termsLookupQuery("content");
        QueryBuilder queryBuilder1 = QueryBuilders.termsQuery("content", "HTML");
        QueryBuilder queryBuilder2 = QueryBuilders.commonTermsQuery("content", "HTML");
//        LOG.info("++++++++++++++");
//        LOG.info(queryBuilder.toString());
//        LOG.info(queryBuilder1.toString());
//        LOG.info(queryBuilder2.toString());
//        LOG.info(queryBuilder2.toString());
//        LOG.info("++++++++++++++");
//        QueryBuilder queryBuilder = QueryBuilders.matchQuery()
//        QueryBuilder queryBuilder = QueryBuilder.EMPTY_PARAMS.param("content", "HTML").;

//        SearchQuery searchQuery;


//        final Iterable<Document> search = repository.search(queryBuilder);
//        search.forEach(e -> {
//            LOG.info(e.getId());
//            LOG.info(e.getContent());
//        });
//        repository.search(searchQuery);
    }
}