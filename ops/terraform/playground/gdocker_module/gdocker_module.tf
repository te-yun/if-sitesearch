variable "docker-registry" {
  type = "map"
  default = {
    "address" = "docker-registry.sitesearch.cloud"
    "username" = "sitesearch"
    "password" = ""
  }
}
variable "project" {}
variable "credentials" {}
variable "count" {
  default = 1
}
variable "ssh_user" {}
variable "ssh_private_key" {}
variable "name_machine" {}
variable "docker_port" {
  default = "2375"
}
variable "start-up-commandss" {
  type = "list"
}
variable "app-home-" {
  type = "list"
}
variable "docker-router" {}

provider "google" {
  credentials = "${var.credentials}"
  project = "${var.project}"
  alias = "sitesearch"
}

resource "google_compute_instance" "sitesearch" {
  provider = "google.sitesearch"
  count = "${var.count}"
  name = "${var.name_machine}-${count.index}"
  zone = "europe-west3-c"
  machine_type = "f1-micro"

  tags = [
    "sitesearch",
    "ops",
    "dev",
    "terraform",
  ]

  labels {
    env = "live"
  }

  boot_disk {
    initialize_params {
      image = "debian-cloud/debian-9"
    }
  }
  network_interface {
    network = "default"
    access_config {
    }
  }

  provisioner "file" "docker-routerr" {
    source = "${var.docker-router}"
    destination = "/home/${var.ssh_user}/"
    connection {
      type = "ssh"
      user = "${var.ssh_user}"
      host = "${self.network_interface.0.access_config.0.nat_ip}"
      private_key = "${var.ssh_private_key}"
    }
  }

  provisioner "file" "router-conf" {
    source = "${var.app-home-[count.index]}"
    destination = "/home/${var.ssh_user}/"
    connection {
      type = "ssh"
      user = "${var.ssh_user}"
      host = "${self.network_interface.0.access_config.0.nat_ip}"
      private_key = "${var.ssh_private_key}"
    }
  }

  metadata_startup_script = "echo 'metadata_startup_script' > /metadata_startup_script.txt"
  provisioner "remote-exec" {
    inline = [
      "sudo touch /touch_alex_inline-${count.index}.test",
      "${var.start-up-commandss}",
    ]

    connection {
      type = "ssh"
      user = "${var.ssh_user}"
      host = "${self.network_interface.0.access_config.0.nat_ip}"
      private_key = "${var.ssh_private_key}"
    }
  }
}
