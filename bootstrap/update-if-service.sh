#!/usr/bin/env sh


SERVICE_NAME=$1
if [ $# -eq 0 ]; then
	echo 'Takes 1 argument: SERVICE_NAME'
	exit 0
fi

DOCKER_IMAGE="intrafind/$SERVICE_NAME:latest"
NETWORK_NAME="sitesearch"

echo "Updating $SERVICE_NAME:"

if [ $(docker ps -a -f="name=$SERVICE_NAME" -q | wc -c) -gt 0 ]
then
	echo "*	Container already exists"
	echo "*	Killing container"
	docker rm -f $SERVICE_NAME > /dev/null
fi

echo "*	Creating new container $SERVICE_NAME"
echo "*	Updating image docker-registry.sitesearch.cloud/$DOCKER_IMAGE"

docker pull docker-registry.sitesearch.cloud/$DOCKER_IMAGE

docker run --name $SERVICE_NAME \
	-d --network $NETWORK_NAME  \
	docker-registry.sitesearch.cloud/$DOCKER_IMAGE > /dev/null