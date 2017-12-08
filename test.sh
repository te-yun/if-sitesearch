#!/usr/bin/env bash

# add "--debug-jvm" to attach debugger
#    $Env:
SPRING_CONFIG_NAME="application, local"
echo $SPRING_CONFIG_NAME
echo "args: $1"
./gradlew :service:test \
    --no-scan --parallel --no-rebuild \
    --build-cache --continuous --continue \
    $1
#./gradlew test --no-scan --parallel --no-rebuild --build-cache $args
