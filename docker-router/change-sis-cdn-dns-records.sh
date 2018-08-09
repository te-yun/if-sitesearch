#!/usr/bin/env sh

# do not run this script before it is as simple bash script refactored

# useful commands:
# gcloud projects list
# gcloud config set project woven-alpha-150909
# gcloud dns managed-zones list --project woven-alpha-150909
# gcloud dns record-sets list --zone=sis --project woven-alpha-150909

# TODO: write "simple" bash script

gcloud dns record-sets transaction start -z sis --project woven-alpha-150909
gcloud dns record-sets transaction remove -z sis --project woven-alpha-150909 \
        --name="cdn.sitesearch.cloud." \
        --type=AAAA \
        --ttl=300 "2600:1901:0:c2e3::"
gcloud dns record-sets transaction remove -z sis --project woven-alpha-150909 \
        --name="cdn.sitesearch.cloud." \
        --type=A \
        --ttl=300 "35.227.226.37"
gcloud dns record-sets transaction add -z sis --project woven-alpha-150909 \
        --name="cdn.sitesearch.cloud." \
        --type=A \
        --ttl=300 "35.198.71.123"
gcloud dns record-sets transaction execute -z sis --project woven-alpha-150909

# if transaction not successfull reset transaction with below code
# gcloud dns record-sets transaction abort -z sis --project woven-alpha-150909

# update SSL certs

# rollback changes on DNS records
gcloud dns record-sets transaction start -z sis --project woven-alpha-150909
gcloud dns record-sets transaction add -z sis --project woven-alpha-150909 \
        --name="cdn.sitesearch.cloud." \
        --type=AAAA \
        --ttl=300 "2600:1901:0:c2e3::"
gcloud dns record-sets transaction remove -z sis --project woven-alpha-150909 \
        --name="cdn.sitesearch.cloud." \
        --type=A \
        --ttl=300 "35.198.71.123"
gcloud dns record-sets transaction add -z sis --project woven-alpha-150909 \
        --name="cdn.sitesearch.cloud." \
        --type=A \
        --ttl=300 "35.227.226.37"
gcloud dns record-sets transaction execute -z sis --project woven-alpha-150909