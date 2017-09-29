Set-StrictMode -Version Latest
$ErrorActionPreference = "Stop"
$PSDefaultParameterValues["*:ErrorAction"] = "Stop"

$docker_network = "sitesearch"
$service_name = "grafana"
$docker_image = "$service_name/$service_name"

docker network create $docker_network

rm -rf ~/srv/$service_name
sudo chown -R 1000:1000 ~/srv/$service_name
sudo chmod -R 744 ~/srv/$service_name

docker rm -f $service_name
#docker run -d -p 3000:3000 -v $HOME/srv/grafana:/var/lib/grafana --network $docker_network --name=$service_name -e "GF_INSTALL_PLUGINS=grafana-clock-panel,grafana-simple-json-datasource" -e "GF_SERVER_ROOT_URL=https://api.sitesearch.cloud" -e "GF_SECURITY_ADMIN_PASSWORD=sitesearch" $docker_image
docker run -d -p 3000:3000 -v $HOME/srv/grafana:/var/lib/grafana --network $docker_network --name=$service_name -e "GF_SERVER_ROOT_URL=https://api.sitesearch.cloud" -e "GF_SECURITY_ADMIN_PASSWORD=sitesearch" $docker_image