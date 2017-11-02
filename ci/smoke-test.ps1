#!/usr/bin/env pwsh

Set-StrictMode -Version Latest
$ErrorActionPreference = "Stop"
$PSDefaultParameterValues["*:ErrorAction"] = "Stop"

#    --no-scan --parallel --no-rebuild `
#    --build-cache --continue `
./gradlew clean test `
    --no-scan --parallel `
    --continue `
    --tests *Smoke* `
    --info `
    $args