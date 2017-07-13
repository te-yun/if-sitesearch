/*
 * Copyright 2017 IntraFind Software AG. All rights reserved.
 */

package net.loxal.quizzer.service;

import net.loxal.quizzer.dto.Hit;
import net.loxal.quizzer.dto.Result;
import net.loxal.quizzer.repository.SearchRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.Collections;

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

    public Hit search(String query) {
        Result result = new Result("Any text...");
        Hit hit = new Hit(query);
        hit.setResults(Collections.singletonList(result));
        return hit;
//        return new Hit(query);
//        return repository.findByName(query);
    }
}