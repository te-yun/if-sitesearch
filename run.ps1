Function Main {
#    SPRING_CONFIG_NAME=local,application \
        ./gradlew clean bootRun \
            --continuous \
            --parallel \
            --build-cache \
            --no-rebuild \
            --no-scan \
            --debug-jvm
}
main
