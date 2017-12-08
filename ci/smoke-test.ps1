#!/usr/bin/env pwsh

Set-StrictMode -Version Latest
$ErrorActionPreference = "Stop"
$PSDefaultParameterValues["*:ErrorAction"] = "Stop"

#    --no-scan --parallel `
#    --build-cache --continue `
./gradlew clean :service:test `
    --no-scan --parallel `
    --continue `
    --tests *Smoke* `
    --info `
    $args