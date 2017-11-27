#!/usr/bin/env pwsh

Set-StrictMode -Version Latest
$ErrorActionPreference = "Stop"
$PSDefaultParameterValues["*:ErrorAction"] = "Stop"

$docker_network = "sitesearch"
$service_name = "sitesearch-search-service"
$docker_image = "intrafind/$service_name"
$persistence_dir = "srv"

docker network create $docker_network

docker-compose down; vim docker-compose.yaml; docker-compose up -d --force-recreate; docker-c
ompose ps; docker ps;