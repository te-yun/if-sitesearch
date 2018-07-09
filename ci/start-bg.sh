#!/usr/bin/env sh

docker-compose --file opt/docker-compose-bg.yaml -p sitesearch down
docker-compose --file opt/docker-compose-bg.yaml -p sitesearch up -d --force-recreate
docker-compose --file opt/docker-compose-bg.yaml -p sitesearch ps