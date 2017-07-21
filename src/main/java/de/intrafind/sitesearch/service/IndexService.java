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

import de.intrafind.sitesearch.dto.Site;
import de.intrafind.sitesearch.repository.IndexRepository;
import org.elasticsearch.index.query.QueryBuilder;
import org.elasticsearch.index.query.QueryBuilders;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.elasticsearch.core.query.NativeSearchQueryBuilder;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class IndexService {
    private static final Logger LOG = LoggerFactory.getLogger(IndexService.class);
    private final IndexRepository repository;

    @Autowired
    public IndexService(final IndexRepository repository) {
        this.repository = repository;
    }

    public void index(List<Site> sites) {
        LOG.info("INDEXED!");
        sites.forEach(site -> {
            final Site index = repository.index(site);
            LOG.info("id: " + index.getId());
            final Site one = repository.findOne(index.getId());
            LOG.info(one.getId());
        });

        new NativeSearchQueryBuilder().build().getQuery();
        QueryBuilder queryBuilder = QueryBuilders.termsLookupQuery("content");
        QueryBuilder queryBuilder1 = QueryBuilders.termsQuery("content", "HTML");
        QueryBuilder queryBuilder2 = QueryBuilders.commonTermsQuery("content", "HTML");
        LOG.info("++++++++++++++");
        LOG.info(queryBuilder.toString());
        LOG.info(queryBuilder1.toString());
        LOG.info(queryBuilder2.toString());
        LOG.info(queryBuilder2.toString());
        LOG.info("++++++++++++++");

        QueryBuilder qqueryBuilder = QueryBuilders.matchQuery("content", "HTML");
        QueryBuilder qqueryBuilder1 = QueryBuilders.matchPhraseQuery("content", "HTML");
        QueryBuilder qqueryBuilder2 = QueryBuilders.matchPhrasePrefixQuery("content", "HTML");

        LOG.info("========");
        LOG.info(qqueryBuilder.toString());
        LOG.info(qqueryBuilder1.toString());
        LOG.info(qqueryBuilder2.toString());
        LOG.info(qqueryBuilder2.toString());
        LOG.info("========");

//        SearchQuery searchQuery;


//        final Iterable<Site> search = repository.search(queryBuilder);
//        search.forEach(e -> {
//            LOG.info(e.getId());
//            LOG.info(e.getContent());
//        });

//        final Site tml1 = repository.findByContent("some random text with HTML, actually an HTML site");
        final List<Site> tml1 = repository.findAllByContent("HTML");
        tml1.forEach(e -> {
            LOG.info("e.getContent() = " + e.getContent());
            System.out.println("e.getId() = " + e.getId());
        });
//        repository.findBy
//        LOG.info("tml1 = " + tml1);
//        final Site tml = repository.findByContent("HTML");
//        System.out.println("tml.getContent() =---------- " + tml);
//        LOG.info("tml ========= " + tml);
//        System.out.println("tml.getContent() = " + tml.getContent());
//        System.out.println("tml.getContent() = " + tml.getId());
//        LOG.info("tml = " + tml);
//        LOG.info("tml = " + tml.getId());
//        LOG.info("tml = " + tml.getContent());

//        final Iterable<Site> search = repository.search(queryBuilder);
//        search.forEach(e -> {
//            System.out.println("e.getContent() = " + e.getContent());
//            LOG.info(e.getContent());
//            LOG.info(e.getId());
//        });
    }
}