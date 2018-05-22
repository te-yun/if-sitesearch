/* Remote State not functioning yet. Fix after ifinder core runs stabily
terraform {
  backend "gcs" {
    bucket  = "tf-dev"
    prefix  = "terraform/state"
		project = "sitesearch-195009"
  }
}*/

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

	master_node_name = "instance-1"
	google_project = "${local.gcloud_project}"

	kube_counts = {
		//iFinder Core
		elasticsearch = 3
		searchservice = 2

    //SiS_API
    sitesearch = 1

		//The values from here are just for documentation and do not change anything
		tagging_service = 1
	}
}
