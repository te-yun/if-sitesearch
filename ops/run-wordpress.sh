#!/usr/bin/env sh

docker network create sitesearch

docker rm -f wordpress-mariadb
docker run --name wordpress-mariadb -d \
    -e MYSQL_ROOT_PASSWORD=$SERVICE_SECRET \
    --restart unless-stopped \
    --network sitesearch \
    mariadb:10

docker rm -f wordpress
docker run --name wordpress -it \
    --link wordpress-mariadb:mariadb \
    -e WORDPRESS_DB_PASSWORD=$SERVICE_SECRET \
    -p 7080:80 \
    --restart unless-stopped \
    --network sitesearch \
    wordpress:4.9-apache

#docker network create dev
#docker-compose --file ./ops/docker-compose-wordpress.yaml -p sitesearch down
#docker-compose --file ./ops/docker-compose-wordpress.yaml -p sitesearch up --force-recreate
#docker-compose --file ./ops/docker-compose-wordpress.yaml -p sitesearch ps