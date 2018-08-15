//module "main" {
//}

provider "hcloud" {
  token = "${file("~/.ssh/hetzner-api-token-analyze-law.txt")}"
}

resource "hcloud_floating_ip" "main" {
  depends_on = [
    "hcloud_server.node"
  ]

  type = "ipv4"
  server_id = "${hcloud_server.node.id}"
  description = "DNS 'A' record"
  home_location = "nbg1"

  provisioner "local-exec" "ip" {
    //    command = "echo ${hcloud_floating_ip.main.id} 'blub'  >> applied-main.txt"
    command = "echo 'blub' >> applied-main.txt"
  }
}

resource "hcloud_server" "node" {
  name = "node-${count.index}"
  count = "1"
  datacenter = "nbg1-dc3"
  image = "ubuntu-18.04"
  server_type = "cx31-ceph"
  ssh_keys = [
    "${hcloud_ssh_key.minion.id}"
  ]


  provisioner "file" "al-license" {
    source = "~/Desktop/al-tagger/intrafind-dev.lic"
    //    source = "/root/al-tagger/al-tagger/intrafind-dev.lic"
    //    source = "main.tf"
    //    destination = "/root/main.tf"
    destination = "/srv/al-contract-analyzer.lic"
    //
    //    connection {
    //      type     = "ssh"
    //      user     = "root"
    //      host = "195.201.29.34"
    ////      password = "${var.root_password}"
    //      private_key = "${file("~/.ssh/if-minion-id_rsa")}"
    //    }
  }

  provisioner "file" "if-jdk" {
    source = "~/Desktop/al-tagger/if-meta-jdk-installer-1.8.0.161.bin"
    destination = "/srv/if-meta-jdk-installer-1.8.0.161.bin"
  }

  provisioner "file" "if-base-installer" {
    source = "~/Desktop/al-tagger/if-sv-base-installer-1.8.2.17-46323.bin"
    destination = "/srv/if-sv-base-installer-1.8.2.17-46323.bin"
  }

  provisioner "file" "if-converter-installer" {
    source = "~/Desktop/al-tagger/if-sv-converter-installer-3.7.0.3-52525.bin"
    destination = "/srv/if-sv-converter-installer-3.7.0.3-52525.bin"
  }

  provisioner "file" "if-tagging-installer" {
    source = "~/Desktop/al-tagger/if-sv-tagging-installer-2.6.0.5-51045.bin"
    destination = "/srv/if-sv-tagging-installer-2.6.0.5-51045.bin"
  }

  provisioner "file" "al-clause-detection" {
    source = "~/.m2/repository/com/intrafind/if-sv-clausedetection/0.0.0.2-SNAPSHOT/if-sv-clausedetection-0.0.0.2-SNAPSHOT.jar"
    destination = "/srv/if-sv-clausedetection-0.0.0.2-SNAPSHOT.jar"
  }

  provisioner "file" "al-tagger-resources" {
    //    tar --exclude .git --exclude .idea -zcvf if-sv-tagging-resources.tgz if-sv-tagging-resources
    source = "~/my/project/intrafind/if-sv-tagging-resources.tgz"
    destination = "/srv/if-sv-tagging-resources.tgz"
  }

  provisioner "file" "if-converter-config" {
    source = "/home/intrafind/services/if-sv-converter/config.cfg"
    destination = "/srv/if-converter-config.cfg"
  }

  provisioner "file" "contract-example" {
    source = "~/Downloads/20180726152906.docx"
    destination = "/srv/20180726152906.docx"
  }

  provisioner "remote-exec" {
    //    script = "setup.sh"
    scripts = [
      //      "provide-artifacts.sh",
      "setup.sh"
    ]
  }

  provisioner "local-exec" "server" {
    command = "echo ${hcloud_server.node.ipv4_address} > applied-node.txt"
  }
}

resource "hcloud_ssh_key" "minion" {
  name = "minion"
  public_key = "${file("~/.ssh/if-minion-id_rsa.pub")}"
}

