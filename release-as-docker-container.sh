#!/usr/bin/env sh
set -e

SPRING_CONFIG_NAME=local
./gradlew clean build --info

DOCKER_IMAGE_NAME=`ls build/libs/*.jar | sed "s/.*\/\(.\+\).*\.jar/\1/"`
DOCKER_TAG=latest

docker build --tag intrafind/$DOCKER_IMAGE_NAME:$DOCKER_TAG .
docker rm -f $DOCKER_IMAGE_NAME
docker run -d --name $DOCKER_IMAGE_NAME \
    -p 80:8001 \
    -p 443:8001 \
    -v ~/srv/$DOCKER_IMAGE_NAME:/data \
    intrafind/$DOCKER_IMAGE_NAME:$DOCKER_TAG

danglingImages=$(docker images -f 'dangling=true' -q)
if [ -z "$danglingImages" ]
then
    echo 'there are no dangling Docker images'
else
    docker rmi -f $danglingImages # cleanup, GC for dangling images
fi

