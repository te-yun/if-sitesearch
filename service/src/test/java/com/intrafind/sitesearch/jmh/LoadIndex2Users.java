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

import com.intrafind.sitesearch.dto.SitePage;
import org.openjdk.jmh.annotations.BenchmarkMode;
import org.openjdk.jmh.annotations.Mode;
import org.openjdk.jmh.annotations.Scope;
import org.openjdk.jmh.annotations.State;
import org.openjdk.jmh.annotations.Threads;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.Arrays;
import java.util.UUID;

@Threads(2)
@BenchmarkMode(Mode.Throughput)
@State(Scope.Benchmark)
public class LoadIndex2Users {
    public static final UUID SEARCH_SITE_ID = UUID.fromString("a620f72b-b02c-4b57-8730-8edf72debb05");
    public static final UUID SEARCH_SITE_SECRET = UUID.fromString("ac2618a6-c48b-4702-892b-6450ad501b92");
    private final static Logger LOG = LoggerFactory.getLogger(LoadIndex2Users.class);

    private static String generateLoremIpsum() {
        final StringBuilder loremIpsumText = new StringBuilder();
        for (String word : LoadTest.LOREM_IPSUM) {
            final int wordIndex = LoadTest.PSEUDO_ENTROPY.nextInt(LoadTest.LOREM_IPSUM.length);
            loremIpsumText.append(LoadTest.LOREM_IPSUM[wordIndex]).append(" ");
        }
        return loremIpsumText.toString();
    }

    private SitePage buildPage(String loremIpsumText) {
        return new SitePage(
                loremIpsumText.substring(0, 42),
                loremIpsumText,
                "https://example.com/" + UUID.randomUUID(),
                Arrays.asList("Fruits", "vegetables")
        );
    }
}
