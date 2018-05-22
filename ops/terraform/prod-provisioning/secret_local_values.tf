locals{
  credentials = "${file("/home/bernard/.gcloud/SiteSearch-GCloud-Key.json")}"
  ssh_user = "bernard"
  ssh_private_key = "${file("/home/bernard/.ssh/id_rsa.pem")}"
  gcloud_project = "sitesearch-195009"
  docker-address = "${chomp(file("/home/bernard/.intrafind/docker-registry-address"))}"
  docker-username = "${chomp(file("/home/bernard/.intrafind/docker-registry-username"))}"
  docker-password = "${chomp(file("/home/bernard/.intrafind/docker-registry-password"))}"
}