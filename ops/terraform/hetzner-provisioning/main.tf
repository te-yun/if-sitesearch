provider "hcloud" {
  token = "${file("~/.ssh/hetzner-api-token-analyze-law.txt")}"
}

resource "hcloud_floating_ip" "main" {
  type = "ipv4"
  server_id = "${hcloud_server.node.id}"
  description = "DNS A record"
  home_location = "nbg1"

  provisioner "local-exec" {
    command = "echo ${hcloud_floating_ip.main.ip_address}  >> applied-main.txt"
  }
}

resource "hcloud_server" "node" {
  //  depends_on = [ "hcloud_floating_ip.main" ]

  name = "node-${count.index}"
  count = "1"
  datacenter = "nbg1-dc3"
  image = "ubuntu-18.04"
  server_type = "cx11-ceph"
  ssh_keys = [
    "${hcloud_ssh_key.minion.id}"
  ]


  provisioner "file" "al-license" {
    source = "~/my/project/intrafind/docker-container/tagging-service/intrafind.lic"
    destination = "al-tagger.lic"
  }

  provisioner "file" "if-jdk" {
    source = "~/Desktop/al-tagger/if-meta-jdk-installer-1.8.0.161.bin"
    destination = "if-meta-jdk-installer-1.8.0.161.bin"
  }

  provisioner "file" "if-base-installer" {
    source = "~/Desktop/al-tagger/if-sv-base-installer-1.8.2.17-46323.bin"
    destination = "if-sv-base-installer-1.8.2.17-46323.bin"
  }

  provisioner "file" {
    source = "~/Desktop/al-tagger/if-sv-converter-installer-3.7.0.3-52525.bin"
    destination = "if-sv-converter-installer-3.7.0.3-52525.bin"
  }
  //
  //  provisioner "file" {
  //    source = "~/Desktop/al-tagger/if-sv-tagging-installer-2.6.0.5-51045.bin"
  //    destination = "if-sv-tagging-installer-2.6.0.5-51045.bin"
  //  }

  provisioner "remote-exec" {
    inline = [
      "apt-get update",
      "sleep 5",
      "apt-get install python -y",
      "chmod +x /root/*.bin",
      "./if-meta-jdk-installer-*.bin -s",
      "./if-sv-base-installer-*.bin -l al-tagger.lic -s",
      //      "./if-sv-converter-installer-*.bin -l al-tagger.lic -s",
    ]
  }

  provisioner "local-exec" {
    command = "echo ${hcloud_server.node.ipv4_address} > applied-node.txt"
  }

  //    provisioner "local-exec" {
  //      command = "echo ${hcloud_floating_ip.main.ip_address}  >> applied-main.txt"
  //    }
}

resource "hcloud_ssh_key" "minion" {
  name = "minion"
  public_key = "${file("~/.ssh/if-minion-id_rsa.pub")}"
}

