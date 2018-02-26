#!/usr/bin/env sh

SITE_CRAWL_STATUS_FILE=site-crawl-status.json

# get all sites crawl status
curl -X GET \
    "https://api.sitesearch.cloud/sites/crawl/status?serviceSecret=$ADMIN_SITE_SECRET" \
    -o $SITE_CRAWL_STATUS_FILE

# apply fetched site status to run the crawler
curl -X POST \
    "https://api.sitesearch.cloud/sites/crawl?serviceSecret=$ADMIN_SITE_SECRET" \
    -H 'content-type: application/json' \
    -T $SITE_CRAWL_STATUS_FILE

cat $SITE_CRAWL_STATUS_FILE
cat $SITE_CRAWL_STATUS_FILE | grep date -I
if [ `cat $SITE_CRAWL_STATUS_FILE` = *`date -I`* ]; then
    echo CRAWLED
fi
rm $SITE_CRAWL_STATUS_FILE
cat $SITE_CRAWL_STATUS_FILE