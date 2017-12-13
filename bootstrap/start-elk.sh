#!/usr/bin/env sh

## Logstash
#wget -qO - https://artifacts.elastic.co/GPG-KEY-elasticsearch | sudo apt-key add -
#sudo apt-get install apt-transport-https -y
#echo "deb https://artifacts.elastic.co/packages/6.x-prerelease/apt stable main" | sudo tee -a /etc/apt/sources.list.d/elastic-6.x-prerelease.list
#sudo systemctl start logstash.service

# Elasticsearch
docker network create blue-green
docker network create ops
sudo sysctl -w vm.max_map_count=262144

docker-compose down; vim docker-compose.yaml; docker-compose up -d --force-recreate; docker-compose ps; docker ps;

curl -X PUT -u elastic http://<host>:9200/_xpack/license -H "Content-Type: application/json" -d @license-*.json
