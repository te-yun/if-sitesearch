#!/usr/bin/env sh


SERVICE_NAME=if-app-webcrawler
DOCKER_IMAGE="intrafind/$SERVICE_NAME"
PORT_INTERNAL=8090
PORT_EXTERNAL=$PORT_INTERNAL

echo "Updating $SERVICE_NAME:"

if [ $(docker ps -a -f="name=$SERVICE_NAME" -q | wc -c) -gt 0 ]
then
	echo "*	Container already exists"
	echo "*	Killing container"
	docker rm -f $SERVICE_NAME > nul
fi

echo "*	Creating new container $SERVICE_NAME"

docker run -p $PORT_EXTERNAL:$PORT_INTERNAL -d --name $SERVICE_NAME docker-registry.sitesearch.cloud/$DOCKER_IMAGE > nul
