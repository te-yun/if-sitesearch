Param([string] $suffix_args)

# add "--debug-jvm" to attach debugger
Function Main {
    ./gradlew test --parallel --no-scan --no-rebuild --continuous --build-cache $suffix_args
}
Main
