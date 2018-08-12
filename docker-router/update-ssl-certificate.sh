#!/usr/bin/env sh

# https://certbot.eff.org

sudo apt install software-properties-common -y
sudo add-apt-repository ppa:certbot/certbot -y
sudo apt update -y
sudo apt install certbot -y
sudo apt update -y

# sudo apt install gcloud -y
# sh change-sis-cdn-dns-records.sh

# CDN IPs: 35.227.226.37 / 2600:1901:0:c2e3::
sudo certbot certonly --webroot -w /etc/letsencrypt --expand \
    -d main.sitesearch.cloud \
    -d test.sitesearch.cloud \
    -d ci.sitesearch.cloud \
    -d crawler.sitesearch.cloud \
    -d api.sitesearch.cloud \
    -d dev.sitesearch.cloud \
    -d cdn.sitesearch.cloud \
    -d doc.sitesearch.cloud \
    -d logs.sitesearch.cloud \
    -d docker-registry.sitesearch.cloud \
    -d team.sitesearch.cloud \
    -d blue.sitesearch.cloud \
    -d green.sitesearch.cloud \
    -d www.sitesearch.cloud \
    -d affiliate.sitesearch.cloud \
    \
    -d main.analyzelaw.com \
    -d demo.analyzelaw.com \
    -d dev.analyzelaw.com \
    -d test.analyzelaw.com \
#    -d tagger.analyzelaw.com \
#    -d api.analyzelaw.com

#    -d sitesearch.cloud \
