#!/usr/bin/env sh

sudo chown -R 1000:1000 /srv/sitesearch-*

docker-compose --file ./opt/docker-compose-iFinder-core.yaml -p sitesearch down
docker-compose --file ./opt/docker-compose-iFinder-core.yaml -p sitesearch up -d
