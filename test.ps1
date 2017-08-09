#Param([string] $suffix_args)

# add "--debug-jvm" to attach debugger
#function main {
    Write-Host "suffix_args: $suffix_args"
    Write-Host "args: $args"
    ./gradlew test --no-scan --parallel --no-rebuild --build-cache $args
#    ./gradlew test --no-scan --parallel --no-rebuild --continuous --build-cache $args
#    ./gradlew test --no-scan --parallel --no-rebuild --build-cache --tests *SiteTest.importFeedAndUpdate $args
#}
#main
