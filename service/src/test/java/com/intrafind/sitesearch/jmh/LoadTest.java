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

package com.intrafind.sitesearch.jmh;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.intrafind.sitesearch.controller.AutocompleteController;
import com.intrafind.sitesearch.controller.SearchController;
import com.intrafind.sitesearch.dto.Autocomplete;
import com.intrafind.sitesearch.dto.Hits;
import com.intrafind.sitesearch.integration.SearchTest;
import okhttp3.Call;
import okhttp3.Callback;
import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.Response;
import org.openjdk.jmh.annotations.Benchmark;
import org.openjdk.jmh.annotations.Mode;
import org.openjdk.jmh.annotations.Scope;
import org.openjdk.jmh.annotations.State;
import org.openjdk.jmh.results.format.ResultFormatType;
import org.openjdk.jmh.runner.Runner;
import org.openjdk.jmh.runner.RunnerException;
import org.openjdk.jmh.runner.options.Options;
import org.openjdk.jmh.runner.options.OptionsBuilder;
import org.openjdk.jmh.runner.options.TimeValue;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Random;
import java.util.UUID;
import java.util.concurrent.TimeUnit;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotNull;
import static org.junit.Assert.assertTrue;

@State(Scope.Benchmark)
public class LoadTest {
    private static final Logger LOG = LoggerFactory.getLogger(LoadTest.class);
    private static final UUID LOAD_SITE_ID = UUID.fromString("563714f1-96c0-4500-b366-4fc7e734fa1d");
    static final String[] LOREM_IPSUM = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras viverra enim vitae malesuada placerat. Nam auctor pellentesque libero, et venenatis enim molestie vel. Duis est metus, congue quis orci id, tincidunt mattis turpis. In fringilla ultricies sapien ultrices accumsan. Sed mattis tellus lacus, quis scelerisque turpis hendrerit et. In iaculis malesuada ipsum, ac rhoncus mauris auctor quis. Proin varius, ex vestibulum condimentum lacinia, ligula est finibus ligula, id consectetur nisi enim ut velit. Sed aliquet gravida justo ac condimentum. In malesuada sed elit vitae vestibulum. Mauris vitae congue lacus. Quisque vitae tincidunt orci. Donec viverra enim a lacinia pulvinar. Sed vel ullamcorper est. Vestibulum vel urna at nisl tincidunt blandit. Donec purus leo, interdum in diam in, posuere varius tellus. Quisque eleifend nulla at nulla vestibulum ullamcorper. Praesent interdum vehicula cursus. Morbi vitae nunc et urna rhoncus semper aliquam nec velit. Quisque aliquet et velit ut mollis. Sed mattis eleifend tristique. Praesent pharetra, eros eget viverra tempus, nisi turpis molestie metus, nec tristique nulla dolor a mauris. Nullam cursus finibus erat, in pretium urna fermentum ac. In hac habitasse platea dictumst. Cras id velit id nisi euismod eleifend. Duis vehicula gravida bibendum. Cras rhoncus, massa et accumsan euismod, metus arcu rutrum orci, eu porttitor lacus tellus sed quam. Morbi tincidunt est sit amet sem convallis porta in nec nisi. Sed ex enim, fringilla nec diam in, luctus pulvinar enim. Suspendisse potenti. Quisque ut pellentesque erat. In tincidunt metus id sem fringilla sagittis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin erat nunc, pharetra sit amet iaculis nec, malesuada eu dui. Nullam sagittis ut arcu vitae convallis. Mauris molestie gravida lectus, eu commodo quam bibendum aliquam. Donec laoreet sed dolor eu consectetur."
            .split("\\s");

    static final List<String> QUERY_LIST_AUTOCOMPLETE;
    static final String LOAD_TARGET = "https://api.sitesearch.cloud";
    static final OkHttpClient CALLER = new OkHttpClient.Builder()
            .connectTimeout(60, TimeUnit.SECONDS)
            .readTimeout(60, TimeUnit.SECONDS)
            .writeTimeout(60, TimeUnit.SECONDS)
            .pingInterval(1, TimeUnit.SECONDS)
            .retryOnConnectionFailure(true)
            .followRedirects(false)
            .followSslRedirects(false)
            .build();
    static final ObjectMapper MAPPER = new ObjectMapper();
    static final Random PSEUDO_ENTROPY = new Random();

    static final Map<String, Long> SEARCH_QUERIES = new HashMap<>();
    static final Map<String, Long> AUTOCOMPLETE_QUERIES = new HashMap<>();
    private static final List<UUID> SITES = Arrays.asList(
            SearchTest.SEARCH_SITE_ID,
            UUID.fromString("14689bfd-61a4-438b-8625-28c23d334f81"), // https://www.migrosbank.ch/it/
            UUID.fromString("b40ddad3-e0bc-453e-a98a-87b83d4f9cd3"), // https://www.migrosbank.ch/fr/
            UUID.fromString("8e0af062-cb74-4529-9b7b-47ca1c101ae8"), // https://www.migrosbank.ch/de/
            LOAD_SITE_ID // https://www.migrosbank.ch/de, https://blog.migrosbank.ch/de
    );

    static {
        SEARCH_QUERIES.put("bank", 47L);
        SEARCH_QUERIES.put("fonds", 1L);
        SEARCH_QUERIES.put("finanzen", 12L);
        SEARCH_QUERIES.put("geld", 34L);
        SEARCH_QUERIES.put("\uD83E\uDD84", 0L);
    }

    static final List<String> QUERY_LIST_SEARCH = new ArrayList<>(SEARCH_QUERIES.keySet());

    static {
        AUTOCOMPLETE_QUERIES.put("hyp", 0L);
        AUTOCOMPLETE_QUERIES.put("swiss", 0L);
        AUTOCOMPLETE_QUERIES.put("migros", 0L);
        AUTOCOMPLETE_QUERIES.put("invest", 0L);
        QUERY_LIST_AUTOCOMPLETE = new ArrayList<>(AUTOCOMPLETE_QUERIES.keySet());
    }

    public static void main(String... args) throws RunnerException {
        Options options = new OptionsBuilder()
                .timeout(TimeValue.seconds(60))
//                .include(".*")
//                .include(LoadIndex2Users.class.getSimpleName())
                .include(LoadTest.class.getSimpleName())
                .forks(1)
                .threads(150)
                .mode(Mode.Throughput)
                .resultFormat(ResultFormatType.JSON)
                .result("build/jmh-result.json")
                .shouldFailOnError(true)
                .build();

        new Runner(options).run();
    }

    @Benchmark
    public void staticFiles() {
        final Request request = new Request.Builder()
                .url(LOAD_TARGET)
                .build();
        CALLER.newCall(request).enqueue(new Callback() {
            @Override
            public void onFailure(Call call, IOException e) {
                LOG.error(e.getMessage());
            }

            @Override
            public void onResponse(Call call, Response response) {
                assertEquals(HttpStatus.OK.value(), response.code());
                assertNotNull(response.body());
                response.close();
            }
        });
    }

    @Benchmark
    public void search() {
        final int randomSiteIndex = PSEUDO_ENTROPY.nextInt(SITES.size());
        final UUID randomSite = SITES.get(randomSiteIndex);
        final int randomQueryIndex = PSEUDO_ENTROPY.nextInt(SEARCH_QUERIES.size());
        final String randomQuery = QUERY_LIST_SEARCH.get(randomQueryIndex);

        final Request request = new Request.Builder()
                .url(LOAD_TARGET + "/sites/" + randomSite + SearchController.ENDPOINT + "?query=" + randomQuery)
                .build();
        CALLER.newCall(request).enqueue(new Callback() {
            @Override
            public void onFailure(Call call, IOException e) {
                LOG.error(e.getMessage());
            }

            @Override
            public void onResponse(Call call, Response response) throws IOException {
                assertEquals(HttpStatus.OK.value(), response.code());
                final long queryResultCount = SEARCH_QUERIES.get(randomQuery);
                if (queryResultCount == 0) {
                    assertNotNull(response.body());
                } else {
                    final byte[] body = new byte[]{};
                    final int responseSize = response.body().byteStream().read(body);
                    if (0 < responseSize) {
                        final Hits result = MAPPER.readValue(body, Hits.class);
                        assertTrue(queryResultCount < result.getResults().size());
                    }
                }
                response.close();
            }
        });
    }

    @Benchmark
    public void autocomplete() {
        final int randomSiteIndex = PSEUDO_ENTROPY.nextInt(SITES.size());
        final UUID randomSite = SITES.get(randomSiteIndex);
        final int randomQueryIndex = PSEUDO_ENTROPY.nextInt(LoadTest.AUTOCOMPLETE_QUERIES.size());
        final String randomQuery = QUERY_LIST_AUTOCOMPLETE.get(randomQueryIndex);

        final Request request = new Request.Builder()
                .url(LOAD_TARGET + "/sites/" + randomSite + AutocompleteController.ENDPOINT + "?query=" + randomQuery)
                .build();
        CALLER.newCall(request).enqueue(new Callback() {
            @Override
            public void onFailure(Call call, IOException e) {
                LOG.error(e.getMessage());
            }

            @Override
            public void onResponse(Call call, Response response) throws IOException {
                assertEquals(HttpStatus.OK.value(), response.code());
                final long queryResultCount = AUTOCOMPLETE_QUERIES.get(randomQuery);
                final byte[] body = new byte[]{};
                final int responseSize = response.body().byteStream().read(body);
                if (0 < responseSize) {
                    final Autocomplete result = MAPPER.readValue(body, Autocomplete.class);
                    assertTrue(queryResultCount <= result.getResults().size());
                }
                response.close();
            }
        });
    }
}
