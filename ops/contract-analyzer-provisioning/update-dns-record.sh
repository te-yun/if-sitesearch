#!/usr/bin/env sh

gcloud dns record-sets transaction start --zone analyzelaw-com --project analyze-law
gcloud dns record-sets transaction remove --zone analyzelaw-com --project analyze-law \
    --name="main.analyzelaw.com" \
    --type=A \
    --ttl=300 $NEW_IP_ADDRESS
#    --ttl=300 "195.201.100.22"
gcloud dns record-sets transaction add --zone analyzelaw-com --project analyze-law \
    --name="main.analyzelaw.com" \
    --type=A \
    --ttl=300 $NEW_IP_ADDRESS
#    --ttl=300 "195.201.100.22"
gcloud dns record-sets transaction execute --zone analyzelaw-com --project analyze-law
gcloud dns record-sets list --zone analyzelaw-com --project analyze-law
