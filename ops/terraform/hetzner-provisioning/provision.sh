#!/usr/bin/env sh

TF_VAR_tenant=esche
#terraform apply -var tenant=esche
terraform plan -var tenant=esche

