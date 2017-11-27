#!/usr/bin/env pwsh

Set-StrictMode -Version Latest
$ErrorActionPreference = "Stop"
$PSDefaultParameterValues["*:ErrorAction"] = "Stop"

# add "--debug-jvm" to attach debugger
#    $Env:SPRING_CONFIG_NAME = "application, local"
./gradlew :service:test `
    --no-scan --parallel --no-rebuild `
    --build-cache --continuous --continue `
    $args
#./gradlew test --no-scan --parallel --no-rebuild --build-cache $args
