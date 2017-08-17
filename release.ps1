#!/usr/bin/env powershell

$Env:SPRING_CONFIG_NAME = "application,prod"
./gradlew clean build --info

$DOCKER_IMAGE_NAME = (Get-ChildItem  build/libs/*.jar).BaseName
$DOCKER_TAG = "latest"

docker build --tag intrafind/${DOCKER_IMAGE_NAME}:${DOCKER_TAG} .
docker rm -f ${DOCKER_IMAGE_NAME}
docker run -d --name ${DOCKER_IMAGE_NAME} -p 443:8001 --env SECURITY_USER_PASSWORD=$env:SECURITY_USER_PASSWORD -v ~/srv/${DOCKER_IMAGE_NAME}:/data intrafind/${DOCKER_IMAGE_NAME}:${DOCKER_TAG}

$danglingImages = $(docker images -f "dangling=true" -q)

if ([string]::IsNullOrEmpty($danglingImages)){
    "There are no dangling Docker images"
} else {
    docker rmi -f $danglingImages # cleanup, GC for dangling images
}

# Redirect HTTP to HTTPS traffic
cd docker-nginx-https-redirect
docker build --tag intrafind/redirect-https:latest .
docker rm -f redirect-https
docker run -d --name redirect-https -p 80:80 intrafind/redirect-https:latest

powershell switch-release.ps1