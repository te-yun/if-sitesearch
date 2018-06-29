#!/usr/bin/env sh

#    --no-scan --parallel \
#    --build-cache --continue \
#    --continue \
./gradlew :service:test \
    --no-scan --parallel \
    --tests *Smoke* \
    --info \
    $1