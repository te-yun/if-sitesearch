try {
    # add "--debug-jvm" to attach debugger
    Write-Host "args: $args"
#    $Env:SPRING_CONFIG_NAME = "application"
#    Write-Host "SPRING_CONFIG_NAME $Env:SPRING_CONFIG_NAME"
    ./gradlew bootRun --no-scan --parallel --no-rebuild --continuous --build-cache $args --continue
} Finally {
    $hangingJavaProcessToStop = [regex]::match((jps), "(\d+)\ Application").Groups[1].Value
    Stop-Process -Id $hangingJavaProcessToStop
    Write-Host "Gracefully killed hanging process: $hangingJavaProcessToStop"
}