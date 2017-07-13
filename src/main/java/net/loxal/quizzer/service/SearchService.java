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
        Hit hit = new Hit(query, Arrays.asList(result));
        return hit;
    }
}