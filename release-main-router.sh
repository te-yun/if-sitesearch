#!/usr/bin/env sh

docker_network=main
docker_redirect_image=main-router
docker_tag=latest

docker network create $docker_network
cd main-router
sudo cp -r /etc/letsencrypt .
sudo docker build --no-cache --pull --tag docker-registry.sitesearch.cloud/intrafind/${docker_redirect_image}:${docker_tag} .
sudo rm -rf letsencrypt
docker push docker-registry.sitesearch.cloud/intrafind/${docker_redirect_image}:${docker_tag}


#docker rm -f $docker_redirect_image
#docker run -d --name $docker_redirect_image \
#    -p 80:80 \
#    -p 443:443 \
#    --network $docker_network \
#    docker-registry.sitesearch.cloud/intrafind/${docker_redirect_image}:${docker_tag}
#
#docker rm -f docker-registry
#docker run -d --name docker-registry \
#    -v /srv/registry1:/var/lib/registry \
#    --restart unless-stopped \
#    --network $docker_network \
#    registry:2

