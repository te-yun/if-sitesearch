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

import com.intrafind.api.Document;
import com.intrafind.api.index.Index;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.annotation.Profile;
import org.springframework.stereotype.Repository;

import java.util.List;

@Profile("oss")
@Repository
public class SimpleIndexService implements Index {
    private static final Logger LOG = LoggerFactory.getLogger(SimpleIndexService.class);

    @Override
    public void index(Document... documents) {
        LOG.warn("SimpleIndexService#index");
        IFIndexService.INDEX_SERVICE.index(documents);
    }

    @Override
    public List<Document> fetch(String[] options, String... documents) {
        LOG.warn("SimpleIndexService#fetch");
        return IFIndexService.INDEX_SERVICE.fetch(options, documents);
    }

    @Override
    public void delete(String... documents) {
        LOG.warn("SimpleIndexService#delete");
        IFIndexService.INDEX_SERVICE.delete(documents);
    }
}
