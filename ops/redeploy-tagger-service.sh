#!/usr/bin/env sh

cd /home/ubuntu/if-sitesearch/ops/terraform/prod-provisioning/
sudo -u ubuntu terraform taint -module=kubernetes null_resource.Tagging-Service
sudo -u ubuntu terraform apply -auto-approve