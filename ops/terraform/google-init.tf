provider "google" {
  credentials = "${file("/home/bernard/.gcloud/SiteSearch-GCloud-Key.json")}"
  project = "sitesearch-195009"
}

resource "google_compute_instance" "vm" {

  zone = "europe-west3-b"
  name = "my-server"
  machine_type = "f1-micro"

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

  /**
   *	Execute commands on the host with ssh after start-up
   *	The commands install docker and make it available from port 2735
   *	The "sed" command replaces the line starting with "ExecStart"
   *	with the String: "ExecStart=/usr/bin/docker daemon
   *	-H fd:// -H tcp://0.0.0.0:2375" in the file:
   *	"/lib/systemd/system/docker.service".
   *	Now all docker commands need the "-H tcp://localhost:2375" flag.
   */
  provisioner "remote-exec" {
    inline = [
      "sudo apt-get -y install docker.io",
      "sudo sed -i '/ExecStart/c\\ExecStart=\\/usr\\/bin\\/docker daemon -H fd:\\/\\/ -H tcp:\\/\\/0.0.0.0:2375' /lib/systemd/system/docker.service",
      "sudo systemctl daemon-reload",
      "sudo service docker restart",
    ]
    connection {
      user = "bernard"
      //Access IP of newly provisioned machine
      host = "${self.network_interface.0.access_config.0.nat_ip}"
      type = "ssh"
      private_key = "${file("/home/bernard/.ssh/id_rsa.pem")}"
    }
  }
}
