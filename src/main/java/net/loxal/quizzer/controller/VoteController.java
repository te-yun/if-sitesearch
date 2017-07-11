/*
 * Copyright 2017 IntraFind Software AG. All rights reserved.
 */

package net.loxal.quizzer.controller;

import net.loxal.quizzer.dto.Customer;
import net.loxal.quizzer.service.VoteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(VoteController.ENDPOINT)
public class VoteController {
    public static final String ENDPOINT = "/searches";
    private final VoteService service;

    @Autowired
    VoteController(VoteService service) {
        this.service = service;
    }

    @RequestMapping(method = RequestMethod.POST)
    @ResponseStatus(HttpStatus.CREATED)
    Customer create(@RequestBody Customer creation) {
        return service.create(creation);
    }

    @RequestMapping(path = "{id}", method = RequestMethod.GET)
    Customer retrieve(@PathVariable("id") String id) {
        return service.retrieve(id);
    }

    @RequestMapping(method = RequestMethod.PUT)
    Customer update(@RequestBody Customer update) {
        return service.update(update);
    }

    @RequestMapping(path = "{id}", method = RequestMethod.DELETE)
    void delete(@PathVariable("id") String id) {
        service.delete(id);
    }
}
