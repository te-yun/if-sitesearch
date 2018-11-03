#!/usr/bin/env sh

docker_network=main
docker_redirect_image=main-router
docker_tag=latest

docker rm -f $docker_redirect_image
#docker rmi -f f4e9c1e52aa6
docker run -d --name $docker_redirect_image \
    -p 80:80 \
    -p 443:443 \
    --network $docker_network \
    docker-registry.sitesearch.cloud/intrafind/${docker_redirect_image}:${docker_tag}

docker rm -f docker-registry
docker run -d --name docker-registry \
    -v /srv/docker-registry/_data:/var/lib/registry \
    --network $docker_network \
    registry:2

