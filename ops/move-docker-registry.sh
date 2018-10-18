#!/usr/bin/env sh

# DO NOT RUN UNTIL FINISHED!

# TODO: add sis-dev-root public key to authorized-keys on target to use rsync as root
# TODO: configure nginx wiht ssl for secure connection to the docker-registry

target-ip=$1

ssh root@"$target-ip"
sudo apt update
sudo apt install apt-transport-https ca-certificates curl gnupg2 software-properties-common -y
curl -fsSL https://download.docker.com/linux/debian/gpg | sudo apt-key add -
sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/debian $(lsb_release -cs) stable"
sudo apt update
apt-cache policy docker-ce
sudo apt install docker-ce
sudo usermod -aG docker ${USER}
su - ${USER}
logout

sudo su
rsync -avz -e "ssh -i .ssh/id_rsa" --progress /var/lib/docker/volumes/tmp_docker-registry/* root@"$target-ip":/srv/docker-registry/

docker run -d --name docker-registry --restart=always \
    -p 5501:5000 \
    --mount type=bind,source=/srv/docker-registry/_data,target=/var/lib/registry \
    registry:2