#!/usr/bin/env powershell

#https://certbot.eff.org

sudo apt install software-properties-common
sudo add-apt-repository ppa:certbot/certbot
sudo apt update
sudo apt install certbot
sudo certbot certonly

docker stop router
sudo certbot --standalone certonly --expand `
    --domains "sitesearch.cloud, www.sitesearch.cloud, dev.sitesearch.cloud, api.sitesearch.cloud, ci.sitesearch.cloud, main.sitesearch.cloud, test.sitesearch.cloud" `
    -d doc.sitesearch.cloud `
    -d blue.sitesearch.cloud `
    -d green.sitesearch.cloud

docker start router
