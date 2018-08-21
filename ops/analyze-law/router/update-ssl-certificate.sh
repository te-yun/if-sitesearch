#!/usr/bin/env sh

# https://certbot.eff.org

sudo apt install software-properties-common -y
sudo add-apt-repository ppa:certbot/certbot -y
sudo apt update -y
sudo apt install certbot -y
sudo apt update -y

sudo certbot certonly --webroot -w /etc/letsencrypt --expand \
    -d fps-law.analyzelaw.com \
