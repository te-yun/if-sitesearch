#!/usr/bin/env sh

#export TF_VAR_hetzner_cloud_analyze_law=dummy-token

#terraform taint hcloud_ssh_key.minion
terraform taint hcloud_floating_ip.main
terraform taint hcloud_server.node
terraform taint docker_container.ubuntu
#terraform taint hcloud_ssh_key.minion
#terraform taint google_dns_record_set.tenant-domain

#terraform apply -auto-approve -var tenant=fps-law -var password=$PASSWORD
#terraform apply -auto-approve -target hcloud_ssh_key.minion -var tenant=fps-law1 -var password=$PASSWORD -lock=true
#terraform apply -auto-approve -var tenant=fps-law -var password=$PASSWORD -lock=true
#terraform apply -auto-approve -var tenant=dev $1
#terraform apply -auto-approve $1
terraform apply -auto-approve $1
#terraform destroy -auto-approve -var tenant=fps-law -var password=$PASSWORD


