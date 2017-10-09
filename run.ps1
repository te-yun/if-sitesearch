#!/usr/bin/env powershell

try {
    $Env:SPRING_CONFIG_NAME = "application, local"
    ./gradlew bootRun `
        $args #--continue --continuous --no-scan --parallel --no-rebuild --build-cache `
} Finally {
    $hangingJavaProcessToStop = [regex]::match((jps), "(\d+)\ Application").Groups[1].Value
    Stop-Process -Id $hangingJavaProcessToStop
    Write-Host "Gracefully killed hanging process: $hangingJavaProcessToStop"
}