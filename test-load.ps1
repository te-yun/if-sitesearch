Param([string] $suffix_args)

Function Main() {
    ./gradlew jmh $suffix_args
}
Main