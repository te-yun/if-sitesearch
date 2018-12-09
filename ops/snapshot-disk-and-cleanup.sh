#!/usr/bin/env sh

# activate or set active the compute-engine-admin service user
# run this command if you never activated the compute-engine-admin service user
# or let it be like below
gcloud auth activate-service-account --key-file=/srv/minion/compute-engine-admin.json

# loop over all disks which in this project included and makes snapshots
# naming the snapshot:  imageName-date -> i.e.:dev-2018-05-11-1526043327
gcloud compute disks list --format='value(name,zone)'| while read DISK_NAME ZONE; do
  gcloud compute disks snapshot $DISK_NAME --snapshot-names ${DISK_NAME:0:31}-$(date "+%Y-%m-%d-%s") --zone $ZONE
done

# removing snapshots of all images older than 30 days
if [[ $(uname) == "Linux" ]]; then
  from_date=$(date -d "-30 days" "+%Y-%m-%d")
else
  from_date=$(date -v -30d "+%Y-%m-%d")
fi
gcloud compute snapshots list --filter="creationTimestamp<$from_date" --uri | while read SNAPSHOT_URI; do
   gcloud compute snapshots delete $SNAPSHOT_URI  --quiet
done


# TODO make such builds fail https://ci.sitesearch.cloud/viewLog.html?tab=buildLog&buildTypeId=IntraFind_Oss_DailySnapshotsAndCleanups&buildId=616155&_focus=63#_state=58
# TODO fix this script 