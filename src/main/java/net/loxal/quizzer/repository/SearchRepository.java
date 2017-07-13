/*
 * Copyright 2017 IntraFind Software AG. All rights reserved.
 */

package net.loxal.quizzer.repository;

import net.loxal.quizzer.dto.Hit;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SearchRepository extends CrudRepository<Hit, String> {
    Hit findByName(String query);

    Hit findByTitle(String query);
}