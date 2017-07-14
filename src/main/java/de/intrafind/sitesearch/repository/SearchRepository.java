/*
 * Copyright 2017 IntraFind Software AG. All rights reserved.
 */

package de.intrafind.sitesearch.repository;

import de.intrafind.sitesearch.dto.Hit;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;
import org.springframework.stereotype.Repository;

@Repository
//public interface SearchRepository extends CrudRepository<Hit, String> {
public interface SearchRepository extends ElasticsearchRepository<Hit, String> {
    Hit findByQuery(String query);

    Hit findByTitle(String title);
}