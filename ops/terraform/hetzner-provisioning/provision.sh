#!/usr/bin/env sh

#export TF_VAR_tenant=esche1
#export TF_VAR_tenant=esche
#export TF_VAR_password=$PASSWORD
#terraform apply -var tenant=esche
#terraform plan -var tenant=esche
#terraform taint hcloud_server.node ;terraform apply -auto-approve -var password=$PASSWORD
#terraform apply -auto-approve
terraform taint hcloud_server.node
terraform apply -auto-approve -var tenant=esche -var password=$PASSWORD


