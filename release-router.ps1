#!/usr/bin/env powershell

Set-StrictMode -Version Latest
$ErrorActionPreference = "Stop"
$PSDefaultParameterValues["*:ErrorAction"] = "Stop"

function setupRedirectRouterContainer {
    $docker_network = "sitesearch"
    $docker_redirect_image = "router"
    $docker_redirect_image_tag = "latest"
    cd docker-$docker_redirect_image
    docker build --tag intrafind/${docker_redirect_image}:$docker_redirect_image_tag .
    docker rm -f $docker_redirect_image
    mkdir ~/srv/${docker_redirect_image}
#        -v ~/srv/${docker_redirect_image}:/etc/nginx `
    docker run -d --name $docker_redirect_image `
        -p 80:80 -p 443:443 `
        -v /etc/letsencrypt:/etc/letsencrypt `
        --network $docker_network `
        intrafind/${docker_redirect_image}:$docker_redirect_image_tag

    cd ..
}
setupRedirectRouterContainer