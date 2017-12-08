#!/usr/bin/env sh

#./gradlew compileJmhJava classes testClasses jmhClasses jmh jmhReport $args
#./gradlew clean jmh $args
./gradlew clean runJMH $1
#./gradlew clean jmh jmhReport $args