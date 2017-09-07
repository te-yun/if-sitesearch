#!/usr/bin/env powershell

Set-StrictMode -Version Latest
$ErrorActionPreference = "Stop"
$PSDefaultParameterValues["*:ErrorAction"] = "Stop"

$docker_network = "dev"
$service_name = "teamcity-server"
$docker_image = "jetbrains/teamcity-server:2017.1.4"

docker network create $docker_network

docker rm -f $service_name
docker run -d -t --name $service_name -v ~/srv/${service_name}:/data/teamcity_server/datadir -v ~/srv/${service_name}/logs:/opt/teamcity/logs -p 8111:8111 jetbrains/${service_name}:2017.1.4

~/buildAgent/bin/agent.sh stop
~/buildAgent/bin/agent.sh start # run agent on host machine