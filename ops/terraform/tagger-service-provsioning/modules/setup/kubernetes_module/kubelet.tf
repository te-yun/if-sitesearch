#Kubernetes cluster master node
module "leader" {

  source = "leader"

  ssh_user = "${var.ssh_user}"
  ssh_private_key = "${var.ssh_private_key}"
  ip_address = "${var.ip_address_list[0]}"

  start_up_commands = "${var.start_up_commands}"
  init_commands = "${var.init_commands}"

  network_name = "sitesearch"
  docker_registry = {
    "address" = "${var.docker_registry["address"]}"
    "username" = "${var.docker_registry["username"]}"
    "password" = "${var.docker_registry["password"]}"
    "secret_name" = "${var.docker_registry["secret_name"]}"
  }
}

resource "null_resource" "kubelet" {
  depends_on = [
    "module.leader"]

  count = "${var.count>0? var.count - 1 : 0}"

  provisioner "remote-exec" {
    inline = "${data.template_file.startup_script.*.rendered[count.index]}"
  }

  provisioner "remote-exec" {
    when = "destroy"
    inline = "${data.template_file.shutdown_script.*.rendered[count.index]}"
  }

  connection {
    user = "${var.ssh_user}"
    //Access IP of newly provisioned machine
    host = "${var.ip_address_list[count.index +1]}"
    type = "ssh"
    private_key = "${var.ssh_private_key}"
  }
}

#Tagging Service
resource "null_resource" "Tagging-Service" {

  depends_on = [
    "module.leader",
    "null_resource.kubelet"]

  triggers = {
    kubernetes_configuration_hash = "${sha1(file("./modules/setup/kubernetes_module/kubernetes_templates/kube_tagging-service-template.yaml"))}"
  }

  //turning the rendered template to a file and then executing
  provisioner "remote-exec" {
    inline = [
      "export KUBECONFIG=$HOME/admin.conf ",
      "cat <<EOT > kube_tagging-service.yaml",
      "${data.template_file.kubernetes_tagging-service.rendered}",
      "EOT",
      "kubectl apply -f kube_tagging-service.yaml"]
  }

  provisioner "remote-exec" {
    when = "destroy"
    inline = [
      "export KUBECONFIG=$HOME/admin.conf",
      "kubectl delete -f kube_tagging-service.yaml --force"]
  }

  connection {
    user = "${var.ssh_user}"
    //Access IP of newly provisioned machine
    host = "${var.ip_address_list[0]}"
    type = "ssh"
    private_key = "${var.ssh_private_key}"
  }
}
