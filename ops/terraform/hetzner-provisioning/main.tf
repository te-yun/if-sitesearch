provider "hcloud" {
  token = "${file("~/.ssh/hetzner-api-token-analyze-law.txt")}"
}

resource "hcloud_floating_ip" "main" {
  type = "ipv4"
  server_id = "${hcloud_server.node.id}"
  description = "DNS A record"
  home_location = "nbg1"

  //  provisioner "local-exec" {
  //    command = "echo ${hcloud_floating_ip.main.ip_address}  >> applied-main.txt"
  //  }
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

  provisioner "file" {
    source = "~/Desktop/al-tagger/if-meta-jdk-installer-1.8.0.161.bin"
    destination = "if-meta-jdk-installer-1.8.0.161.bin"
  }

  provisioner "remote-exec" {
    inline = [
      "apt-get update",
      "apt-get install python -y",
      "chmod +x /root/*.bin",
      "./if-meta-jdk-installer-*.bin -s",
      //      "./if-meta-jdk-installer-1.8.0.161.bin -s",
      //      "ip addr add ${hcloud_floating_ip.main.ip_address} dev eth0",
    ]
  }

  provisioner "local-exec" {
    command = "echo ${hcloud_server.node.ipv4_address} >> applied-node.txt"
  }

  //    provisioner "local-exec" {
  //      command = "echo ${hcloud_floating_ip.main.ip_address}  >> applied-main.txt"
  //    }
}

resource "hcloud_ssh_key" "minion" {
  name = "minion"
  public_key = "${file("~/.ssh/if-minion-id_rsa.pub")}"
}

//resource "hcloud_floating_ip" "main" {
//  type = "ipv4"
//  server_id = "${hcloud_server.node.id}"
//  description = "DNS A record"
//  home_location = "nbg1"
//
//  provisioner "local-exec" {
//    command = "echo ${hcloud_floating_ip.main.ip_address}  >> applied-main.txt"
//  }
//}
