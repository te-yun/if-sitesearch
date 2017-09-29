#!/usr/bin/env powershell

$docker_image_name = "if-sitesearch"
$docker_tag = "latest"

docker ps
function isBlueUp() {
#    $isBlueUp = docker ps | grep ${docker_image_name}-blue
#    return -Not $([string]::IsNullOrEmpty($isBlueUp))
    return $Env:SITESEARCH_VARIANT_RUNNING -eq "blue"
}

$data = "if-sitesearch-data"
mkdir ~/srv/$data
sudo chown -R 1000:1000 ~/srv/$data # make it a svc_usr' directory

# TODO change mapped volumes to avoid collision with other running containers
if(isBlueUp){
    write-host blue is up and will be removed
    $green = "${docker_image_name}-green"

#    mkdir ~/srv/$green
#    sudo chown -R 1000:1000 ~/srv/$green # make it a svc_usr' directory

    docker rm -f $green
    docker run -d --name $green `
        -p 3442:8001 `
        --env SECURITY_USER_PASSWORD=$env:SECURITY_USER_PASSWORD `
        --env BUILD_NUMBER=$env:BUILD_NUMBER `
        --env SCM_HASH=$env:SCM_HASH `
        -v ~/srv/${data}:/home/svc_usr/data `
        intrafind/${docker_image_name}:${docker_tag}
#    docker rm -f ${docker_image_name}-blue
    $Env:SITESEARCH_VARIANT_RUNNING = "green"

} else {
    write-host blue is down and will be removed
    $blue = "${docker_image_name}-blue"

#    mkdir ~/srv/$blue
#    sudo chown -R 1000:1000 ~/srv/$blue # make it a svc_usr' directory

    docker rm -f $blue
    docker run -d --name $blue `
        -p 4442:8001 `
        --env SECURITY_USER_PASSWORD=$env:SECURITY_USER_PASSWORD `
        --env BUILD_NUMBER=$env:BUILD_NUMBER `
        --env SCM_HASH=$env:SCM_HASH `
        -v ~/srv/${data}:/home/svc_usr/data `
        intrafind/${docker_image_name}:${docker_tag}
#    docker rm -f ${docker_image_name}-green
    $Env:SITESEARCH_VARIANT_RUNNING = "blue"
}
