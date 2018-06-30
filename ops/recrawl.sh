#!/usr/bin/env sh

SITE_CRAWL_STATUS_FILE=site-crawl-status.json

# get all sites crawl status
curl -X GET \
    "https://api.sitesearch.cloud/sites/crawl/status?serviceSecret=${ADMIN_SITE_SECRET}" \
    -o $SITE_CRAWL_STATUS_FILE

# apply fetched site status to run the crawler
curl -X POST \
    "https://api.sitesearch.cloud/sites/crawl?serviceSecret=${ADMIN_SITE_SECRET}&clearIndex=false&isThrottled=false&allSitesCrawl=true" \
    -H 'content-type: application/json' \
    -T $SITE_CRAWL_STATUS_FILE

# update local crawl status
curl -X GET \
    "https://api.sitesearch.cloud/sites/crawl/status?serviceSecret=${ADMIN_SITE_SECRET}" \
    -o $SITE_CRAWL_STATUS_FILE

apt-get install -y jq
failedCrawlStatusList=$(cat $SITE_CRAWL_STATUS_FILE | jq -r '.sites[] | select (.pageCount | length  == 0 )');

# if failedCrawlStatusList not empty give me the siteIDs
if [ -n "$failedCrawlStatusList" ]; then
   echo "CRAWLING_FAILED"
   failedSiteIds=$(cat status.json | jq -r '.sites[] | select (.pageCount | length == 0) | .siteId')
   echo "SiteIDs: $failedSiteIds"
else
  echo "CRAWLING_SUCCESS"
fi

cat $SITE_CRAWL_STATUS_FILE | jq .