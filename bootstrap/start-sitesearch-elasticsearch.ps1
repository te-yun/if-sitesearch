#!/usr/bin/env powershell

Set-StrictMode -Version Latest
$ErrorActionPreference = "Stop"
$PSDefaultParameterValues["*:ErrorAction"] = "Stop"

$docker_network = "sitesearch"
$service_name = "sitesearch-elasticsearch"
$docker_image = "intrafind/$service_name"
$persistence_dir = "srv1"

docker network create $docker_network

docker load -i "~/tmp/$service_name.tar"

sudo chown -R 1000:1000 $HOME/$persistence_dir/$service_name
sudo chmod -R 744 $HOME/$persistence_dir/$service_name

docker rm -f $service_name
docker run -d --name $service_name `
    --network $docker_network `
    -v $HOME/$persistence_dir/$service_name/data:/home/app_user/data `
    -v $HOME/$persistence_dir/$service_name/logs:/home/app_user/logs:rw `
    $docker_image