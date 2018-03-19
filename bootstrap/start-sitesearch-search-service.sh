#!/usr/bin/env sh

docker_network=sitesearch
service_name=sitesearch-search-service
docker_image="intrafind/$service_name"
persistence_dir=srv
HOME=/home/alexander_orlov
docker_registry="docker-registry.sitesearch.cloud12"

docker network create $docker_network

#the ~ is not a problem, since the home directory is where docker looks for credentials anyway
if ! grep -q $docker_registry ~/.docker/config.json ;then
  echo "Not logged in to registry"
  #TODO Handle case (log in with environment variable?)
	#docker login $docker_registry
fi

docker run -d $docker_registry/$docker_image


# ******************************************************
# ** Deprecated Code (delete after next edit of file) **
# ******************************************************
#if [ -f "$HOME/tmp/$service_name.tar" ]; then
#if(Test-Path $HOME/tmp/$service_name.tar){
#    docker load -i "$HOME/tmp/$service_name.tar"
#else
#    echo $HOME/tmp/$service_name.tar file is missing
#fi
