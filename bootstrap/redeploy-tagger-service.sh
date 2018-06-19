#!/usr/bin/env sh

# execute as UID-1000 user
cd /srv/if-sitesearch/ops/terraform/prod-provisioning
sudo -u ubuntu terraform taint -module=kubernetes null_resource.Tagging-Service
sudo -u ubuntu terraform apply -auto-approve