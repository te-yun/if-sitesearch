package de.intrafind.sitesearch.dto;

import org.springframework.data.annotation.Id;
import org.springframework.data.elasticsearch.annotations.Document;

import java.util.Collections;
import java.util.List;

@Document(indexName = "hit", type = "hit", shards = 1, replicas = 0, refreshInterval = "-1")
public class Hit {
    @Id
    private String id;

    private List<Object> facets = Collections.emptyList();
    private List<Result> results;
    private String query;
    private String title;

    public Hit() {
    }

    public Hit(String query, List<Result> results) {
        this.query = query;
        this.results = results;
    }

    public List<Object> getFacets() {
        return facets;
    }

    public void setFacets(List<Object> facets) {
        this.facets = facets;
    }

    public List<Result> getResults() {
        return results;
    }

    public void setResults(List<Result> results) {
        this.results = results;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getQuery() {
        return query;
    }

    public void setQuery(String query) {
        this.query = query;
    }
}
