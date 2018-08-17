#!/usr/bin/env sh

TF_VAR_tenant=esche
#terraform apply -var tenant=esche
#terraform plan -var tenant=esche
#terraform taint hcloud_server.node ;terraform apply -auto-approve -var tenant=esche123 -var password=$PASSWORD
terraform taint hcloud_server.node ;terraform apply -auto-approve -var password=$PASSWORD


