/*
 * Copyright 2018 IntraFind Software AG. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/*
 * Copyright 2018 IntraFind Software AG. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// Migrate to Kotlin https://guides.gradle.org/migrating-build-logic-from-groovy-to-kotlin/
buildscript {
    //    ext {
//        val spring_boot_version = "2.0.7.RELEASE"
//        val swagger_version = "2.9.2"
//    }
}

plugins {
    java
    idea
    id("me.champeau.gradle.jmh") version "0.4.7"
    id("org.springframework.boot") version "2.0.7.RELEASE"
    id("io.spring.dependency-management") version "1.0.6.RELEASE"
    id("io.morethan.jmhreport") version "0.9.0"
}

java {
    sourceCompatibility = JavaVersion.VERSION_11
    targetCompatibility = JavaVersion.VERSION_11
}

repositories {
    jcenter()
//    maven { url "https://repo.spring.io/snapshot" }
}

dependencies {
    val spring_boot_version = "2.0.7.RELEASE"
    val swagger_version = "2.9.2"

//    configurations.compile.exclude(module = "spring-boot-starter-tomcat")
//    configurations.compile.exclude(group = "org.springframework.boot", module = "undertow-websockets-jsr")

    compile("org.apache.tika:tika:1.18")
    runtimeOnly("org.apache.tika:tika-parsers:1.18")
    compile("org.springframework.security.oauth.boot:spring-security-oauth2-autoconfigure:$spring_boot_version")
    compile("org.springframework.boot:spring-boot-starter-security:$spring_boot_version")

    compile("edu.uci.ics:crawler4j:4.4.0")
    compile("com.github.crawler-commons:crawler-commons:0.10")

    compile("com.rometools:rome:1.12.0")

    compile("com.caucho:hessian:4.0.51")

    compile("org.springframework.boot:spring-boot-starter-webflux:$spring_boot_version")
    compile("org.springframework.boot:spring-boot-starter-undertow:$spring_boot_version")

    compile("io.springfox:springfox-swagger2:$swagger_version")
    compile("io.springfox:springfox-swagger-ui:$swagger_version")

    testAnnotationProcessor("org.openjdk.jmh:jmh-generator-annprocess:1.21")
    testCompile("org.openjdk.jmh:jmh-core:1.21")
    testCompile("org.springframework.boot:spring-boot-starter-test:$spring_boot_version")

    testRuntimeOnly("org.springframework.boot:spring-boot-devtools:$spring_boot_version")

    compile("com.squareup.okhttp3:okhttp:3.12.0")

    compile("org.mnode.mstor:mstor:1.0.0")
    compile("com.google.oauth-client:google-oauth-client-jetty:1.26.0")
    compile("com.google.apis:google-api-services-gmail:v1-rev96-1.25.0")

    compile("org.jsoup:jsoup:1.11.3")
}

//test {
//    testLogging {
//        exceptionFormat = "full"
//    }
//}

jmh {
    include = listOf("com.intrafind.sitesearch.jmh.LoadTest")
    warmupIterations = 1
    warmupForks = 0
    fork = 0
    iterations = 1
    resultFormat = "JSON"
//    duplicateClassesStrategy = DuplicatesStrategy.WARN
}

//jmhReport {
//    jmhResultPath = "$buildDir/jmh-result.json"
//    jmhReportOutput = buildDir.toString()
//}
//tasks.named<JavaExec>("runJMH") {
//    main = "com.intrafind.sitesearch.jmh.LoadTest"
//    classpath = sourceSets["test"].runtimeClasspath
////    classpath = sourceSets.test.runtimeClasspath
////    sourceSets.main.get().allSource
//}
//tasks{
//    getByName("JavaExec").finalizedBy("jmhReport")
////    withType<JavaExec> {
////        finalizedBy(tasks.jmhReport)
////    }
//}

//tasks.withType(JavaCompile) {
//    options.fork = true
//    options.incremental = true
//}
