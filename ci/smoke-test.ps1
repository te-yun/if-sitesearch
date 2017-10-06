#!/usr/bin/env powershell

Set-StrictMode -Version Latest
$ErrorActionPreference = "Stop"
$PSDefaultParameterValues["*:ErrorAction"] = "Stop"

#./gradlew test `
./gradlew clean test `
    --no-scan --parallel --no-rebuild `
    --build-cache --continue `
    --tests *Smoke* `
    $args