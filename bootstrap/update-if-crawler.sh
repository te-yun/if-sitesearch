#!/usr/bin/env sh

service_name=if-app-webcrawler
docker_image="intrafind/$service_name"
port_internal=8090
port_external=$port_internal

if [ $(docker ps -a -f="name=$service_name" -q | wc -c) -gt 0 ]
then
	docker stop $service_name
	docker rm -v $service_name
fi

docker run -p $port_external:$port_internal -d --name $service_name docker-registry.sitesearch.cloud/$docker_image
