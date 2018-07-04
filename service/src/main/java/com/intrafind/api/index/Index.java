/*
 * Copyright 2018 IntraFind Software AG. All rights reserved.
 */

package com.intrafind.api.index;

import com.intrafind.api.Document;

import java.util.List;

public interface Index {
    String[] ALL = null;
    String[] NONE = new String[0];

    void index(Document... documents);

    List<Document> fetch(String[] options, String... documents);

    void delete(String... documents);
}