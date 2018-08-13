#!/usr/bin/env sh

# do not run this script before it is as simple bash script refactored

# useful commands:
# gcloud projects list
# gcloud config set project woven-alpha-150909
# gcloud dns managed-zones list --project woven-alpha-150909
# gcloud dns record-sets list --zone sis --project woven-alpha-150909

sudo apt install gcloud -y
# TODO gcloud init is missing
# TODO gcloud is not part of the regular packages repository, add a corresponding debian repository first
# TODO: write "simple" bash script

# setup SSL update mode
gcloud dns record-sets transaction start --zone=sis --project woven-alpha-150909
gcloud dns record-sets transaction remove --zone=sis --project woven-alpha-150909 \
        --name="cdn.sitesearch.cloud." \
        --type=AAAA \
        --ttl=300 "2600:1901:0:c2e3::"
gcloud dns record-sets transaction remove --zone=sis --project woven-alpha-150909 \
        --name="cdn.sitesearch.cloud." \
        --type=A \
        --ttl=300 "35.227.226.37"
gcloud dns record-sets transaction add --zone=sis --project woven-alpha-150909 \
        --name="cdn.sitesearch.cloud." \
        --type=A \
        --ttl=300 "35.198.71.123"
gcloud dns record-sets transaction execute --zone=sis --project woven-alpha-150909

# if transaction not successfull reset transaction with below code
# gcloud dns record-sets transaction abort --zone=sis --project woven-alpha-150909

# sh update-ssl-certificate.sh

# revert to regular DNS setup mode
gcloud dns record-sets transaction start --zone=sis --project woven-alpha-150909
gcloud dns record-sets transaction add --zone=sis --project woven-alpha-150909 \
        --name="cdn.sitesearch.cloud." \
        --type=AAAA \
        --ttl=300 "2600:1901:0:c2e3::"
gcloud dns record-sets transaction remove --zone=sis --project woven-alpha-150909 \
        --name="cdn.sitesearch.cloud." \
        --type=A \
        --ttl=300 "35.198.71.123"
gcloud dns record-sets transaction add --zone=sis --project woven-alpha-150909 \
        --name="cdn.sitesearch.cloud." \
        --type=A \
        --ttl=300 "35.227.226.37"
gcloud dns record-sets transaction execute --zone=sis --project woven-alpha-150909