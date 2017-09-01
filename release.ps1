#!/usr/bin/env powershell

$Env:SPRING_CONFIG_NAME = "application, prod"
#./gradlew clean build --info -x test
./gradlew build --no-rebuild --build-cache --info -x test

$DOCKER_IMAGE_NAME = (Get-ChildItem  build/libs/*.jar).BaseName
$DOCKER_TAG = "latest"

docker build --tag intrafind/${DOCKER_IMAGE_NAME}:${DOCKER_TAG} .
docker rm -f ${DOCKER_IMAGE_NAME}
docker run -d --name ${DOCKER_IMAGE_NAME} -p 443:8001 --env SECURITY_USER_PASSWORD=$env:SECURITY_USER_PASSWORD --env BUILD_NUMBER=$env:BUILD_NUMBER --env SCM_HASH=$env:SCM_HASH  -v ~/srv/${DOCKER_IMAGE_NAME}:/home/svc_usr/data intrafind/${DOCKER_IMAGE_NAME}:${DOCKER_TAG}

# Redirect HTTP to HTTPS traffic
$httpsRedirect = "http-to-https-redirect"
cd $httpsRedirect
docker build --tag intrafind/${httpsRedirect}:latest .
docker rm -f $httpsRedirect
docker run -d --name $httpsRedirect -p 80:80 intrafind/${httpsRedirect}:latest

cd ..
./switch-release.ps1

$danglingImages = $(docker images -f "dangling=true" -q)
if ([string]::IsNullOrEmpty($danglingImages)){
    "There are no dangling Docker images"
} else {
    docker rmi -f $danglingImages # cleanup, GC for dangling images
}
