/*
 * Copyright 2017 IntraFind Software AG. All rights reserved.
 */

package de.intrafind.sitesearch.controller;

import de.intrafind.sitesearch.dto.Customer;
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
    Customer create(@RequestBody Customer creation) {
        return null;
    }

    @RequestMapping(path = "{id}", method = RequestMethod.GET)
    Customer retrieve(@PathVariable("id") String id) {
        return null;
    }

//    http://ml-if-monster:8080/ifinder5DEV/api/search?iSearchIndex=1&action=facetsandsearch&sSearchTerm=test&start=0&limit=20&_=1499935120692
    @RequestMapping(method = RequestMethod.GET)
    Hit demo(@RequestParam("sSearchTerm") String sSearchTerm) {
        return service.search(sSearchTerm);
    }

    @RequestMapping(method = RequestMethod.PUT)
    Customer update(@RequestBody Customer update) {
        return null;
    }

    @RequestMapping(path = "{id}", method = RequestMethod.DELETE)
    void delete(@PathVariable("id") String id) {
        service.delete(id);
    }
}
