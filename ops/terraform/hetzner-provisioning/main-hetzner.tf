# to set to switch between zones
variable "zones" {
    type = "map"
    default = {
        zone0 = "nbg1-dc3"
        zone1 = "fsn1-dc8"
    }
}
# you should provide your api token with following command on cli
# TF_VAR_hcloud_token=your_secret_api_token
# terraform init
# terraform plan
# terraform apply
# terraform destroy
variable "hcloud_token" {}

# Configure the Hetzner Cloud Provider
provider "hcloud" {
  token = "${var.hcloud_token}"
}

resource "hcloud_server" "test1" {
  name = "vm-${count.index+1}"
  count = "2"
  datacenter = "${lookup(var.zones, "zone${count.index % 2}")}"
  image = "debian-9"
  server_type = "cx11"
}
