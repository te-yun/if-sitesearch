#!/usr/bin/env sh

sh ./bootstrap/start-sitesearch-elasticsearch.sh
sh ./bootstrap/start-sitesearch-search-service.sh

echo $HOME---------------
HOME=/home/alexander_orlov
docker-compose --file ./opt/docker-compose-sitesearch.yaml -p tmp down
docker-compose --file ./opt/docker-compose-sitesearch.yaml -p tmp up -d