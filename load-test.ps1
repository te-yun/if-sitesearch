#!/usr/bin/env pwsh

Set-StrictMode -Version Latest
$ErrorActionPreference = "Stop"
$PSDefaultParameterValues["*:ErrorAction"] = "Stop"

#./gradlew compileJmhJava classes testClasses jmhClasses jmh jmhReport $args
#./gradlew clean jmh $args
./gradlew clean runJMH $args
#./gradlew clean jmh jmhReport $args