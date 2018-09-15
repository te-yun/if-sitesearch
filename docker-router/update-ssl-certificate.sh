#!/usr/bin/env sh

sudo apt install software-properties-common -y
sudo add-apt-repository ppa:certbot/certbot -y
sudo apt update -y
sudo apt install certbot -y
sudo apt update -y

# install and init gcloud
sudo apt update -y
export CLOUD_SDK_REPO="cloud-sdk-$(lsb_release -c -s)"
echo "deb http://packages.cloud.google.com/apt $CLOUD_SDK_REPO main" | sudo tee -a /etc/apt/sources.list.d/google-cloud-sdk.list
curl https://packages.cloud.google.com/apt/doc/apt-key.gpg | sudo apt-key add -
sudo apt-get update && sudo apt-get install google-cloud-sdk -y
gcloud auth activate-service-account --key-file=/srv/minion/compute-engine-admin.json
gcloud config set project woven-alpha-150909

# setup SSL update mode
gcloud dns record-sets transaction start --zone=sis --project woven-alpha-150909
gcloud dns record-sets transaction remove --zone=sis --project woven-alpha-150909 \
        --name="cdn.sitesearch.cloud." \
        --type=AAAA \
        --ttl=300 "2600:1901:0:c2e3::"
gcloud dns record-sets transaction remove --zone=sis --project woven-alpha-150909 \
        --name="cdn.sitesearch.cloud." \
        --type=A \
        --ttl=300 "35.227.226.37"
gcloud dns record-sets transaction add --zone=sis --project woven-alpha-150909 \
        --name="cdn.sitesearch.cloud." \
        --type=A \
        --ttl=300 "35.198.71.123"
gcloud dns record-sets transaction execute --zone=sis --project woven-alpha-150909

# if transaction not successfull reset transaction with below code
# gcloud dns record-sets transaction abort --zone=sis --project woven-alpha-150909

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
    -d sitesearch.cloud \
    -d affiliate.sitesearch.cloud
#    \
#    -d main.analyzelaw.com \
#    -d demo.analyzelaw.com \
#    -d dev.analyzelaw.com \
#    -d test.analyzelaw.com \
#    -d esche-demo.analyzelaw.com \
#    -d contract-analyzer.analyzelaw.com \
#    -d tagger.analyzelaw.com \
#    -d api.analyzelaw.com

#    -d sitesearch.cloud \

# revert to regular DNS setup mode
gcloud dns record-sets transaction start --zone=sis --project woven-alpha-150909
gcloud dns record-sets transaction add --zone=sis --project woven-alpha-150909 \
        --name="cdn.sitesearch.cloud." \
        --type=AAAA \
        --ttl=300 "2600:1901:0:c2e3::"
gcloud dns record-sets transaction remove --zone=sis --project woven-alpha-150909 \
        --name="cdn.sitesearch.cloud." \
        --type=A \
        --ttl=300 "35.198.71.123"
gcloud dns record-sets transaction add --zone=sis --project woven-alpha-150909 \
        --name="cdn.sitesearch.cloud." \
        --type=A \
        --ttl=300 "35.227.226.37"
gcloud dns record-sets transaction execute --zone=sis --project woven-alpha-150909