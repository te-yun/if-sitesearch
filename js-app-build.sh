#!/usr/bin/env sh

./gradlew :gadget:build :dashboard:build --parallel --continuous --build-cache $1
