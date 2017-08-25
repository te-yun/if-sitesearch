Write-Host "args: $args"

#./gradlew compileJmhJava classes testClasses jmhClasses jmh $args
./gradlew clean jmh $args