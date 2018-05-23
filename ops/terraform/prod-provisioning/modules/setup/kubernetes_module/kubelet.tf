#Kubernetes cluster master node
module "master"{

	source="master"

	ssh_user="${var.ssh_user}"
	ssh_private_key="${var.ssh_private_key}"
	ip_address="${var.ip_address_list[0]}"

	start_up_commands="${var.start_up_commands}"
	init_commands="${var.init_commands}"

	network_name = "sitesearch"
	docker_registry = {
			"address" = "${var.docker_registry["address"]}"
			"username" = "${var.docker_registry["username"]}"
			"password" = "${var.docker_registry["password"]}"
			"secret_name" = "${var.docker_registry["secret_name"]}"
	}

	master_node_name = "${var.master_node_name}"
	google_project = "${var.google_project}"

}

resource "null_resource" "kubelet"{
	depends_on=["module.master"]

	count="${var.count>0? var.count - 1 : 0}"

	//template file provisioner for kubeadm.conf
	provisioner "remote-exec" {
		inline=["cat <<EOT > kubeadm.conf",
						"${data.template_file.kubeadm_conf.rendered}",
						"EOT"]
	}

	//template file provisioner for gce.conf
	provisioner "remote-exec" {
		inline=["cat <<EOT > gce.conf",
						"${data.template_file.gce_conf.rendered}",
						"EOT"]
	}

	provisioner "remote-exec" {
		inline="${data.template_file.startup_script.*.rendered[count.index]}"
	}

	provisioner "remote-exec" {
		when="destroy"
		inline="${data.template_file.shutdown_script.*.rendered[count.index]}"
	}

	connection {
			user = "${var.ssh_user}"
			//Access IP of newly provisioned machine
			host = "${var.ip_address_list[count.index +1]}"
			type = "ssh"
			private_key="${var.ssh_private_key}"
	}
}

#Anything needed to get the container structure to work
#Contains Persistent Volume Claims / Storage Class / Role Bindings / etc.
resource "null_resource" "Kubernetes-Metaobjects" {

	depends_on=["module.master"]

	triggers = {
		kubernetes_configuration_hash = "${sha1(file("./modules/setup/kubernetes_module/kubernetes_templates/kube_metaobjects-template.yaml"))}"
	}

	//turning the rendered template to a file and then executing
	provisioner "remote-exec" {
		inline=["export KUBECONFIG=$HOME/admin.conf ",
						"cat <<EOT > kube_metaobjects.yaml",
						"${data.template_file.kubernetes_metaobjects.rendered}",
						"EOT",
						"if [[ $(kubectl get pv elasticsearch-pv-1) ]]; then kubectl replace -f kube_metaobjects.yaml ; else kubectl apply -f kube_metaobjects.yaml; fi"]
	}

	connection {
			user = "${var.ssh_user}"
			//Access IP of newly provisioned machine
			host = "${var.ip_address_list[0]}"
			type = "ssh"
			private_key="${var.ssh_private_key}"
	}

}

#Sitesearch-API
#resource "null_resource" "Sitesearch-Api"{
#
#	depends_on=["module.master","null_resource.Kubernetes-Metaobjects"]
#
#	triggers = {
#		kubernetes_configuration_hash = "${sha1(file("./modules/setup/kubernetes_module/kubernetes_templates/kube_sitesearch_api-template.yaml"))}"
#		scale_elasticsearch = "${var.kube_counts["sitesearch"]}"
#	}
#
#	//turning the rendered template to a file and then executing
#	provisioner "remote-exec" {
#		inline=["export KUBECONFIG=$HOME/admin.conf ",
#						"cat <<EOT > kube_sitesearch_api.yaml",
#						"${data.template_file.kubernetes_sitesearch.rendered}",
#						"EOT",
#						"kubectl apply -f kube_sitesearch_api.yaml"]
#	}
#
#	connection {
#			user = "${var.ssh_user}"
#			//Access IP of newly provisioned machine
#			host = "${var.ip_address_list[0]}"
#			type = "ssh"
#			private_key="${var.ssh_private_key}"
#	}
#}

#Tagging Service
resource "null_resource" "Tagging-Service"{

	depends_on=["module.master","null_resource.Kubernetes-Metaobjects"]

	triggers = {
		kubernetes_configuration_hash = "${sha1(file("./modules/setup/kubernetes_module/kubernetes_templates/kube_tagging-service-template.yaml"))}"
	}

	//turning the rendered template to a file and then executing
	provisioner "remote-exec" {
		inline=["export KUBECONFIG=$HOME/admin.conf ",
						"cat <<EOT > kube_tagging-service.yaml",
						"${data.template_file.kubernetes_tagging-service.rendered}",
						"EOT",
						"if [[ $(kubectl get pod if-tagger) ]]; then kubectl replace -f kube_tagging-service.yaml ; else kubectl apply -f kube_tagging-service.yaml; fi"]
	}

	connection {
			user = "${var.ssh_user}"
			//Access IP of newly provisioned machine
			host = "${var.ip_address_list[0]}"
			type = "ssh"
			private_key="${var.ssh_private_key}"
	}
}

#Elasticsearch
resource "null_resource" "Sitesearch-Elasticsearch"{

	depends_on=["module.master","null_resource.Kubernetes-Metaobjects"]

	triggers = {
		kubernetes_configuration_hash = "${sha1(file("./modules/setup/kubernetes_module/kubernetes_templates/kube_elasticsearch-template.yaml"))}"
		scale_elasticsearch = "${var.kube_counts["elasticsearch"]}"
	}

	//turning the rendered template to a file and then executing
	provisioner "remote-exec" {
		inline=["export KUBECONFIG=$HOME/admin.conf ",
						"cat <<EOT > kube_elasticsearch.yaml",
						"${data.template_file.kubernetes_elasticsearch.rendered}",
						"EOT",
						"if [[ $(kubectl get statefulset elasticsearch) ]]; then kubectl replace -f kube_elasticsearch.yaml ; else kubectl apply -f kube_elasticsearch.yaml; fi"]
	}

	connection {
			user = "${var.ssh_user}"
			//Access IP of newly provisioned machine
			host = "${var.ip_address_list[0]}"
			type = "ssh"
			private_key="${var.ssh_private_key}"
	}
}

#Seach Service
resource "null_resource" "Sitesearch-SearchService"{

	depends_on=["null_resource.Sitesearch-Elasticsearch","module.master","null_resource.Kubernetes-Metaobjects"]

	triggers = {
		kubernetes_configuration_hash = "${sha1(file("./modules/setup/kubernetes_module/kubernetes_templates/kube_searchservice-template.yaml"))}"
		scale_elasticsearch = "${var.kube_counts["elasticsearch"]}"
		scale_searchservice = "${var.kube_counts["searchservice"]}"
	}

	//turning the rendered template to a file and then executing
	provisioner "remote-exec" {
		inline=["export KUBECONFIG=$HOME/admin.conf ",
						"cat <<EOT > kube_searchservice.yaml",
						"${data.template_file.kubernetes_searchservice.rendered}",
						"EOT",
						"if [[ $(kubectl get statefulset sitesearch-searchservice) ]]; then kubectl replace -f kube_searchservice.yaml ; else kubectl apply -f kube_searchservice.yaml; fi"]
	}

	connection {
			user = "${var.ssh_user}"
			//Access IP of newly provisioned machine
			host = "${var.ip_address_list[0]}"
			type = "ssh"
			private_key="${var.ssh_private_key}"
	}
}
