#!/usr/bin/env pwsh

Set-StrictMode -Version Latest
$ErrorActionPreference = "Stop"
$PSDefaultParameterValues["*:ErrorAction"] = "Stop"

$docker_network = "sitesearch"

docker network create $docker_network

docker-compose down --file opt/docker-compose-bg.yaml
docker-compose up -d --force-recreate --file opt/docker-compose-bg.yaml
docker-compose ps --file opt/docker-compose-bg.yaml
docker ps