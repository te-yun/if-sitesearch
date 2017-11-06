#!/usr/bin/env pwsh

Set-StrictMode -Version Latest
$ErrorActionPreference = "Stop"
$PSDefaultParameterValues["*:ErrorAction"] = "Stop"

$version = "2017.1.5"
$docker_network = "dev"
$service_name = "teamcity-server"
#$docker_image = "jetbrains/teamcity-server:${version}"

docker rm -f $service_name
docker run -d -t --name $service_name `
    -p 8111:8111 `
    -e TEAMCITY_SERVER_MEM_OPTS="-Xmx2g -XX:MaxPermSize=270m -XX:ReservedCodeCacheSize=350m" `
    -v ~/srv/${service_name}:/data/teamcity_server/datadir `
    -v ~/srv/${service_name}/logs:/opt/teamcity/logs `
    jetbrains/${service_name}:$version

~/buildAgent/bin/agent.sh stop
~/buildAgent/bin/agent.sh start # run agent on host machine

docker rm -f teamcity-agent
docker run -d -t --name teamcity-agent `
    -e SERVER_URL="https://ci.sitesearch.cloud" `
    -v ~/srv/teamcity-agent:/data/teamcity_agent/conf `
    jetbrains/teamcity-agent:$version

# TODO might need some adjustments to install PowerShel
docker exec -it teamcity-agent curl -LO https://github.com/PowerShell/PowerShell/releases/download/v6.0.0-beta.9/powershell_6.0.0-beta.9-1.ubuntu.16.04_amd64.deb
docker exec -it teamcity-agent dpkg -i powershell*.deb
docker exec -it teamcity-agent apt -f install


#docker run -d -t --name teamcity-agent -e SERVER_URL="https://ci.sitesearch.cloud" \
#    -v ~/srv/teamcity-agent:/data/teamcity_agent/conf \
#    jetbrains/teamcity-agent:2017.1.4