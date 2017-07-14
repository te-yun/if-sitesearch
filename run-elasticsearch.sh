#!/usr/bin/env bash

docker rm -f sitesearch
docker run -t --name sitesearch \
    -p 9200-9303:9200-9303 \
    -v ~/svc/elasticsearch/data:/usr/share/elasticsearch/data \
    elasticsearch:alpine
#    elasticsearch:2-alpine
