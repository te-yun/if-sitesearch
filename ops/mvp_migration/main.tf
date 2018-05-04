module "google" {
	count="${var.total_vm_count - length(var.ip_pool)}"
	source="./modules/provision/google_module"
	project = "${local.gcloud_project}"
	credentials = "${local.credentials}"
	name_machine = "google"
}

module "kubernetes" {
  //depends on google module
	source="./modules/setup/kubernetes_module"

	count="${var.total_vm_count}"
	ip_address_list="${concat(var.ip_pool,module.google.external_ip_address_list)}"
	ssh_private_key = "${local.ssh_private_key}"
	ssh_user = "${local.ssh_user}"
	docker_registry = {
			"address" = "${local.docker-address}"
			"username" = "${local.docker-username}"
			"password" = "${local.docker-password}"
			"secret_name" = "sitesearch-secret"
	}
}
