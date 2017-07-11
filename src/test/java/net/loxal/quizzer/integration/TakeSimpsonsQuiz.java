/*
 * Copyright 2017 IntraFind Software AG. All rights reserved.
 */

package net.loxal.quizzer.integration;

import net.loxal.quizzer.CustomerTests;
import net.loxal.quizzer.controller.VoteController;
import net.loxal.quizzer.dto.Customer;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.Arrays;
import java.util.Collections;
import java.util.List;
import java.util.UUID;

import static net.loxal.quizzer.init.InitSimpsonsQuiz.SIMPSON_QUIZ_PREFIX;
import static org.assertj.core.api.Assertions.assertThat;

@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT, classes = CustomerTests.Config.class)
public class TakeSimpsonsQuiz {
    public static final String TEST_USER_NAME = "Test User Name " + UUID.randomUUID();
    @Autowired
    private TestRestTemplate testRestTemplate;

    @Test
    public void takeSimpsonsQuizAllCorrect() throws Exception {
        final String session = UUID.randomUUID().toString();

        Customer customer0 = new Customer(
                UUID.randomUUID().toString(),
                session,
                SIMPSON_QUIZ_PREFIX + "0",
                Collections.singletonList(0),
                TEST_USER_NAME
        );

        Customer customer1 = new Customer(
                UUID.randomUUID().toString(),
                session,
                SIMPSON_QUIZ_PREFIX + "1",
                Collections.singletonList(1),
                TEST_USER_NAME
        );

        Customer customer2 = new Customer(
                UUID.randomUUID().toString(),
                session,
                SIMPSON_QUIZ_PREFIX + "2",
                Collections.singletonList(0),
                TEST_USER_NAME
        );
        Customer customer3 = new Customer(
                UUID.randomUUID().toString(),
                session,
                SIMPSON_QUIZ_PREFIX + "3",
                Collections.singletonList(0),
                TEST_USER_NAME
        );
        Customer customer4 = new Customer(
                UUID.randomUUID().toString(),
                session,
                SIMPSON_QUIZ_PREFIX + "4",
                Collections.singletonList(1),
                TEST_USER_NAME
        );
        Customer customer5 = new Customer(
                UUID.randomUUID().toString(),
                session,
                SIMPSON_QUIZ_PREFIX + "5",
                Collections.singletonList(2),
                TEST_USER_NAME
        );

        Customer customer6 = new Customer(
                UUID.randomUUID().toString(),
                session,
                SIMPSON_QUIZ_PREFIX + "6",
                Collections.singletonList(2),
                TEST_USER_NAME
        );
        Customer customer7 = new Customer(
                UUID.randomUUID().toString(),
                session,
                SIMPSON_QUIZ_PREFIX + "7",
                Collections.singletonList(0),
                TEST_USER_NAME
        );
        Customer customer8 = new Customer(
                UUID.randomUUID().toString(),
                session,
                SIMPSON_QUIZ_PREFIX + "8",
                Collections.singletonList(2),
                TEST_USER_NAME
        );
        Customer customer9 = new Customer(
                UUID.randomUUID().toString(),
                session,
                SIMPSON_QUIZ_PREFIX + "9",
                Collections.singletonList(0),
                TEST_USER_NAME
        );

        final List<Customer> customers = Arrays.asList(
                customer0, customer1, customer2,
                customer3, customer4, customer5,
                customer6, customer7, customer8, customer9
        );

        validateAllVotesAsCorrect(customers);
    }

    private void validateAllVotesAsCorrect(List<Customer> customers) {
        customers.forEach(vote -> {
            ResponseEntity<Customer> response = this.testRestTemplate.postForEntity(VoteController.ENDPOINT, vote, Customer.class);
            assertThat(response.getStatusCode()).isEqualTo(HttpStatus.CREATED);
            final Customer voted = response.getBody();
            assertThat(voted).isNotNull();
            assertThat(voted.getCorrect()).isEqualTo(true);
        });
    }

    @Test
    public void takeSimpsonsQuizSomeIncorrect() throws Exception {
        final String session = UUID.randomUUID().toString();

        Customer customer0 = new Customer(
                UUID.randomUUID().toString(),
                session,
                SIMPSON_QUIZ_PREFIX + "0",
                Collections.singletonList(0),
                TEST_USER_NAME
        );

        Customer customer1Incorrect = new Customer(
                UUID.randomUUID().toString(),
                session,
                SIMPSON_QUIZ_PREFIX + "1",
                Collections.singletonList(2),
                TEST_USER_NAME
        );

        Customer customer2 = new Customer(
                UUID.randomUUID().toString(),
                session,
                SIMPSON_QUIZ_PREFIX + "2",
                Collections.singletonList(0),
                TEST_USER_NAME
        );
        Customer customer3Incorrect = new Customer(
                UUID.randomUUID().toString(),
                session,
                SIMPSON_QUIZ_PREFIX + "3",
                Collections.singletonList(1),
                TEST_USER_NAME
        );
        Customer customer4 = new Customer(
                UUID.randomUUID().toString(),
                session,
                SIMPSON_QUIZ_PREFIX + "4",
                Collections.singletonList(1),
                TEST_USER_NAME
        );
        Customer customer5 = new Customer(
                UUID.randomUUID().toString(),
                session,
                SIMPSON_QUIZ_PREFIX + "5",
                Collections.singletonList(2),
                TEST_USER_NAME
        );

        Customer customer6 = new Customer(
                UUID.randomUUID().toString(),
                session,
                SIMPSON_QUIZ_PREFIX + "6",
                Collections.singletonList(2),
                TEST_USER_NAME
        );
        Customer customer7 = new Customer(
                UUID.randomUUID().toString(),
                session,
                SIMPSON_QUIZ_PREFIX + "7",
                Collections.singletonList(0),
                TEST_USER_NAME
        );
        Customer customer8 = new Customer(
                UUID.randomUUID().toString(),
                session,
                SIMPSON_QUIZ_PREFIX + "8",
                Collections.singletonList(2),
                TEST_USER_NAME
        );
        Customer customer9Incorrect = new Customer(
                UUID.randomUUID().toString(),
                session,
                SIMPSON_QUIZ_PREFIX + "9",
                Arrays.asList(0, 1),
                TEST_USER_NAME
        );

        final List<Customer> customers = Arrays.asList(
                customer0, customer1Incorrect, customer2,
                customer3Incorrect, customer4, customer5,
                customer6, customer7, customer8, customer9Incorrect
        );

        validateSomeVotesAsIncorrect(customers);
    }

    private void validateSomeVotesAsIncorrect(List<Customer> customers) {
        customers.forEach(vote -> {
            ResponseEntity<Customer> response = this.testRestTemplate.postForEntity(VoteController.ENDPOINT, vote, Customer.class);
            assertThat(response.getStatusCode()).isEqualTo(HttpStatus.CREATED);
            final Customer voted = response.getBody();
            assertThat(voted).isNotNull();
            if (voted.getPoll().endsWith("1") || voted.getPoll().endsWith("3") || voted.getPoll().endsWith("9"))
                assertThat(voted.getCorrect()).isEqualTo(false);
            else
                assertThat(voted.getCorrect()).isEqualTo(true);
        });
    }

}


