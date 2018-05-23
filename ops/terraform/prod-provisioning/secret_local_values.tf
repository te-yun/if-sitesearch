locals {
  credentials = "${file("/srv/minion/compute-engine-default-service-account.json")}"
  ssh_user = "ubuntu"
  ssh_private_key = "${file("/srv/minion/.ssh/ubuntu-tf_key")}"
  ssh_private_key_path = "/srv/minion/.ssh/ubuntu-tf_key"
  gcloud_project = "woven-alpha-150909"
  docker-address = "docker-registry.sitesearch.cloud"
  docker-username = "sitesearch"
  docker-password = "${chomp(file("/srv/minion/docker-registry-password.txt"))}"
}