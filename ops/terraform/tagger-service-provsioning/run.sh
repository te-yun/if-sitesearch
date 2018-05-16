#!/usr/bin/env sh
cd ops/terraform/tagger-service-provsioning/
terraform init
terraform apply -var-file=existing-state.tfvars -auto-approve
