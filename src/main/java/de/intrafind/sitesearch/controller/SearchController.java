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

package de.intrafind.sitesearch.controller;

import de.intrafind.sitesearch.dto.Hit;
import de.intrafind.sitesearch.service.SearchService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(SearchController.ENDPOINT)
public class SearchController {
    public static final String ENDPOINT = "/searches";
    private final SearchService service;

    @Autowired
    SearchController(SearchService service) {
        this.service = service;
    }

    @RequestMapping(method = RequestMethod.POST)
    @ResponseStatus(HttpStatus.CREATED)
    Hit create(@RequestBody Hit creation) {
        return null;
    }

    @RequestMapping(path = "{id}", method = RequestMethod.GET)
    Hit retrieve(@PathVariable("id") String id) {
        return null;
    }

//    http://ml-if-monster:8080/ifinder5DEV/api/search?iSearchIndex=1&action=facetsandsearch&sSearchTerm=test&start=0&limit=20&_=1499935120692
    @RequestMapping(method = RequestMethod.GET)
    Hit search(@RequestParam("sSearchTerm") String sSearchTerm) {
        return service.demo(sSearchTerm);
    }

    @RequestMapping(method = RequestMethod.PUT)
    Hit update(@RequestBody Hit update) {
        return null;
    }

    @RequestMapping(path = "{id}", method = RequestMethod.DELETE)
    void delete(@PathVariable("id") String id) {
        service.delete(id);
    }
}
