/*
 * Copyright 2017 IntraFind Software AG. All rights reserved.
 */

package net.loxal.quizzer;

import net.loxal.quizzer.controller.SearchController;
import net.loxal.quizzer.dto.Customer;
import org.junit.Before;
import org.junit.BeforeClass;
import org.junit.Ignore;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.context.TestConfiguration;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.boot.web.client.RestTemplateBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.Arrays;
import java.util.Collections;
import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;

@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT, classes = SearchTests.Config.class)
public class SearchTests {

    @Autowired
    private TestRestTemplate testRestTemplate;

    @BeforeClass
    public static void prepare() throws Exception {
    }

    @Before
    public void setUp() throws Exception {
    }

    @Test
    public void createCorrectVoteMultipleAnswers() throws Exception {
    }

    @Test
    public void createIncorrectVoteMultipleAnswers() throws Exception {
    }

    @Test
    public void createCorrectVoteSingleAnswer() throws Exception {
    }

    @Test
    public void createIncorrectVoteSingleAnswer() throws Exception {
    }

    @Test
    public void updateCorrectVoteMultipleAnswers() throws Exception {
    }

    @Test
    public void updateIncorrectVoteMultipleAnswers() throws Exception {
    }

    @Test
    public void updateCorrectVoteSingleAnswer() throws Exception {
    }

    @Test
    public void updateIncorrectVoteSingleAnswer() throws Exception {
    }

    @Test
    public void createUnreviewableVote() throws Exception {
    }

    @Test
    public void updateUnreviewableVote() throws Exception {
    }

    @Test
    public void delete() throws Exception {
    }

    private void validateFetched(final Customer expected) {
        ResponseEntity<Customer> retrieved = testRestTemplate.getForEntity(SearchController.ENDPOINT + "/" + expected.getId(), Customer.class);

        assertThat(retrieved.getStatusCode()).isEqualTo(HttpStatus.OK);
        assertThat(retrieved.getBody()).isNotNull();

        Customer actual = retrieved.getBody();
        assertThat(actual).isEqualToComparingFieldByField(expected);
        assertThat(actual).isExactlyInstanceOf(Customer.class);
    }

    private void createVote(Customer customer) {
        ResponseEntity<Customer> response = testRestTemplate.postForEntity(SearchController.ENDPOINT, customer, Customer.class);
        assertThat(response.getStatusCode()).isEqualTo(HttpStatus.CREATED);
        assertThat(response.getBody()).isNotNull();
    }

    @TestConfiguration
    public static class Config {
        @Value("${security.user.name}")
        private String username;

        @Value("${security.user.password}")
        private String password;

        @Bean
        public RestTemplateBuilder restTemplateBuilder() {
            return new RestTemplateBuilder().basicAuthorization(username, password);
        }
    }
}
