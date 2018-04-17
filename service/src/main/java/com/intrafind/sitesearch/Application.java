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

package com.intrafind.sitesearch;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationListener;
import org.springframework.context.ConfigurableApplicationContext;
import org.springframework.context.event.ContextClosedEvent;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

import java.net.URI;

@SpringBootApplication
//@RestController
@EnableSwagger2
public class Application {
    private final static Logger LOG = LoggerFactory.getLogger(Application.class);
    public static final URI IFINDER_CORE = URI.create("https://sitesearch:" + System.getenv("SERVICE_SECRET") + "@blue.sitesearch.cloud/hessian");

//    @RequestMapping(path = "/subscriptions", method = RequestMethod.POST)
//    ResponseEntity<Object> subscriptions(
//            @RequestParam(value = "code", required = false) String code,
//            @RequestParam(value = "access_token", required = false) String token,
//            @RequestParam(value = "client_id", required = false) String id,
//            @RequestParam(value = "client_secret", required = false) String secret,
//            @RequestParam(value = "state", required = false) String state,
//            @RequestParam(value = "redirect_uri", required = false) String redirect_uri,
//            @RequestBody(required = false) Object o
//    ) {
//
//        LOG.info("code: " + code);
//        LOG.info("token: " + token);
//        LOG.info("id: " + id);
//        LOG.info("secret: " + secret);
//        LOG.info("state: " + state);
//        LOG.info("redirect_uri: " + redirect_uri);
//        LOG.info("o: " + o);
//        return ResponseEntity
//                .status(HttpStatus.OK)
//                .body(o);
//    }
//
//
//
//    @RequestMapping(path = "/login/test", method = RequestMethod.POST)
//    ResponseEntity<Object> login(
//            @RequestParam(value = "code", required = false) String code,
//            @RequestParam(value = "access_token", required = false) String token,
//            @RequestParam(value = "client_id", required = false) String id,
//            @RequestParam(value = "client_secret", required = false) String secret,
//            @RequestParam(value = "state", required = false) String state,
//            @RequestParam(value = "redirect_uri", required = false) String redirect_uri,
//            @RequestBody(required = false) Object o
//    ) {
//
//        LOG.info("code: " + code);
//        LOG.info("token: " + token);
//        LOG.info("id: " + id);
//        LOG.info("secret: " + secret);
//        LOG.info("state: " + state);
//        LOG.info("redirect_uri: " + redirect_uri);
//        LOG.info("o: " + o);
//        return ResponseEntity
//                .status(HttpStatus.FORBIDDEN)
//                .body("Error Message");
//    }
//
//    @RequestMapping(path = "/login/test1", method = RequestMethod.GET)
//    ResponseEntity<Object> login1(
//            @RequestParam(value = "code", required = false) String code,
//            @RequestParam(value = "access_token", required = false) String token,
//            @RequestParam(value = "client_id", required = false) String id,
//            @RequestParam(value = "client_secret", required = false) String secret,
//            @RequestParam(value = "state", required = false) String state,
//            @RequestParam(value = "redirect_uri", required = false) String redirect_uri,
//            @RequestBody(required = false) Object o
//    ) {
//        LOG.info("code: " + code);
//        LOG.info("token: " + token);
//        LOG.info("id: " + id);
//        LOG.info("secret: " + secret);
//        LOG.info("state: " + state);
//        LOG.info("redirect_uri: " + redirect_uri);
//        LOG.info("o: " + o);
//        return ResponseEntity.ok(o);
//    }

    public static void main(final String... args) {
        SpringApplication.exit(SpringApplication.run(Application.class, args));

        final ConfigurableApplicationContext run = SpringApplication.run(Application.class, args);
        run.addApplicationListener((ApplicationListener<ContextClosedEvent>) event ->
                LOG.info(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Close Event triggered"));
    }
}
