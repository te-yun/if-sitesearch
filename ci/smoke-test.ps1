#!/usr/bin/env powershell

Set-StrictMode -Version Latest
$ErrorActionPreference = "Stop"
$PSDefaultParameterValues["*:ErrorAction"] = "Stop"

#./gradlew clean test `
./gradlew test `
    --no-scan --parallel --no-rebuild `
    --build-cache --continue `
    --tests *Smoke* `
    $args