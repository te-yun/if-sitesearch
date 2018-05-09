#!/usr/bin/env bash

# activate or set active the compute-engine-admin service user
gcloud auth activate-service-account --key-file=/srv/minion/compute-engine-admin.json
# make a snapshot of dev
gcloud compute disks snapshot dev --zone europe-west3-c