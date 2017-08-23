$docker_image_name = "if-sitesearch"
$docker_tag = "latest"

docker ps
function isBlueUp() {
    $isBlueUp = docker ps | grep ${docker_image_name}-blue
    write-host $isBlueUp
    write-host [string]::IsNullOrEmpty($isBlueUp)
retturn true
}

isBlueUp()
write-host isBlueUp

#if ([string]::IsNullOrEmpty($danglingImages)){
#    "There are no dangling Docker images"
#} else {
#    docker rmi -f $danglingImages # cleanup, GC for dangling images
#}

docker run -d --name ${docker_image_name}-blue -p 4443:8001 --env SECURITY_USER_PASSWORD=$env:SECURITY_USER_PASSWORD --env BUILD_NUMBER=$env:BUILD_NUMBER --env SCM_HASH=$env:SCM_HASH  -v ~/srv/${DOCKER_IMAGE_NAME}:/data intrafind/${docker_image_name}:${docker_tag}
docker run -d --name ${docker_image_name}-green -p 3443:8001 --env SECURITY_USER_PASSWORD=$env:SECURITY_USER_PASSWORD --env BUILD_NUMBER=$env:BUILD_NUMBER --env SCM_HASH=$env:SCM_HASH  -v ~/srv/${DOCKER_IMAGE_NAME}:/data intrafind/${docker_image_name}:${docker_tag}

