//module "upstream" {
//  source = "modules/upstream/internet_module"
//}

// Can be added only once per project, which leads to a singleton problem.
// Hence hcloud_ssh_key, should be a default workspace singleton only.
//resource "hcloud_ssh_key" "minion" {
//  name = "minion"
//  public_key = "${file("~/.ssh/if-minion-id_rsa.pub")}"
//}

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

variable "google_al_owner_service_account" {
  type = "string"
  default = "invalid dummy"
  description = "Analyze Law Owner Service Account - Google"
}

locals {
  hcloud_token = "${var.hetzner_cloud_analyze_law}"
  //  server_image = "ubuntu-18.04"
  server_image = "debian-9"
  datacenter_prefix = "nbg1"
}

output "Floating IP" "IPv4" {
  value = "${hcloud_floating_ip.main.ip_address}"
  sensitive = false
}

output "SSH via primary IP" {
  value = "ssh -o StrictHostKeyChecking=no root@${hcloud_server.node.ipv4_address}"
  sensitive = false
}

output "Environment" "server" {
  value = "${terraform.workspace}-${var.tenant} http://${var.tenant}.analyzelaw.com"
}

provider "hcloud" "Hetzner" {
  token = "${var.hetzner_cloud_analyze_law}"
}

resource "hcloud_server" "node" {
  name = "${terraform.workspace}-${var.tenant}-${count.index}"
  count = "1"
  datacenter = "${local.datacenter_prefix}-dc3"
  //  datacenter = "fsn1-dc14"
  image = "${local.server_image}"
  server_type = "cx31"
  ssh_keys = [
    "alex",
    "amer",
    "bachka",
    //    "minion",
  ]

  provisioner "file" "al-license" {
    source = "~/my/project/intrafind/docker-container/intrafind-dev.license"
    destination = "/srv/al-contract-analyzer.license"
  }

  provisioner "file" "al-demo-data" {
    //    tar -zcvf al-demo-data.tgz demo-data; scp root@domain:/opt/al-demo-data.tgz .
    source = "~/my/project/intrafind/docker-container/al-demo-data-2018-09-06.tgz"
    destination = "/opt/al-demo-data.tgz"
  }

  provisioner "remote-exec" "install" {
    inline = [
      //      "sleep 35 && apt-get update && apt-get install docker.io certbot -y",
      //      "sleep 35 && apt-get update && apt-get install -y apt-transport-https ca-certificates curl gnupg2 software-properties-common",

      //      "apt-get update && apt-get install -y apt-transport-https ca-certificates curl gnupg2 software-properties-common",
      "apt-get install -y curl software-properties-common",
      "curl -fsSL https://download.docker.com/linux/debian/gpg | apt-key add -",
      "add-apt-repository \"deb [arch=amd64] https://download.docker.com/linux/debian $(lsb_release -cs) stable\"",
      "apt-get update && apt-get install docker-ce -y",
      "docker login docker-registry.sitesearch.cloud --username sitesearch --password ${var.password}",
      "docker network create main",
      "cd /opt && tar xfz al-demo-data.tgz && mv /opt/demo-data/volumes/analyzelaw_esdata1/_data /opt/al-data && rm -rf /opt/demo-data",
      //      "rm -rf /opt/al-data/nodes",
      "docker run --name elasticsearch -d -v /opt/al-data:/usr/share/elasticsearch/data --env discovery.type=single-node --restart unless-stopped --network main docker.elastic.co/elasticsearch/elasticsearch-oss:6.2.4",
      "docker run --name al-api -d --restart unless-stopped --network main docker-registry.sitesearch.cloud/intrafind/al-api:dev",
      "docker run --name al-tagger -d -v /srv/contract-analyzer:/srv/contract-analyzer --network main docker-registry.sitesearch.cloud/intrafind/al-tagger:release",
      "docker run --name al-router -d -p 8080:8080 -p 9200:9200 -p 9602:9602 -p 9603:9603 -p 80:80 -p 443:443 --restart unless-stopped --network main docker-registry.sitesearch.cloud/intrafind/al-router:latest",
      "docker run --name al-ui -d --restart unless-stopped --network main docker-registry.sitesearch.cloud/intrafind/al-ui:dev",
      "docker ps",
      "docker-compose ps",
      "sed -i -e 's/%sudo\tALL=(ALL:ALL) ALL/%sudo\tALL=(ALL:ALL) NOPASSWD:ALL/g' /etc/sudoers",
      "adduser --disabled-password --gecos '' minion && usermod -aG sudo minion && usermod --lock minion",
      "docker exec -it al-api ./ingest-essential-data.sh",
      //      docker run -it -v $(pwd):/app/ -w /app/ hashicorp/terraform:light plan
      //      docker run -it -v $(pwd):/app hashicorp/terraform:full plan /app
    ]
  }

  provisioner "local-exec" "ssh-alias" {
    command = "cat << EOF >> ~/.bash_ssh_connections\nalias al-${terraform.workspace}='ssh -o StrictHostKeyChecking=no root@${hcloud_server.node.ipv4_address}'\n"
  }

  provisioner "local-exec" "ssh-alias1" {
    command = "bash -c '. ~/.bash_ssh_connections'"
  }

  provisioner "local-exec" "ssh-alias1" {
    command = "bash -c 'alias al-${terraform.workspace}=ls'"
  }
}

//provider "docker" "container runtime" {
//  host = "unix:///var/run/docker.sock"
//}
//
//resource "docker_container" "ubuntu" {
//  image = "${docker_image.ubuntu.latest}"
//  name = "${terraform.workspace}-my"
//}
//
//resource "docker_image" "ubuntu" {
//  name = "ubuntu:bionic"
//}

provider "google" "GCE Cloud" {
  //  credentials = "${file("~/.ssh/analyze-law-owner-service-account.json")}"
  credentials = "${var.google_al_owner_service_account}"
  project = "analyze-law"
}

data "google_dns_managed_zone" "analyze-law" {
  name = "analyzelaw-com"
}

//terraform import google_dns_record_set.tenant-domain analyzelaw-com/demo.analyzelaw.com./A
resource "google_dns_record_set" "tenant-domain" {
  name = "${var.tenant}.${data.google_dns_managed_zone.analyze-law.dns_name}"
  type = "A"
  ttl = 300

  managed_zone = "${data.google_dns_managed_zone.analyze-law.name}"

  rrdatas = [
    "${hcloud_floating_ip.main.ip_address}",
    "${hcloud_server.node.ipv4_address}",
  ]

  provisioner "remote-exec" "attach-ip" {
    inline = [
      "ip addr add ${hcloud_floating_ip.main.ip_address} dev eth0",
    ]

    connection {
      host = "${hcloud_server.node.ipv4_address}"
    }
  }
}

resource "hcloud_floating_ip" "main" {
  type = "ipv4"
  server_id = "${hcloud_server.node.id}"
  home_location = "${local.datacenter_prefix}"
  description = "${terraform.workspace}-${var.tenant}"

  provisioner "remote-exec" "attach-ip1" {
    inline = [
      "ip addr add ${hcloud_floating_ip.main.ip_address} dev eth0",
    ]

    connection {
      host = "${hcloud_server.node.ipv4_address}"
    }
  }
}
