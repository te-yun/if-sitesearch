#!/usr/bin/env sh

version="2017.2"
service_name=teamcity-server

docker rm -f $service_name
docker run -d -t --name $service_name \
    -p 8111:8111 \
    -e TEAMCITY_SERVER_MEM_OPTS="-Xmx2g -XX:MaxPermSize=270m -XX:ReservedCodeCacheSize=350m" \
    -v ~/srv/${service_name}:/data/teamcity_server/datadir \
    -v ~/srv/${service_name}/logs:/opt/teamcity/logs \
    --network sitesearch \
    jetbrains/${service_name}:${version}

~/buildAgent/bin/agent.sh stop
~/buildAgent/bin/agent.sh start # run agent on host machine

# Run for major version upgrades
#~/buildAgent/bin/install.sh https://ci.sitesearch.cloud
#~/buildAgent/bin/agent.sh run

start_ci_agent() {
    docker rm -f teamcity-agent-$1
    docker run -d -t --name teamcity-agent-$1 \
        -e SERVER_URL="https://ci.sitesearch.cloud" \
        -e AGENT_NAME=$1 \
        -v ~/srv/teamcity-agent-$1:/data/teamcity_agent/conf \
        --network sitesearch \
        jetbrains/teamcity-agent:${version}
}

start_ci_agent Merkur
start_ci_agent Venus
