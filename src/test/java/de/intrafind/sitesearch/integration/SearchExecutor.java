/*
 * Copyright 2017 IntraFind Software AG. All rights reserved.
 */

package de.intrafind.sitesearch.integration;

import de.intrafind.sitesearch.SearchTests;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.test.context.junit4.SpringRunner;

@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT, classes = SearchTests.Config.class)
public class SearchExecutor {
    @Autowired
    private TestRestTemplate testRestTemplate;

    @Test
    public void execute() throws Exception {
    }
}


