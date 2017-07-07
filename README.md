if-sitesearch
    sfdsfa test
=

# About

* [JIRA]()
* [PROD Release]() / [DEV Release]()
* [PROD Release]()
    
# Pre-requisite / Configuration

Add a [configuration profile](https://docs.spring.io/spring-boot/docs/current/reference/html/boot-features-external-config.html#boot-features-external-config-profile-specific-properties) 
to the `config` folder inside this project.

# API Reference

    http://localhost:8200/swagger-ui.html

# Initialization

## Elasticsearch

    docker rm -f couchbase
    docker run -d --name couchbase \
        -p 8091-8094:8091-8094 -p 11210:11210 \
        -v ~/srv/couchbase:/opt/couchbase/var/lib/couchbase \
        couchbase:community

    CREATE PRIMARY INDEX `#primary` ON `quizzer` 
    
# Run 

    ./run.sh
    open http://localhost:8200
    
# Test

    ./test.sh

`SPRING_CONFIG_NAME=application,local` environment property is required to add a specific configuration’s properties.    

# Benchmark / Performance Test

    ./gradlew clean jmh

# Release

    ./release.sh