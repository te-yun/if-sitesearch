#!/usr/bin/env sh

execute() {
    SPRING_CONFIG_NAME=application,local ./gradlew clean test \
        --parallel \
        --no-scan \
        --no-rebuild \
        --info \
#        --continuous \
#        --build-cache \
#        -Ddebug \
#        --debug
}
execute
