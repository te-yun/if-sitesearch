/*
 * Copyright 2017 IntraFind Software AG. All rights reserved.
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

package de.intrafind.sitesearch.dto;

import java.io.Serializable;
import java.util.Collections;
import java.util.List;

public class Hits implements Serializable {
    List<Site> sites = Collections.emptyList();
    //    private String id;
    private String query;

//    public String getId() {
//        return id;
//    }

    public Hits(String query, List<Site> sites) {
        this.query = query;
        this.sites = sites;
    }

    public String getQuery() {
        return query;
    }

    public List<Site> getSites() {
        return sites;
    }

    public void setSites(List<Site> sites) {
        this.sites = sites;
    }
}
