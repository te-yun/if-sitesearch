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
import de.intrafind.sitesearch.dto.Hits;
import de.intrafind.sitesearch.dto.Site;
import de.intrafind.sitesearch.repository.SiteRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.net.URI;
import java.util.ArrayList;
import java.util.List;

@Service
public class HitService {
    private final SiteRepository repository;
    private Logger LOG = LoggerFactory.getLogger(HitService.class);
    private final RestTemplate call = new RestTemplate();

    @Autowired
    public HitService(final SiteRepository repository) {
        this.repository = repository;
    }

    public Hits search(String query) {
//        final List<Site> foundInContent = repository.findAllByContent(query);


//        HttpHeaders headers = new HttpHeaders();
//        headers.setContentType(MediaType.APPLICATION_FORM_URLENCODED);
//
//        MultiValueMap<String, String> map = new LinkedMultiValueMap<>();
//        map.add("param0", "hello");
//
//        HttpEntity<MultiValueMap<String, String>> request = new HttpEntity<>(map, headers);
//
//
//        Object response = call.postForObject(
//                "http://sitesearch.cloud:9605/json/search?method=search",
//                request, Object.class
//        );
//
//        LOG.info("response = " + response);


//        Search search= de.intrafind.sitesearch.service.Service.getHessianClient(Search.class, "http://sitesearch.cloud:9605/search/hessian/search");
//        Index index= de.intrafind.sitesearch.service.Service.getHessianClient(Index.class, "http://sitesearch.cloud:9605/hessian/index");
//
//        Document document1 = new Document("doc1").set("title", "document 1")
//            .add("body" , "this is a test")
//            .add("body" , "some additional test body terms")
//            .add("key"  , "valueA")
//            .add("key"  , "valueB")
//            .add("facet", "red");
//
//        Document document2 = new Document("doc2").set("title", "second document")
//            .set("body" , "the body")
//            .add("key"  , "valueA")
//            .add("facet", "red");
//
//        Document document3 = new Document("doc3").set("title", "third document")
//            .set("body" , "the body", "varags allowed!!!")
//            .add("key"  , "valueC")
//            .add("facet", "green");
//
//        index.index(document1, document2, document3);
//
//        LOG.info("index.fetch(Index.ALL) = " + index.fetch(Index.ALL, "doc1", "doc2"));


        Search search = de.intrafind.sitesearch.service.Service.getHessianClient(Search.class, "http://sitesearch.cloud:9605/hessian/search");

        com.intrafind.api.search.Hits hits = search.search(query);

        List<Site> siteDocuments = new ArrayList<>();
        hits.getDocuments().forEach(document -> {
            Site site = new Site();
            site.setId(document.getId());
            site.setUrl(URI.create(document.get(Fields.URL)));
            site.setTenant(document.get(Fields.TENANT));
            site.setContent(document.get(Fields.BODY));
            site.setTitle(document.get(Fields.TITLE));

            siteDocuments.add(site);
        });

//        LOG.info("hits.getDocuments() = " + hits.getMetaData());
//        LOG.info("hits.getDocuments() = " + hits.getDocuments().size());
//        LOG.info("hits.getDocuments() = " + hits.getDocuments().size());
//        hits.getDocuments().forEach(d ->
//        {
//            LOG.info("d.getId() = " + d.getId());
//            d.getFields().forEach((f, k) -> {
//                LOG.info("f = " + f);
//                LOG.info("k = " + k);
//                k.forEach(e -> {
//                    LOG.info("e = " + e);
//                });
////                LOG.info("d.get(f) = " + d.get(f));
//            });
//        });

//        System.out.println("s = " + s);
//        de.intrafind.sitesearch.service.Service.getHessianClient(Object.class, "http://sitesearch.cloud:9605/search/hessian/search");

        return new Hits(query, siteDocuments);
    }
}