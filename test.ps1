# add "--debug-jvm" to attach debugger
Write-Host "suffix_args: $suffix_args"
Write-Host "args: $args"
#    ./gradlew test --no-scan --parallel --no-rebuild --continuous --build-cache $args
./gradlew test --no-scan --parallel --no-rebuild --build-cache $args
