#!/usr/bin/env bash

# TODO make the container accessible on host only, not to the Internet!
docker rm -f sitesearch
#docker run -t --name sitesearch \
docker run --name sitesearch \
    -p 9200-9303:9200-9303 \
    elasticsearch:2
#    elasticsearch:2-alpine
#    elasticsearch:alpine
#    -v ~/svc/elasticsearch/data:/usr/share/elasticsearch/data \
