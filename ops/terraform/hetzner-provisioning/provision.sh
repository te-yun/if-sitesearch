#!/usr/bin/env sh

#export TF_VAR_hetzner_cloud_analyze_law=dummy-token

terraform taint hcloud_floating_ip.main
terraform taint hcloud_server.node
terraform apply -auto-approve -var tenant=fps-law -var password=$PASSWORD


