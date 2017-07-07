#!/usr/bin/env bash

#SPRING_CONFIG_NAME=prod,local,config ./gradlew clean build
./gradlew clean build

DOCKER_IMAGE_NAME=if-sitesearch
DOCKER_TAG=latest

# docker login -u intrafind
docker build --tag=intrafind/$DOCKER_IMAGE_NAME:$DOCKER_TAG .
docker push intrafind/$DOCKER_IMAGE_NAME:$DOCKER_TAG
docker rm -f $DOCKER_IMAGE_NAME
docker run -d -p 82:8200 -e VAULT_TOKEN=$VAULT_TOKEN --name $DOCKER_IMAGE_NAME intrafind/$DOCKER_IMAGE_NAME:$DOCKER_TAG

docker rmi $(docker images -f "dangling=true" -q) # cleanup, GC for dangling images
