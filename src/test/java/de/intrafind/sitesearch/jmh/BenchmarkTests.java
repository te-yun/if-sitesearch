/*
 * Copyright 2017 IntraFind Software AG. All rights reserved.
 */

package de.intrafind.sitesearch.jmh;

import org.openjdk.jmh.annotations.Benchmark;
import org.openjdk.jmh.annotations.BenchmarkMode;
import org.openjdk.jmh.annotations.Mode;
import org.openjdk.jmh.annotations.Threads;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class BenchmarkTests {
    private final static Logger LOG = LoggerFactory.getLogger(BenchmarkTests.class);

    @BenchmarkMode(Mode.SingleShotTime)
    @Threads(2)
    @Benchmark
    public void benchmark() throws Exception {
    }
}
