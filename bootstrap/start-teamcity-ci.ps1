#!/usr/bin/env pwsh

Set-StrictMode -Version Latest
$ErrorActionPreference = "Stop"
$PSDefaultParameterValues["*:ErrorAction"] = "Stop"

$version = "2017.2"
$docker_network = "dev"
$service_name = "teamcity-server"

docker rm -f $service_name
docker run -d -t --name $service_name `
    -p 8111:8111 `
    -e TEAMCITY_SERVER_MEM_OPTS="-Xmx2g -XX:MaxPermSize=270m -XX:ReservedCodeCacheSize=350m" `
    -v ~/srv/${service_name}:/data/teamcity_server/datadir `
    -v ~/srv/${service_name}/logs:/opt/teamcity/logs `
    jetbrains/${service_name}:$version

~/buildAgent/bin/agent.sh stop
~/buildAgent/bin/agent.sh start # run agent on host machine

# Run for major version upgrades
#~/buildAgent/bin/install.sh https://ci.sitesearch.cloud
#~/buildAgent/bin/agent.sh run

function start-ci-agent([String] $agent_name = "sun") {
    docker rm -f teamcity-agent-$agent_name
    docker run -d -t --name teamcity-agent-$agent_name `
        -e SERVER_URL="https://ci.sitesearch.cloud" `
        -e AGENT_NAME=$agent_name `
        -v ~/srv/teamcity-agent-${agent_name}:/data/teamcity_agent/conf `
        jetbrains/teamcity-agent:$version

    # Add PowerShell to TeamCity Docker Agent
    docker exec teamcity-agent-$agent_name curl -L https://github.com/PowerShell/PowerShell/releases/download/v6.0.0-rc/powershell_6.0.0-rc-1.ubuntu.16.04_amd64.deb -o /tmp/sitesearch-ci-powershell.deb
    docker exec teamcity-agent-$agent_name apt-get update -y
    docker exec teamcity-agent-$agent_name dpkg -i /tmp/sitesearch-ci-powershell.deb
    docker exec teamcity-agent-$agent_name apt-get install -f -y
}

start-ci-agent Merkur
start-ci-agent Venus
