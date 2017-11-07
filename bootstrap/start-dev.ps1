#!/usr/bin/env pwsh

# toolchain
docker start teamcity-server
~/buildAgent/bin/agent.sh start
docker start teamcity-agent

docker start sitesearch-elasticsearch
docker start sitesearch-search-service

docker start if-sitesearch
docker start if-sitesearch-green
docker start if-sitesearch-blue

docker start router


