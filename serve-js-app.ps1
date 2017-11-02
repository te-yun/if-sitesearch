#!/usr/bin/env pwsh

Set-StrictMode -Version Latest
$ErrorActionPreference = "Stop"
$PSDefaultParameterValues["*:ErrorAction"] = "Stop"

docker rm -f if-sitesearch-js-app
docker run -d --name if-sitesearch-js-app `
    -p 8002:80 `
    -v $PWD/docker-js-app:/etc/nginx/conf.d:ro `
    -v $PWD/service/src/main/resources/static:/usr/share/nginx/html:ro `
    nginx:alpine
