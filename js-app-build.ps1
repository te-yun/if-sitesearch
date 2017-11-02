#!/usr/bin/env pwsh

Set-StrictMode -Version Latest
$ErrorActionPreference = "Stop"
$PSDefaultParameterValues["*:ErrorAction"] = "Stop"

./gradlew `
    :client:clean :client:build `
    :finder:build `
    --parallel --continuous `
    $args
#./gradlew :client:build  --continuous --parallel --build-cache --no-rebuild --no-scan --continue $args