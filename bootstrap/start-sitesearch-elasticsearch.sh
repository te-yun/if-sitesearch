#!/usr/bin/env sh

docker_network=sitesearch
service_name=sitesearch-elasticsearch
docker_image="intrafind/$service_name"
persistence_dir=srv
HOME=/home/alexander_orlov

    mkdir -p ${HOME}/$persistence_dir/$service_name
    sudo chown -R 1000:1000 ${HOME}/$persistence_dir/$service_name
    sudo chmod -R 744 ${HOME}/$persistence_dir/$service_name