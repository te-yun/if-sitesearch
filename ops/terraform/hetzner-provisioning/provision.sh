#!/usr/bin/env sh

#export TF_VAR_hetzner_cloud_analyze_law=dummy-token

#terraform import hcloud_ssh_key.minion 105040
#terraform taint hcloud_ssh_key.minion
#terraform taint hcloud_floating_ip.main
#terraform taint hcloud_server.node
#terraform apply -auto-approve -var tenant=fps-law -var password=$PASSWORD
#terraform apply -auto-approve -target hcloud_ssh_key.minion -var tenant=fps-law1 -var password=$PASSWORD -lock=true
#terraform apply -auto-approve -var tenant=fps-law -var password=$PASSWORD -lock=true
terraform apply -auto-approve -var tenant=fps-law
#terraform destroy -auto-approve -var tenant=fps-law -var password=$PASSWORD


