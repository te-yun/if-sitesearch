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

import com.google.common.base.Predicates;
import com.intrafind.sitesearch.controller.SearchController;
import io.undertow.UndertowOptions;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.ExitCodeGenerator;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.embedded.EmbeddedServletContainerFactory;
import org.springframework.boot.context.embedded.undertow.UndertowEmbeddedServletContainerFactory;
import org.springframework.context.ApplicationListener;
import org.springframework.context.ConfigurableApplicationContext;
import org.springframework.context.annotation.Bean;
import org.springframework.context.event.ContextClosedEvent;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;
import springfox.documentation.builders.PathSelectors;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

import java.net.URI;

@SpringBootApplication
@RestController
@EnableSwagger2
public class Application {
    private final static Logger LOG = LoggerFactory.getLogger(Application.class);
    public static final URI IFINDER_CORE = URI.create("http://" + System.getenv("SECURITY_USER_PASSWORD") + ":" + System.getenv("SECURITY_USER_PASSWORD") + "@sitesearch.cloud:9605/hessian");

//    @Bean
//    public WebMvcConfigurer corsConfigurer() {   // TODO check if this can be enabled in WebSecurityConfigurer class only
//        return new WebMvcConfigurerAdapter() {
//            @Override
//            public void addCorsMappings(CorsRegistry registry) {
//                registry.addMapping("/**");
//            }
//        };
//    }
//
//    @Bean
//    public EmbeddedServletContainerFactory servletContainer() {
//        UndertowEmbeddedServletContainerFactory factory = new UndertowEmbeddedServletContainerFactory();
//        factory.addBuilderCustomizers(builder -> builder.setServerOption(UndertowOptions.ENABLE_HTTP2, true));
//        return factory;
//    }
//
//    @Bean
//    public Docket hideApi() {
//        return new Docket(DocumentationType.SWAGGER_2)
//                .select()
//                .paths(Predicates.not(PathSelectors.regex("/error"))) // Exclude Spring error controllers
//                .paths(Predicates.not(PathSelectors.regex("/sites/rss"))) // Exclude Spring error controllers
//                .build();
//    }

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
