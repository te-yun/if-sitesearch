Set-StrictMode -Version Latest
$ErrorActionPreference = "Stop"
$PSDefaultParameterValues["*:ErrorAction"] = "Stop"

$docker_network = "sitesearch"
$service_name = "influxdb"
$docker_image = "$service_name/$service_name"

docker network create $docker_network

#rm -rf ~/srv/$service_name
sudo chown -R 0:0 ~/srv/$service_name
sudo chmod -R 744 ~/srv/$service_name

docker rm -f $service_name
docker run -d -p 8086:8086 -v $HOME/srv/${service_name}/influxdb.conf:/etc/influxdb/influxdb.conf:ro --network $docker_network --name=$service_name $docker_image -config /etc/influxdb/influxdb.conf