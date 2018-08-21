module "upstream" {
  source = "./modules/upstream/internet_module"
}

variable "tenant" {
  type = "string"
  default = "node"
  description = "Customer Name"
}

variable "password" {
  type = "string"
  default = "invalid dummy"
  description = "Default Password"
}

variable "hetzner_cloud_analyze_law" {
  type = "string"
  default = "invalid dummy"
  description = "Analyze Law API Token"
}

locals {
  hcloud_token = "${var.hetzner_cloud_analyze_law}"
  server_image = "ubuntu-18.04"
  datacenter_prefix = "nbg1"
}

output "floating_ip" "IPv4" {
  value = "${hcloud_floating_ip.main.ip_address}"
  sensitive = false
}

output "ip" "IPv4" {
  value = "${hcloud_server.node.ipv4_address}"
}

provider "hcloud" "Hetzner" {
  token = "${var.hetzner_cloud_analyze_law}"
}

//resource "hcloud_ssh_key" "minion" {
//  name = "minion"
//  public_key = "${file("~/.ssh/if-minion-id_rsa.pub")}"
//}

resource "hcloud_server" "node" {
  name = "${terraform.workspace}-${var.tenant}-${count.index}"
  count = "1"
  datacenter = "${local.datacenter_prefix}-dc3"
  image = "${local.server_image}"
  server_type = "cx21-ceph"
  ssh_keys = [
    "minion"
    //    "${hcloud_ssh_key.minion.name}"
  ]

  provisioner "file" "al-license" {
    source = "~/my/project/intrafind/docker-container/intrafind-dev.license"
    destination = "/srv/al-contract-analyzer.license"
  }

  //  provisioner "local-exec" "server" {
  //    command = "echo $OLD_IP_ADDRESS - $NEW_IP_ADDRESS > ${path.module}/applied-node.txt"
  //    environment {
  //      OLD_IP_ADDRESS = "${hcloud_server.node.ipv4_address}"
  //      NEW_IP_ADDRESS = "94.130.188.186"
  //    }
  //  }

  provisioner "remote-exec" "install" {
    inline = [
      "sleep 20 && apt-get update && apt-get install docker.io -y",
      "docker login docker-registry.sitesearch.cloud --username sitesearch --password ${var.password}",
      //      "docker run --name al-tagger -d -v /srv/contract-analyzer:/srv/contract-analyzer -p 9603:9603 docker-registry.sitesearch.cloud/intrafind/al-tagger:release",
      "docker ps",
    ]
  }
}

provider "docker" "container runtime" {
  host = "195.201.29.34"
}

provider "google" "GCE Cloud" {
  project = "analyze-law"
}

resource "hcloud_floating_ip" "main" {
  type = "ipv4"
  server_id = "${hcloud_server.node.id}"
  description = "DNS 'A' record"
  home_location = "${local.datacenter_prefix}"

  provisioner "remote-exec" "setup" {
    inline = [
      "ip addr add ${hcloud_floating_ip.main.ip_address} dev eth0",
      "docker run --name al-tagger -d -v /srv/contract-analyzer:/srv/contract-analyzer -p 9603:9603 docker-registry.sitesearch.cloud/intrafind/al-tagger:release",
      "docker run --name al-api -d -p 8001:8001 docker-registry.sitesearch.cloud/intrafind/if-sitesearch",
    ]

    connection {
      host = "${hcloud_server.node.ipv4_address}"
    }
  }
}
