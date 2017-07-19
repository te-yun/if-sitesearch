#!/usr/bin/env bash

standalone_start() {
    SPRING_CONFIG_NAME=local,application ./gradlew clean bootRun \
        --continuous \
        --parallel \
#        --build-cache \
#        --no-rebuild \
#        --no-scan \
#        -Ddebug \
#        --debug
}
standalone_start
