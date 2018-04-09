#!/usr/bin/env sh

#Considerations when starting with new docker-compose-file:
# - the old setup has to be deleted manually
# - elasticsearch index files might be lost, backup and make double sure they wont

docker-compose --file ./opt/docker-compose-sitesearch.yaml -p sitesearch down
docker-compose --file ./opt/docker-compose-iFinder-core.yaml -p sitesearch down
docker-compose --file ./opt/docker-compose-iFinder-core.yaml -p sitesearch up -d

#Adding this just to be sure
sudo chmod -R 777 /srv


#### Keep for fast failure recovery
#sh ./bootstrap/start-sitesearch-elasticsearch.sh
#sh ./bootstrap/start-sitesearch-search-service.sh
#
#export HOME=/home/alexander_orlov
#docker-compose --file ./opt/docker-compose-sitesearch.yaml -p sitesearch down
#docker-compose --file ./opt/docker-compose-sitesearch.yaml -p sitesearch up -d
####