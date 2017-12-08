#!/usr/bin/env pwsh

Set-StrictMode -Version Latest
$ErrorActionPreference = "Stop"
$PSDefaultParameterValues["*:ErrorAction"] = "Stop"

$docker_network = "sitesearch"

$Env:SPRING_CONFIG_NAME = "application, prod"
./gradlew build --build-cache --info -x test

#$docker_image_name = (Get-ChildItem  service/build/libs/*.jar).BaseName
$docker_image_name = "if-sitesearch"
$docker_tag = "latest"

#mkdir ~/srv/${docker_image_name}
#sudo chown -R 1000:1000 ~/srv/${docker_image_name} # make it a svc_usr' directory
#sudo chmod -R 744 ~/srv/${docker_image_name}

cd service
docker build --tag intrafind/${docker_image_name}:${docker_tag} .
docker rm -f ${docker_image_name}
#    -v ~/srv/${docker_image_name}:/home/svc_usr/data `
#    --log-opt syslog-address=tcp://main.sitesearch.cloud:9600 `
#    --log-driver=syslog `
#    --log-driver=journald `
#    --log-opt syslog-address=tcp://main.sitesearch.cloud:5044 `
#    -v ~/srv/${docker_image_name}:/data `
cd ..

function runService([Int] $service_port = 2443) {
    docker run -d --name ${docker_image_name} `
        -p ${service_port}:8001 `
        --log-driver=gelf `
        --log-opt gelf-address=udp://main.sitesearch.cloud:12201 `
        --env SECURITY_USER_PASSWORD=$env:SECURITY_USER_PASSWORD `
        --env BUILD_NUMBER=$env:BUILD_NUMBER `
        --env SCM_HASH=$env:SCM_HASH `
        --env SECURITY_OAUTH2_CLIENT_CLIENT_SECRET=$env:SECURITY_OAUTH2_CLIENT_CLIENT_SECRET `
        --network $docker_network `
        intrafind/${docker_image_name}:${docker_tag}
}
runService

function cleanupDocker {
#    docker volume prune -f
    $danglingImages = $(docker images -f "dangling=true" -q)
    if ([string]::IsNullOrEmpty($danglingImages)){
        "There are no dangling Docker images"
    } else {
        docker rmi -f $danglingImages # cleanup, GC for dangling images
    }
}
cleanupDocker
