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

provider "hcloud" "Hetzner" {
  token = "${file("~/.ssh/hetzner-api-token-analyze-law.txt")}"
}

resource "hcloud_server" "node" {
  name = "${var.tenant}-${count.index}"
  count = "1"
  datacenter = "nbg1-dc3"
  image = "ubuntu-18.04"
  server_type = "cx21-ceph"
  ssh_keys = [
    "${hcloud_ssh_key.minion.id}"
  ]

  provisioner "file" "al-license" {
    source = "~/my/project/intrafind/docker-container/intrafind-dev.license"
    destination = "/srv/al-contract-analyzer.license"
  }

  provisioner "local-exec" "server" {
    command = "echo $OLD_IP_ADDRESS - $NEW_IP_ADDRESS > ${path.module}/applied-node.txt"
    environment {
      OLD_IP_ADDRESS = "${hcloud_server.node.ipv4_address}"
      NEW_IP_ADDRESS = "94.130.188.186"
    }
  }

  provisioner "remote-exec" "install" {
    inline = [
      "sleep 20 && apt-get update && apt-get install docker.io -y",
      "docker login docker-registry.sitesearch.cloud --username sitesearch --password ${var.password}",
      "docker run --name al-tagger -d -v /opt:/srv -p 9603:9603 docker-registry.sitesearch.cloud/intrafind/al-tagger:release",
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

resource "hcloud_ssh_key" "minion" {
  name = "minion"
  public_key = "${file("~/.ssh/if-minion-id_rsa.pub")}"
}

resource "hcloud_floating_ip" "main" {
  type = "ipv4"
  server_id = "${hcloud_server.node.id}"
  description = "DNS 'A' record"
  home_location = "nbg1"

  provisioner "remote-exec" "setup" {
    inline = [
      "ip addr add ${hcloud_floating_ip.main.ip_address} dev eth0",
    ]

    connection {
      host = "${hcloud_server.node.ipv4_address}"
    }
  }

  provisioner "local-exec" "ip" {
    command = "echo ${hcloud_floating_ip.main.id} ${hcloud_floating_ip.main.ip_address}  >> applied-main.txt"
  }
}
