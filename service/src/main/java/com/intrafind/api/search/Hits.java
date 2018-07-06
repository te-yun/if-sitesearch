/*
 * Copyright 2018 IntraFind Software AG. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package com.intrafind.api.search;

import com.intrafind.api.Document;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

public final class Hits implements Serializable {
    public static final String KEY_HIT_SCORE = "hit.score";
    public static final String PREFIX_TEASER = "hit.teaser.";
    public static final String PREFIX_TERM_FACET = "term-facet.";
    public static final String PREFIX_SIGNIFICANT_TERMS = "significant-terms.";
    public static final String PREFIX_DATE_HISTOGRAM = "date-histogram.";
    public static final String PREFIX_DATE_RANGE = "date-range.";
    public static final String SUFFIX_FACET_TERMS = ".terms";
    public static final String SUFFIX_FACET_COUNTS = ".counts";
    public static final String SUFFIX_FACET_SCORE = ".score";
    public static final String SUFFIX_FACET_EXPLAIN = ".explain";
    public static final String PREFIX_GEO_DISTANCE = "geo-distance.";
    public static final String KEY_TOTAL_HITS = "totalHits";
    private final List<Document> documents = new ArrayList<>();
    private final Document metaData = new Document("meta");

    private Hits() {
    }

    public Hits(final long totalHits) {
        this.getMetaData().set("totalHits", totalHits);
    }

    public List<Document> getDocuments() {
        return this.documents;
    }

    public Document getMetaData() {
        return this.metaData;
    }

    public long getTotalHits() {
        return Long.parseLong(Objects.requireNonNull(this.metaData.get("totalHits")));
    }

    @Override
    public String toString() {
        return this.metaData + "/" + this.documents.toString();
    }
}