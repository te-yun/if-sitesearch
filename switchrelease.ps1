$docker_image_name = "if-sitesearch"
$docker_tag = "latest"

docker run -d --name ${docker_image_name}-blue -p 4443:8001 --env SECURITY_USER_PASSWORD=$env:SECURITY_USER_PASSWORD -v ~/srv/${docker_image_name}:/data intrafind/${docker_image_name}:${docker_tag}
docker run -d --name ${docker_image_name}-green -p 3443:8001 --env SECURITY_USER_PASSWORD=$env:SECURITY_USER_PASSWORD -v ~/srv/${docker_image_name}:/data intrafind/${docker_image_name}:${docker_tag}

