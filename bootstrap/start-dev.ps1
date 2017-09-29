#!/usr/bin/env powershell

# toolchain
docker start teamcity-server
~/buildAgent/bin/agent.sh start

#core
docker start router
docker start elasticsearch
docker start sitesearch-search-service
docker start if-sitesearch

# supplementary
docker start if-sitesearch-green
docker start if-sitesearch-blue


