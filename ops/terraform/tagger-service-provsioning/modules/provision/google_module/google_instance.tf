variable "project" {}
variable "credentials" {}
variable "count" {
  default = 1
}
variable "name_machine" {}

provider "google" {
  credentials = "${var.credentials}"
  project = "${var.project}"
}

resource "google_compute_instance" "vm" {

  count = "${var.count}"
  zone = "europe-west3-b"
  name = "${var.name_machine}${count.index}"
  machine_type = "n1-standard-1"

  //Image to boot on
  boot_disk {
    initialize_params {
      image = "ubuntu-os-cloud/ubuntu-1604-lts"
    }
  }

  network_interface {
    network = "default"
    access_config {
      //If this block is omitted, there will be no public IP
    }
  }
}

