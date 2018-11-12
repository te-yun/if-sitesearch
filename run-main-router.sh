#!/usr/bin/env sh

docker_network=main
docker_redirect_image=main-router
docker_tag=latest

chmod -R 777 /srv/maven-repository
docker pull docker-registry.sitesearch.cloud/intrafind/${docker_redirect_image}:${docker_tag}
docker rm -f $docker_redirect_image
docker run -d --name $docker_redirect_image \
    -p 80:80 \
    -p 443:443 \
    -v /srv/maven-repository:/srv/maven-repository \
    --network $docker_network \
    docker-registry.sitesearch.cloud/intrafind/${docker_redirect_image}:${docker_tag}

docker rm -f docker-registry
docker run -d --name docker-registry \
    -v /srv/docker-registry/_data:/var/lib/registry \
    --network $docker_network \
    registry:2

