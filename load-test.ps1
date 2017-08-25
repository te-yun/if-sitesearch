Write-Host "args: $args"

#./gradlew compileJmhJava classes testClasses jmhClasses jmh jmhReport $args
./gradlew clean jmh jmhReport $args