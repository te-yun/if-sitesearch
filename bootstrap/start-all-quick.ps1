#!/usr/bin/env pwsh

echo "== startup-script =="
# toolchain
docker start teamcity-server
suod rm ~/buildAgent/logs/buildAgent.properties.lock
~/buildAgent/bin/agent.sh start
docker start teamcity-agent

docker start sitesearch-elasticsearch
docker start sitesearch-search-service

docker start if-sitesearch
docker start if-sitesearch-green
docker start if-sitesearch-blue

docker start router
echo "/== startup-script =="


