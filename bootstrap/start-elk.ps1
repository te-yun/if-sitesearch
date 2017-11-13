# Logstash 
wget -qO - https://artifacts.elastic.co/GPG-KEY-elasticsearch | sudo apt-key add -
sudo apt-get install apt-transport-https -y
echo "deb https://artifacts.elastic.co/packages/6.x-prerelease/apt stable main" | sudo tee -a /etc/apt/sources.list.d/elastic-6.x-prerelease.list
sudo systemctl start logstash.service

# Elasticsearch
docker network create ops
sudo sysctl -w vm.max_map_count=262144