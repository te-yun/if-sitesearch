#!/usr/bin/env powershell

$docker_image_name = "if-sitesearch"
$docker_tag = "latest"

docker ps
function isBlueUp() {
    $isBlueUp = docker ps | grep ${docker_image_name}-blue
    return -Not $([string]::IsNullOrEmpty($isBlueUp))
}

# TODO change mapped volumes to avoid collision with other running containers
if(isBlueUp){
    write-host blue is up and will be removed
    docker run -d --name ${docker_image_name}-green -p 3442:8001 --env SECURITY_USER_PASSWORD=$env:SECURITY_USER_PASSWORD --env BUILD_NUMBER=$env:BUILD_NUMBER --env SCM_HASH=$env:SCM_HASH  -v ~/srv/${DOCKER_IMAGE_NAME}:/data intrafind/${docker_image_name}:${docker_tag}
    docker rm -f ${docker_image_name}-blue
} else {
    write-host blue is down and will be removed
    docker run -d --name ${docker_image_name}-blue -p 4442:8001 --env SECURITY_USER_PASSWORD=$env:SECURITY_USER_PASSWORD --env BUILD_NUMBER=$env:BUILD_NUMBER --env SCM_HASH=$env:SCM_HASH  -v ~/srv/${DOCKER_IMAGE_NAME}:/data intrafind/${docker_image_name}:${docker_tag}
    docker rm -f ${docker_image_name}-green
}
