#!/usr/bin/env sh

docker_network="sitesearch"

docker network create $docker_network

docker-compose down --file opt/docker-compose-bg.yaml
docker-compose up -d --force-recreate --file opt/docker-compose-bg.yaml
docker-compose ps --file opt/docker-compose-bg.yaml
docker ps