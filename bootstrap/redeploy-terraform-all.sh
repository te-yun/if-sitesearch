#!/usr/bin/env sh

cd /home/ubuntu/if-sitesearch/ops/terraform/prod-provisioning/
sudo -u ubuntu terraform destroy -auto-approve
sudo -u ubuntu terraform apply -auto-approve