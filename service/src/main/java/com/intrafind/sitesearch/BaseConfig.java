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
import io.undertow.UndertowOptions;
import org.springframework.boot.context.embedded.EmbeddedServletContainerFactory;
import org.springframework.boot.context.embedded.undertow.UndertowEmbeddedServletContainerFactory;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;
import springfox.documentation.builders.PathSelectors;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;

@Configuration
public class BaseConfig {
    @Bean
    public WebMvcConfigurer corsConfigurer() {   // TODO check if this can be enabled in WebSecurityConfigurer class only
        return new WebMvcConfigurerAdapter() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                registry.addMapping("/**");
                registry.addMapping("/v2/api-docs");
            }
        };
    }

    @Bean
    public EmbeddedServletContainerFactory servletContainer() {
        UndertowEmbeddedServletContainerFactory factory = new UndertowEmbeddedServletContainerFactory();
        factory.addBuilderCustomizers(builder -> builder.setServerOption(UndertowOptions.ENABLE_HTTP2, true));
        return factory;
    }

    @Bean
    public Docket hideApi() {
        return new Docket(DocumentationType.SWAGGER_2)
                .select()
                .paths(Predicates.not(PathSelectors.regex("/error")))
                .paths(Predicates.not(PathSelectors.regex("/login.*")))
                .paths(Predicates.not(PathSelectors.regex("/subscriptions")))
                .paths(Predicates.not(PathSelectors.regex("/assignments.*")))
                .paths(Predicates.not(PathSelectors.regex("/authentication-providers.*")))
                .paths(Predicates.not(PathSelectors.regex("/user")))
                .paths(Predicates.not(PathSelectors.regex("/stats")))
                .build();
    }
}
