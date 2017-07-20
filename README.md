[![Build Status](https://travis-ci.org/loxal/if-sitesearch.svg)](https://travis-ci.org/loxal/if-sitesearch)


if-sitesearch
=
Here you can find a *non-technical* business focused abstract about [Sitesearch](http://if-wiki:8090/pages/viewpage.action?pageId=14714226).

# About

* [Product roadmap](http://if-wiki:8090/pages/viewpage.action?pageId=14714226)
* [JIRA project](http://jira/projects/SITESEARCH)
* [PROD release](http://localhost:8001) / [DEV Release](http://localhost:8001)
* [SCM repository](http://ml-if-git/sitesearch/if-sitesearch)
    
# Pre-requisite / Configuration

Add a [configuration profile](https://docs.spring.io/spring-boot/docs/current/reference/html/boot-features-external-config.html#boot-features-external-config-profile-specific-properties) 
to the `config` folder inside this project.

# API Reference

    http://localhost:8001/swagger-ui.html

# Initialization

## Elasticsearch

    ./run-elasticsearch.sh

# Run 

    ./run.sh
    http://localhost:8001
    
# Test

    ./test.sh

`SPRING_CONFIG_NAME=application,local` environment property is required to add a specific configuration’s properties.    

# Benchmark / Performance Test

    ./gradlew clean jmh

# Release

    ./release.sh