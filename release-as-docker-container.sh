#!/usr/bin/env sh

#SPRING_CONFIG_NAME=prod,local,config ./gradlew clean build
./gradlew clean build

echo `ls build/libs/*.jar | sed "s/.*\/\(.\+\)-.*\.jar/\1/"`
DOCKER_IMAGE_NAME=`ls build/libs/*.jar | sed "s/.*\/\(.\+\)-.*\.jar/\1/"`
DOCKER_TAG=latest

# docker login -u intrafind
docker build --tag=intrafind/$DOCKER_IMAGE_NAME:$DOCKER_TAG .
docker push intrafind/$DOCKER_IMAGE_NAME:$DOCKER_TAG
docker rm -f $DOCKER_IMAGE_NAME
docker run -d --name $DOCKER_IMAGE_NAME \
    -p 80:8001 \
    intrafind/$DOCKER_IMAGE_NAME:$DOCKER_TAG
#    -v ~/srv/$DOCKER_IMAGE_NAME:/home/app_user/data \

docker rmi $(docker images -f "dangling=true" -q) # cleanup, GC for dangling images
