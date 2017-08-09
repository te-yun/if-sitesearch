Param([string] $suffix_args)

# add "--debug-jvm" to attach debugger
Function Main {
    Write-Host "suffix_args: $suffix_args"
    ./gradlew test --no-scan --parallel --no-rebuild --continuous --build-cache $suffix_args
#    ./gradlew test --no-scan --parallel --no-rebuild --build-cache --tests *SiteTest.importFeedAndUpdate $suffix_args
}
Main
