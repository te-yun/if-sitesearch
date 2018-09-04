#!/usr/bin/env sh

#docker_network=default
#docker_redirect_image=al-router
tag=latest

#docker build --pull --tag intrafind/${docker_redirect_image}:${docker_tag} .
#docker rm -f $docker_redirect_image
#docker run -d --name $docker_redirect_image \
#    -p 80:80 \
#    -p 443:443 \
#    -v /etc/letsencrypt:/etc/letsencrypt \
#    --restart unless-stopped \
#    --network default \
#    intrafind/al-router:latest


docker login docker-registry.sitesearch.cloud --username sitesearch --password $PASSWORD
docker build --pull --tag docker-registry.sitesearch.cloud/intrafind/al-router:$tag .
docker push docker-registry.sitesearch.cloud/intrafind/al-router:$tag
