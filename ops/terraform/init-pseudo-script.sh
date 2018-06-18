#!/usr/bin/env sh
return 0

#execute as UID 1000 user
#gcloud config set disable_prompts true
#gcloud config set compute/zone europe-west3-c

gcloud compute disks delete elasticsearch-disk-1
gcloud compute disks delete elasticsearch-disk-2
gcloud compute disks delete elasticsearch-disk-quorum
gcloud compute disks delete searchservice-disk-1
gcloud compute disks delete searchservice-disk-2

cd /srv/if-sitesearch/ops/terraform/prod-provisioning/

terraform destroy

#sudo -u ubuntu terraform destroy -target=module.kubernetes.null_resource.Sitesearch-Elasticsearch
#sudo -u ubuntu kubectl delete -f /home/ubuntu/kube_elasticsearch.yaml

#sudo -u ubuntu terraform destroy -target=module.kubernetes.null_resource.Sitesearch-SearchService
#sudo -u ubuntu kubectl delete -f /home/ubuntu/kube_searchservice.yaml

#---------elasticsearch normal disks---------------

gcloud compute disks create elasticsearch-disk-1 --size 200 --type pd-ssd
gcloud compute instances attach-disk dev --disk elasticsearch-disk-1
sudo mkfs.ext4 -m 0 -F -E lazy_itable_init=0,lazy_journal_init=0,discard /dev/sdb
sudo mkdir /mnt/elasticsearch-disk-1
sudo mount /dev/sdb /mnt/elasticsearch-disk-1

gcloud compute disks create elasticsearch-disk-2 --size 200 --type pd-ssd
gcloud compute instances attach-disk dev --disk elasticsearch-disk-2
sudo mkfs.ext4 -m 0 -F -E lazy_itable_init=0,lazy_journal_init=0,discard /dev/sdc
sudo mkdir /mnt/elasticsearch-disk-2
sudo mount /dev/sdc /mnt/elasticsearch-disk-2

#---------elasticsearch quorum disk---------------

gcloud compute disks create elasticsearch-disk-quorum --size 200 --type pd-ssd
gcloud compute instances attach-disk dev --disk elasticsearch-disk-quorum
sudo mkfs.ext4 -m 0 -F -E lazy_itable_init=0,lazy_journal_init=0,discard /dev/sdd
sudo mkdir /mnt/elasticsearch-disk-quorum
sudo mount /dev/sdd /mnt/elasticsearch-disk-quorum

#---------searchservice disks---------------

gcloud compute disks create searchservice-disk-1 --size 200 --type pd-ssd
gcloud compute instances attach-disk dev --disk searchservice-disk-1
sudo mkfs.ext4 -m 0 -F -E lazy_itable_init=0,lazy_journal_init=0,discard /dev/sde
sudo mkdir /mnt/searchservice-disk-1
sudo mount /dev/sde /mnt/searchservice-disk-1

gcloud compute disks create searchservice-disk-2 --size 200 --type pd-ssd
gcloud compute instances attach-disk dev --disk searchservice-disk-2
sudo mkfs.ext4 -m 0 -F -E lazy_itable_init=0,lazy_journal_init=0,discard /dev/sdf
sudo mkdir /mnt/searchservice-disk-2
sudo mount /dev/sdf /mnt/searchservice-disk-2

#---------all disks---------------

sudo cp -r /srv/sitesearch-elasticsearch/data/elasticsearch /mnt/elasticsearch-disk-1/elasticsearch
sudo cp -r /srv/sitesearch-elasticsearch-1/data/elasticsearch /mnt/elasticsearch-disk-2/elasticsearch
sudo cp -r /srv/sitesearch-elasticsearch-quorum/data/elasticsearch /mnt/elasticsearch-disk-quorum/elasticsearch
sudo cp -r /srv/sitesearch-search-service/* /mnt/searchservice-disk-1/
sudo cp -r /srv/sitesearch-search-service-1/* /mnt/searchservice-disk-2/

sudo chown 1000:1000 -R /mnt/elasticsearch-disk-1
sudo chown 1000:1000 -R /mnt/elasticsearch-disk-2
sudo chown 1000:1000 -R /mnt/elasticsearch-disk-quorum
sudo chown 1000:1000 -R /mnt/searchservice-disk-1
sudo chown 1000:1000 -R /mnt/searchservice-disk-2


# detach disks before terraform; also possible via VM Instance UI
gcloud compute instances detach-disk dev --disk elasticsearch-disk-1
gcloud compute instances detach-disk dev --disk elasticsearch-disk-2
gcloud compute instances detach-disk dev --disk elasticsearch-disk-quorum
gcloud compute instances detach-disk dev --disk searchservice-disk-1
gcloud compute instances detach-disk dev --disk searchservice-disk-2

#sudo -u ubuntu terraform apply
terraform apply