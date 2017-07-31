Param([string] $suffix_args)

Function Main() {
    ./gradlew run --continuous --parallel --build-cache --no-rebuild --no-scan $suffix_args # add "--debug-jvm" to attach debugger
}
Main