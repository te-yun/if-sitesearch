#!/usr/bin/env sh

docker_network=main
docker_redirect_image=main-router
docker_tag=latest

docker network create $docker_network
cd main-router
sudo cp -r /etc/letsencrypt .
sudo docker build --pull --tag intrafind/${docker_redirect_image}:${docker_tag} .
sudo rm -rf letsencrypt
docker push docker-registry.sitesearch.cloud/intrafind/${docker_redirect_image}:${docker_tag}
#docker rm -f $docker_redirect_image
#docker run -d --name $docker_redirect_image \
#    -p 80:80 \
#    -p 443:443 \
#    --restart unless-stopped \
#    --network $docker_network \
#    intrafind/${docker_redirect_image}:${docker_tag}

#docker rm -f docker-registry
#docker run -d --name docker-registry \
#    -v /var/lib/registry1:/var/lib/registry \
#    --restart unless-stopped \
#    --network $docker_network \
#    registry:2

