//module "main" {
//}

variable "tenant" {
  type = "string"
  default = "node"
  description = "Customer Name"
}

provider "hcloud" "Hetzner" {
  token = "${file("~/.ssh/hetzner-api-token-analyze-law.txt")}"
}

resource "hcloud_floating_ip" "main" {
  //  depends_on = [
  //    "hcloud_server.node"
  //  ]

  type = "ipv4"
  server_id = "${hcloud_server.node.id}"
  description = "DNS 'A' record"
  home_location = "nbg1"

  provisioner "local-exec" "ip" {
    //    command = "echo ${hcloud_floating_ip.main.id} 'blub'  >> applied-main.txt"
    command = "echo blub > applied-main.txt"
  }
}

resource "hcloud_server" "node" {
  name = "${var.tenant}-${count.index}"
  count = "1"
  datacenter = "nbg1-dc3"
  image = "ubuntu-18.04"
  server_type = "cx31-ceph"
  ssh_keys = [
    "${hcloud_ssh_key.minion.id}"
  ]

  provisioner "file" "al-license" {
    source = "~/Desktop/al-tagger/intrafind-dev.lic"
    destination = "/srv/al-contract-analyzer.lic"
  }

  provisioner "local-exec" "server" {
    command = "echo $OLD_IP_ADDRESS--$NEW_IP_ADDRESS > ${path.module}/aapplied-node.txt"
    environment {
      OLD_IP_ADDRESS = "${hcloud_server.node.ipv4_address}"
      NEW_IP_ADDRESS = "195.201.100.22"
    }
  }

  provisioner "remote-exec" "install" {
    inline = [
      "sleep 25 && apt-get update && apt-get install docker.io -y",
    ]
  }
}

resource "hcloud_ssh_key" "minion" {
  name = "minion"
  public_key = "${file("~/.ssh/if-minion-id_rsa.pub")}"
}

