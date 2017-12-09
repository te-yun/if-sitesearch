#!/usr/bin/env sh

sh ./bootstrap/start-sitesearch-elasticsearch.sh
sh ./bootstrap/start-sitesearch-search-service.sh

docker-compose --file ./opt/docker-compose-sitesearch.yaml down
docker-compose --file ./opt/docker-compose-sitesearch.yaml up -d