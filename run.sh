#!/usr/bin/env sh

main() {
#    SPRING_CONFIG_NAME=local,application \
        ./gradlew clean bootRun \
            --continuous \
            --parallel \
            --build-cache \
            --no-rebuild \
            --no-scan \
#            --debug-jvm
}
main
