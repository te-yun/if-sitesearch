/*
 * Copyright 2017 IntraFind Software AG. All rights reserved.
 */

package de.intrafind.sitesearch;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.data.elasticsearch.ElasticsearchDataAutoConfiguration;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.elasticsearch.repository.config.EnableElasticsearchRepositories;
import org.springframework.web.bind.annotation.RestController;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

@SpringBootApplication
@RestController
@EnableSwagger2
public class Application {
    private final static Logger LOG = LoggerFactory.getLogger(Application.class);

    public static void main(final String... args) {
        SpringApplication.run(Application.class, args);
    }

    @EnableElasticsearchRepositories
    @Configuration
    static class ConfigurationElasticsearchearch extends ElasticsearchDataAutoConfiguration {
//        public ConfigurationElasticsearch(ElasticsearchProperties properties) {
////            super(properties);
//            System.out.println(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> properties.getClusterName() = " + properties.getClusterName());
//            System.out.println("properties.getClusterNodes() = " + properties.getClusterNodes());
//            System.out.println("properties.getProperties().size() = " + properties.getProperties().size());
//            properties.getProperties().forEach((s, s2) ->{
//                System.out.println("s = " + s);
//                System.out.println("s2 = " + s2);
//            });
//        }

//        @Bean
//        public ElasticsearchOperations elasticsearchTemplate() {
//            return new ElasticsearchTemplate(nodeBuilder().local(true).node().client());
//        }
    }
}
