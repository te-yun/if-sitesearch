#!/usr/bin/env powershell

# add "--debug-jvm" to attach debugger
#    $Env:SPRING_CONFIG_NAME = "application, local"
./gradlew test `
    --no-scan --parallel --no-rebuild `
    --build-cache --continuous --continue `
    $args
#./gradlew test --no-scan --parallel --no-rebuild --build-cache $args
