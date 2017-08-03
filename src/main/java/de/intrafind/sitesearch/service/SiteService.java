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

import com.intrafind.api.Document;
import com.intrafind.api.Fields;
import com.intrafind.api.index.Index;
import de.intrafind.sitesearch.Application;
import de.intrafind.sitesearch.dto.Site;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import java.net.URI;
import java.util.Optional;

@Service
public class SiteService {
    private static final Logger LOG = LoggerFactory.getLogger(SiteService.class);

    private Index indexerService = IfinderCoreClient.newHessianClient(Index.class, Application.iFinderCore + "/index");

    public Site index(String id, Site site) {
        Document indexable = new Document(id);
        indexable.set(Fields.BODY, site.getContent());
        indexable.set(Fields.TITLE, site.getTitle());
        indexable.set(Fields.URL, site.getUrl());
        indexable.set(Fields.TENANT, site.getTenant());
        indexerService.index(indexable);

        return fetchById(id);
    }

    public Site fetchById(String id) {
        Optional<Document> found = indexerService.fetch(Index.ALL, id).stream().findAny();

        if (found.isPresent()) {
            Document foundDocument = found.get();
            Site representationOfFoundDocument = new Site(foundDocument.get(Fields.TENANT), foundDocument.get(Fields.TITLE), foundDocument.get(Fields.BODY), URI.create(foundDocument.get(Fields.URL)));
            representationOfFoundDocument.setId(foundDocument.getId());

            return representationOfFoundDocument;
        } else {
            return new Site();
        }
    }
}