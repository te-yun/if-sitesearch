#!/usr/bin/env sh

# TODO make the container accessible on host only, not to the Internet!
docker rm -f elasticsearch
#docker run -t --name elasticsearch \
docker run --name elasticsearch \
    -p 9200-9303:9200-9303 \
    elasticsearch:2
#    elasticsearch:2-alpine
#    elasticsearch:alpine
#    -v ~/svc/elasticsearch/data:/usr/share/elasticsearch/data \
