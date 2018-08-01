# to set to switch between zones
//variable "zones" {
//    type = "map"
//    default = {
//        zone0 = "nbg1-dc3"
//        zone1 = "fsn1-dc8"
//    }
//}
# you should provide your api token with following command on cli
# TF_VAR_hcloud_token=your_secret_api_token
# terraform init
# terraform plan
# terraform apply
# terraform destroy

provider "hcloud" {
  token = "${local.hcloud_token}"
}

//resource "hcloud_ssh_key" "default" {
//  name = "Terraform Example"
//  public_key = "${file("~/.ssh/id_rsa.pub")}"
//}

resource "hcloud_server" "al" {
  name = "node-${count.index}"
  count = "1"
  datacenter = "nbg1-dc3"
  image = "ubuntu-18.04"
  server_type = "cx11-ceph"
}

locals {
  hcloud_token = "${file("~/hetzner-api-token-analyze-law.txt")}"
}
