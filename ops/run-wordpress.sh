#!/usr/bin/env sh

docker network create dev

docker rm -f wordpress-mysql
docker run --name wordpress-mysql -d \
    -e MYSQL_ROOT_PASSWORD=$SERVICE_SECRET \
    --network dev \
    mysql:5.7

docker rm -f wordpress
docker run --name wordpress -it \
    --link wordpress-mysql:mysql \
    -e WORDPRESS_DB_PASSWORD=$SERVICE_SECRET \
    -p 7080:80 \
    --network dev \
    wordpress:4.9.7-apache

#docker network create dev
#docker-compose --file ./ops/docker-compose-wordpress.yaml -p sitesearch down
#docker-compose --file ./ops/docker-compose-wordpress.yaml -p sitesearch up --force-recreate
#docker-compose --file ./ops/docker-compose-wordpress.yaml -p sitesearch ps