#!/usr/bin/env sh

docker_network=sitesearch
service_name=sitesearch-search-service
docker_image="intrafind/$service_name"
persistence_dir=srv
HOME=/home/alexander_orlov
docker_registry="docker-registry.sitesearch.cloud12"

docker network create $docker_network

docker run -d $docker_registry/$docker_image
