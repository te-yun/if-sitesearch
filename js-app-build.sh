#!/usr/bin/env sh

./gradlew :gadget:build :dashboard:build --parallel --continuous --build-cache $1
#./gradlew :client:build  --continuous --parallel --build-cache --no-scan --continue $args