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

package com.intrafind.sitesearch;

import com.intrafind.sitesearch.controller.SearchController;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.ExitCodeGenerator;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationListener;
import org.springframework.context.ConfigurableApplicationContext;
import org.springframework.context.annotation.Bean;
import org.springframework.context.event.ContextClosedEvent;
import org.springframework.web.bind.annotation.RestController;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

import java.net.URI;

@SpringBootApplication
@RestController
@EnableSwagger2
public class Application {
    private final static Logger LOG = LoggerFactory.getLogger(Application.class);
    public static final URI IFINDER_CORE = URI.create("http://" + System.getenv("SECURITY_USER_PASSWORD") + ":" + System.getenv("SECURITY_USER_PASSWORD") + "@sitesearch.cloud:9605/hessian");

    @Bean
    public ExitCodeGenerator exitCodeGenerator() {
        return () -> 42;
    }

    public static void main(final String... args) {
        SpringApplication.exit(SpringApplication.run(Application.class, args));

        final ConfigurableApplicationContext run = SpringApplication.run(Application.class, args);
        run.addApplicationListener(new ApplicationListener<ContextClosedEvent>() {
            @Override
            public void onApplicationEvent(ContextClosedEvent event) {
                LOG.info(">>>>>>>>>>>>>>>>>>>>>>> Close Event triggered");
                SearchController.ACID_PERSISTENCE.close();
            }
        });
    }
}
