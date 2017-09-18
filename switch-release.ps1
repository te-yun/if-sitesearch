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
    $green = "${docker_image_name}-green"
    docker rm -f $green
    docker run -d --name $green -p 3442:8001 --env SECURITY_USER_PASSWORD=$env:SECURITY_USER_PASSWORD --env BUILD_NUMBER=$env:BUILD_NUMBER --env SCM_HASH=$env:SCM_HASH  -v ~/srv/${geen}:/data intrafind/${docker_image_name}:${docker_tag}
    docker rm -f ${docker_image_name}-blue
} else {
    write-host blue is down and will be removed
    $blue = "${docker_image_name}-blue"
    docker rm -f $blue
    docker run -d --name $blue -p 4442:8001 --env SECURITY_USER_PASSWORD=$env:SECURITY_USER_PASSWORD --env BUILD_NUMBER=$env:BUILD_NUMBER --env SCM_HASH=$env:SCM_HASH  -v ~/srv/${blue}:/data intrafind/${docker_image_name}:${docker_tag}
    docker rm -f ${docker_image_name}-green
}
