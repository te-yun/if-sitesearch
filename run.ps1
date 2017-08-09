#Param([string] $suffix_args)

try {
    echo "suffix_args: $suffix_args"
    Write-Host "args: $args"
    
    # add "--debug-jvm" to attach debugger
    Function Main() {
        ./gradlew bootRun --no-scan --parallel --no-rebuild --continuous --build-cache $args
    }
    Main
} Finally {
    $hangingJavaProcessToStop = [regex]::match((jps), "(\d+)\ Application").Groups[1].Value
    Stop-Process -Id $hangingJavaProcessToStop
    Write-Host "Gracefully killed hanging process: $hangingJavaProcessToStop"
}