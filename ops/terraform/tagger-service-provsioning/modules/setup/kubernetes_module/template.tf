data "template_file" "startup_script" {
  template = "${file("${path.module}/setup.sh.tfemplate")}"
  count = "${var.count>0? var.count - 1 : 0}"

  vars {
    ssh_user = "${var.ssh_user}"
    init_commands = "${join("\n",var.init_commands)}"
    start_up_commands = "${join("\n",var.start_up_commands)}"
    docker_registry_address = "${var.docker_registry["address"]}"
    docker_registry_username = "${var.docker_registry["username"]}"
    docker_registry_password = "${var.docker_registry["password"]}"
    kube_join_command = "${module.leader.join_command}"
  }
}

data "template_file" "shutdown_script" {
  template = "${file("${path.module}/shutdown.sh.tfemplate")}"
  count = "${var.count>0? var.count - 1 : 0}"

  vars {
  }
}

data "template_file" "kubernetes_tagging-service" {
  template = "${file("${path.module}/kubernetes_templates/kube_tagging-service-template.yaml")}"
  vars {
    //no variables
  }
}