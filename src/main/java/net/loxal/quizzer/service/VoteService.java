/*
 * Copyright 2017 IntraFind Software AG. All rights reserved.
 */

package net.loxal.quizzer.service;

import net.loxal.quizzer.dto.Customer;
import net.loxal.quizzer.repository.VoteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class VoteService {
    private final VoteRepository repository;

    @Autowired
    public VoteService(final VoteRepository repository) {
        this.repository = repository;
    }

    public Customer create(Customer creation) {
        return answerQuestion(creation);
    }

    private Customer answerQuestion(Customer answer) {
        final Customer saved = repository.save(answer);


        return saved;
    }

    public Customer retrieve(String id) {
        return repository.findOne(id);
    }

    public Customer update(Customer update) {
        return answerQuestion(update);
    }

    public void delete(String id) {
        repository.delete(id);
    }
}