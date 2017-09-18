#!/usr/bin/env powershell

#https://certbot.eff.org

sudo apt install software-properties-common
sudo add-apt-repository ppa:certbot/certbot
sudo apt update
sudo apt install certbot
sudo certbot certonly

#sudo certbot --webroot certonly -w /var/www/letsencrypt --expand --domains "sitesearch.cloud, www.sitesearch.cloud, dev.sitesearch.cloud, api.sitesearch.cloud, ci.sitesearch.cloud"
sudo certbot certonly --expand --domains "sitesearch.cloud, www.sitesearch.cloud, dev.sitesearch.cloud, api.sitesearch.cloud, ci.sitesearch.cloud, main.sitesearch.cloud, test.sitesearch.cloud"

sudo openssl pkcs12 -export -in /etc/letsencrypt/live/sitesearch.cloud/fullchain.pem -inkey /etc/letsencrypt/live/sitesearch.cloud/privkey.pem -out pkcs.p12 -name alias
keytool -importkeystore -destkeystore keystore.jks -srcstoretype PKCS12 -srckeystore pkcs.p12 -alias alias
#sudo keytool -import -alias alias -keystore keystore.jks -file /etc/letsencrypt/live/muctool.loxal.net/fullchain.pem
#cp keystore.jks src/main/resources
sudo keytool -list -v -alias alias -keystore keystore.jks
