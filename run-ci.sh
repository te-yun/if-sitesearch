#!/usr/bin/env sh

teamcity_server() {
    docker rm -f teamcity-server
    docker run -d -t --name teamcity-server  \
        -v ~/srv/teamcity_server:/data/teamcity_server/datadir \
        -v ~/srv/teamcity_server/logs:/opt/teamcity/logs  \
        -p 8111:8111 \
        jetbrains/teamcity-server:2017.1.3

    ~/buildAgent/bin/agent.sh start # run agent on host machine
}
teamcity_server