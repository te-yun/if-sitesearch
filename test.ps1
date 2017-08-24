#!/usr/bin/env powershell

# add "--debug-jvm" to attach debugger
Write-Host "args: $args"
#    ./gradlew test --no-scan --parallel --no-rebuild --build-cache --continuous --continue $args
./gradlew test --no-scan --parallel --no-rebuild --build-cache $args
