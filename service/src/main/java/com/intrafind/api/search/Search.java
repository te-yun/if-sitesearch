/*
 * Copyright 2018 IntraFind Software AG. All rights reserved.
 */

package com.intrafind.api.search;

public interface Search {
    String SEPARATOR = ",";
    String SORT_SCORE = "_score";
    int DEFAULT_RETURN_TEASER_COUNT = 3;
    int DEFAULT_RETURN_TEASER_SIZE = 100;
    int DEFAULT_FACET_COUNT = 10;
    int DEFAULT_HIT_LIST_SIZE = 10;
    String HITS_LIST_SIZE = "hits.list.size";
    String HITS_LIST_OFFSET = "hits.list.offset";
    String HITS_SORT = "hits.sort";
    String FILTER_QUERY = "filter.query";
    String BOOST_QUERY = "boost.query";
    String RETURN_FIELDS = "return.fields";
    String RETURN_GEO_DISTANCE_FIELDS = "return.geo-distance.fields";
    String SEARCH_PREFERENCE = "search.preference";
    String SEARCH_USER_ID = "permissions.user-id";
    String SEARCH_CLIENT_IP = "permissions.client-ip";
    String SEARCH_SLOPPY_SCORE = "search.sloppy.score";
    String SEARCH_MODE = "search.mode";
    String INDEXES = "indexes";
    String DECAY_FIELD = "decay.field";
    String DECAY_BASE = "decay.base";
    String DECAY_SCALE = "decay.scale";
    String DECAY_WEIGHT = "decay.weight";
    String RETURN_TEASER_FIELDS = "return.teaser.fields";
    String RETURN_TEASER_COUNT = "return.teaser.count";
    String RETURN_TEASER_SIZE = "return.teaser.size";
    String RETURN_TEASER_TAG_PRE = "return.teaser.tag.pre";
    String RETURN_TEASER_TAG_POST = "return.teaser.tag.post";
    String RETURN_TERM_FACETS_FIELDS = "return.term-facets.fields";
    String RETURN_TERM_FACETS_COUNT = "return.term-facets.count";
    String RETURN_TERM_FACETS_ORDER = "return.term-facets.order";
    String TERM_FACET_ORDER_COUNT = "count";
    String TERM_FACET_ORDER_TERM = "term";
    String RETURN_SIGNIFICANT_TERMS_FIELDS = "return.significant-terms.fields";
    String RETURN_SIGNIFICANT_TERMS_COUNT = "return.significant-terms.count";
    String RETURN_DATE_HISTOGRAM_FIELDS = "return.date-histogram.fields";
    String RETURN_DATE_HISTOGRAM_GRANULARITY = "return.date-histogram.granularity";
    String RETURN_DATE_HISTOGRAM_ZONE = "return.date-histogram.zone";
    String RETURN_DATE_RANGE_FIELDS = "return.date-range.fields";

    Hits search(String searchQuery, Object... parameters);
}
