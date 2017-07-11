/*
 * Copyright 2017 IntraFind Software AG. All rights reserved.
 */

package net.loxal.quizzer.integration;

import net.loxal.quizzer.CustomerTests;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.UUID;

@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT, classes = CustomerTests.Config.class)
public class TakeSimpsonsQuiz {
    public static final String TEST_USER_NAME = "Test User Name " + UUID.randomUUID();
    @Autowired
    private TestRestTemplate testRestTemplate;

}


