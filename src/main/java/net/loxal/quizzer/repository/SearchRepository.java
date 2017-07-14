/*
 * Copyright 2017 IntraFind Software AG. All rights reserved.
 */

package net.loxal.quizzer.repository;

import net.loxal.quizzer.dto.Hit;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.awt.print.Book;

@Repository
//public interface SearchRepository extends CrudRepository<Hit, String> {
public interface SearchRepository extends ElasticsearchRepository<Hit, String> {
    Hit findByQuery(String query);

    Hit findByTitle(String title);
}