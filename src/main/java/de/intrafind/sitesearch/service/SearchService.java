/*
 * Copyright 2017 [name of copyright owner]
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

import de.intrafind.sitesearch.dto.Hit;
import de.intrafind.sitesearch.dto.Result;
import de.intrafind.sitesearch.repository.SearchRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.logging.Logger;

@Service
public class SearchService {
    private final SearchRepository repository;

    @Autowired
    public SearchService(final SearchRepository repository) {
        this.repository = repository;
    }

    public void delete(String id) {
        repository.delete(id);
    }

    public Hit demo(String query) {
        final String qresult;
        switch (query) {
            case "ying":
                qresult = "YING result";
                break;
            case "yang":
                qresult = "YANG result";
                break;
            default:
                qresult = "SOMETHING ELSE";
                break;
        }
        Result result = new Result();
        result.setTitle("Some TITLE with " + qresult + " in it.");
        result.setText("Some TEXT with " + qresult + " in it.");
        Hit hit = new Hit(query, Collections.singletonList(result));

        final Hit save = repository.save(hit);
        repository.findAll().forEach(e -> {
            Logger.getGlobal().info("query: " + e.getQuery());
        });
        Logger.getGlobal().info(save.getId());
        return hit;
    }
}