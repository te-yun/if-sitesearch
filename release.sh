#!/usr/bin/env sh

docker_network=sitesearch

SPRING_CONFIG_NAME="application, prod"
./gradlew build --build-cache --info -x test

docker_tag=latest
docker_image_name=docker-registry.sitesearch.cloud/intrafind/if-sitesearch:${docker_tag}

cd service
#docker build --tag intrafind/${docker_image_name}:${docker_tag} .
docker build --tag $docker_image_name .
docker rm -f ${docker_image_name}
cd ..

docker run -d --name ${docker_image_name} \
    --log-driver=gelf \
    --log-opt gelf-address=udp://localhost:12201 \
    --env SECURITY_USER_PASSWORD=$SECURITY_USER_PASSWORD \
    --env BUILD_NUMBER=$BUILD_NUMBER \
    --env SCM_HASH=$SCM_HASH \
    --env SECURITY_OAUTH2_CLIENT_CLIENT_SECRET=$SECURITY_OAUTH2_CLIENT_CLIENT_SECRET \
    --network $docker_network \
    $docker_image_name
#    intrafind/${docker_image_name}:${docker_tag}

docker push $docker_image_name

danglingImages=$(docker images -f "dangling=true" -q)
if [ "$danglingImages" ]; then
    docker rmi -f $danglingImages # cleanup, GC for dangling images
else
    echo "There are no dangling Docker images"
fi

docker volume prune -f
