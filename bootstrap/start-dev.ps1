#!/usr/bin/env powershell

# toolchain
docker start teamcity-server
~/buildAgent/bin/agent.sh start
docker start teamcity-agent

docker start elasticsearch
docker start sitesearch-search-service

docker start if-sitesearch
docker start if-sitesearch-green
docker start if-sitesearch-blue

docker start router


