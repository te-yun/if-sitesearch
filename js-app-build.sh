#!/usr/bin/env sh

./gradlew \
    :gadget:build \
    --parallel --continuous \
    $1
#./gradlew :client:build  --continuous --parallel --build-cache --no-scan --continue $args