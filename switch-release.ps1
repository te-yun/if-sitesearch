#!/usr/bin/env powershell

$docker_image_name = "if-sitesearch"
$docker_tag = "latest"

docker ps
function isBlueUp() {
    $isBlueUp = docker ps | grep ${docker_image_name}-blue
    return -Not $([string]::IsNullOrEmpty($isBlueUp))
}

if(isBlueUp){
    echo blue is up
    docker rm -f ${docker_image_name}-blue
    docker run -d --name ${docker_image_name}-green -p 3443:8001 --env SECURITY_USER_PASSWORD=$env:SECURITY_USER_PASSWORD --env BUILD_NUMBER=$env:BUILD_NUMBER --env SCM_HASH=$env:SCM_HASH  -v ~/srv/${DOCKER_IMAGE_NAME}:/data intrafind/${docker_image_name}:${docker_tag}
} else {
    echo blue is down
    docker rm -f ${docker_image_name}-green
    docker run -d --name ${docker_image_name}-blue -p 4443:8001 --env SECURITY_USER_PASSWORD=$env:SECURITY_USER_PASSWORD --env BUILD_NUMBER=$env:BUILD_NUMBER --env SCM_HASH=$env:SCM_HASH  -v ~/srv/${DOCKER_IMAGE_NAME}:/data intrafind/${docker_image_name}:${docker_tag}
}
