#!/usr/bin/env sh

terraform init
terraform apply -var-file=existing-state.tfvars -auto-approve
terraform output ip_address
