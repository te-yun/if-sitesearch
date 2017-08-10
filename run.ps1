#Param([string] $suffix_args)

try {
    # add "--debug-jvm" to attach debugger
    Write-Host "args: $args"
    ./gradlew bootRun --no-scan --parallel --no-rebuild --continuous --build-cache $args
} Finally {
    $hangingJavaProcessToStop = [regex]::match((jps), "(\d+)\ Application").Groups[1].Value
    Stop-Process -Id $hangingJavaProcessToStop
    Write-Host "Gracefully killed hanging process: $hangingJavaProcessToStop"
}