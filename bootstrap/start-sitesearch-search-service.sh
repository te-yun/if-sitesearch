#!/usr/bin/env sh

docker_network=sitesearch
service_name=sitesearch-search-service
docker_image="intrafind/$service_name"
persistence_dir=srv
HOME=/home/alexander_orlov

docker network create $docker_network

prepare_persistence_directory() {
    mkdir -p $HOME/$persistence_dir/$1/data
    sudo chown -R 1000:1000 $HOME/$persistence_dir/$1/data
    sudo chmod -R 744 $HOME/$persistence_dir/$1/data
}

prepare_persistence_directory sitesearch-search-service
prepare_persistence_directory sitesearch-search-service-1