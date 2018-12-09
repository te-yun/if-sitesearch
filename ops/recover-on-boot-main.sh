#!/usr/bin/env sh

sudo mkfs.ext4 -F /dev/disk/by-id/scsi-0HC_Volume_1441441
mkdir /mnt/elk
mount -o discard,defaults /dev/disk/by-id/scsi-0HC_Volume_1441441 /mnt/elk


