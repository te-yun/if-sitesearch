provider "hcloud" {
  token = "${file("~/.ssh/hetzner-api-token-analyze-law.txt")}"
}

//resource "hcloud_ssh_key" "alex" {
//  name = "alex"
//  public_key = "${file("~/.ssh/id_rsa.pub")}"
//}

resource "hcloud_server" "node" {
  name = "node-${count.index}"
  count = "1"
  datacenter = "nbg1-dc2"
  image = "ubuntu-18.04"
  server_type = "cx11-ceph"
}

