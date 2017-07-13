#!/usr/bin/env bash

docker rm -f sitesearch
docker run -d --name sitesearch \
    -p 9200-9300:9200-9300 \
    -v ~/svc/elasticsearch/data:/usr/share/elasticsearch/data \
    elasticsearch:5.4.3-alpine
