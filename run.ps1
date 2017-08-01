Param([string] $suffix_args)

# add "--debug-jvm" to attach debugger
Function Main() {
    ./gradlew bootRun --no-scan --parallel --no-rebuild --continuous --build-cache $suffix_args
}
Main