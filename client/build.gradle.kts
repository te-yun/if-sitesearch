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

import org.jetbrains.kotlin.gradle.tasks.Kotlin2JsCompile

plugins {
    id("kotlin2js") version "1.3.11"
}

repositories {
    jcenter()
}

val kotlin_version = "1.3.11"
dependencies {
    compile("org.jetbrains.kotlin:kotlin-stdlib-js:$kotlin_version")
    compile("org.jetbrains.kotlin:kotlin-test-js:$kotlin_version")
}

tasks {
    "compileKotlin2Js"(Kotlin2JsCompile::class) {
        kotlinOptions {
            metaInfo = true
            outputFile = "${buildDir}/classes/kotlin/main/${project.name}.js"
            sourceMap = true
            moduleKind = "umd"
            main = "call"
            suppressWarnings = false
            target = "v5"
            noStdlib = true
            friendModulesDisabled = false
            sourceMapEmbedSources = "always"
            typedArrays = false
        }
    }

    val unpackKotlinJsStdlib by registering {
        group = "build"
        doLast {
            val serviceBuildPath = "../service/build/resources/main/static/app"
            val artifactPath = "../service/src/main/resources/static/app"
            project.file("$artifactPath/$project.name").delete()
            project.file("$serviceBuildPath/$project.name").delete()

            copy {
                from(compileKotlin2Js.get().destinationDir)
                into("$artifactPath/$project.name")
            }

            copy {
                from(compileKotlin2Js.get().destinationDir)
                into("$serviceBuildPath/$project.name") // TODO create rather a symlink to above directory?
            }

            copy {
                from(sourceSets.main.get().output.resourcesDir)
                into("$artifactPath/$project.name/resources")
            }

            copy {
                from(sourceSets.main.get().output.resourcesDir)
                into("$serviceBuildPath/$project.name/resources") // TODO create rather a symlink to above directory?
            }

            configurations["compile"].files.forEach { file ->
                copy {
                    from(zipTree(file.absolutePath))
                    into("$artifactPath/runtime")
                }
            }
        }
    }
}
