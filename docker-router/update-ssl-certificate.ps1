#!/usr/bin/env powershell

#https://certbot.eff.org

sudo apt install software-properties-common -y
sudo add-apt-repository ppa:certbot/certbot -y
sudo apt update -y
sudo apt install certbot -y
sudo certbot certonly

docker stop router
sudo certbot --standalone certonly --expand `
    --domains "main.sitesearch.cloud, test.sitesearch.cloud" `
    -d ci.sitesearch.cloud `
    -d api.sitesearch.cloud `
    -d dev.sitesearch.cloud `
    -d www.sitesearch.cloud `
    -d sitesearch.cloud `
    -d doc.sitesearch.cloud `
    -d blue.sitesearch.cloud `
    -d green.sitesearch.cloud

docker start router
