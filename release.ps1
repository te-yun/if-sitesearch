#!/usr/bin/env pwsh

Set-StrictMode -Version Latest
$ErrorActionPreference = "Stop"
$PSDefaultParameterValues["*:ErrorAction"] = "Stop"

$docker_network = "sitesearch"

$Env:SPRING_CONFIG_NAME = "application, prod"
#./gradlew clean build --info -x test
./gradlew build --no-rebuild --build-cache --info -x test

#$DOCKER_IMAGE_NAME = (Get-ChildItem  service/build/libs/*.jar).BaseName
$DOCKER_IMAGE_NAME = "if-sitesearch"
$DOCKER_TAG = "latest"

mkdir ~/srv/${DOCKER_IMAGE_NAME}
sudo chown -R 1000:1000 ~/srv/${DOCKER_IMAGE_NAME} # make it a svc_usr' directory

# TODO enable b/g deployment, or at least, reduce probability of failure 
cd service
docker build --tag intrafind/${DOCKER_IMAGE_NAME}:${DOCKER_TAG} .
docker rm -f ${DOCKER_IMAGE_NAME}
docker run -d --name ${DOCKER_IMAGE_NAME} `
    -p 2443:8001 `
    --env SECURITY_USER_PASSWORD=$env:SECURITY_USER_PASSWORD `
    --env BUILD_NUMBER=$env:BUILD_NUMBER `
    --env SCM_HASH=$env:SCM_HASH `
    --env SECURITY_OAUTH2_CLIENT_CLIENT_SECRET=$env:SECURITY_OAUTH2_CLIENT_CLIENT_SECRET `
    -v ~/srv/${DOCKER_IMAGE_NAME}:/home/svc_usr/data `
    --network $docker_network `
    intrafind/${DOCKER_IMAGE_NAME}:${DOCKER_TAG}
cd ..

#function setupRedirectRouterContainer {
#    $docker_network = "sitesearch"
#    $docker_redirect_image = "router"
#    $docker_redirect_image_tag = "latest"
#    cd docker-$docker_redirect_image
#    docker build --tag intrafind/${docker_redirect_image}:$docker_redirect_image_tag .
#    docker rm -f $docker_redirect_image
#    mkdir ~/srv/${docker_redirect_image}
##        -v ~/srv/${docker_redirect_image}:/etc/nginx `
#    docker run -d --name $docker_redirect_image `
#        -p 80:80 -p 443:443 `
#        -v /etc/letsencrypt:/etc/letsencrypt `
#        --network $docker_network `
#        intrafind/${docker_redirect_image}:$docker_redirect_image_tag
#
#    cd ..
#}
#setupRedirectRouterContainer

#./switch-release.ps1

function cleanupDocker {
    $danglingImages = $(docker images -f "dangling=true" -q)
    if ([string]::IsNullOrEmpty($danglingImages)){
        "There are no dangling Docker images"
    } else {
        docker rmi -f $danglingImages # cleanup, GC for dangling images
    }
}
cleanupDocker
