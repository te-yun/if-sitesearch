#!/usr/bin/env bash

docker_network="sitesearch"
service_name="sitesearch-elasticsearch"
docker_image="intrafind/$service_name"
persistence_dir="srv"

docker network create $docker_network

if [ -f "$HOME/tmp/$service_name.tar" ]; then
#if(Test-Path $HOME/tmp/$service_name.tar){
    docker load -i "$HOME/tmp/$service_name.tar"

    mkdir -p $HOME/$persistence_dir/$service_name
    sudo chown -R 1000:1000 $HOME/$persistence_dir/$service_name
    sudo chmod -R 744 $HOME/$persistence_dir/$service_name

#    docker rm -f $service_name
#    docker run -d --name $service_name `
#        --network $docker_network `
#        -v $HOME/$persistence_dir/$service_name/data:/home/app_user/data:rw `
#        -v $HOME/$persistence_dir/$service_name/logs:/home/app_user/logs:rw `
#        $docker_image
else
    echo $HOME/tmp/$service_name.tar file is missing
fi