data "template_file" "startup_script" {
	template = "${file("${path.module}/setup.sh.tfemplate")}"
	count = "${var.count>0? var.count - 1 : 0}"

	vars {
		ssh_user="${var.ssh_user}"
		init_commands="${join("\n",var.init_commands)}"
		start_up_commands="${join("\n",var.start_up_commands)}"
		docker_registry_address="${var.docker_registry["address"]}"
		docker_registry_username="${var.docker_registry["username"]}"
		docker_registry_password="${var.docker_registry["password"]}"
		kube_join_command="${module.master.join_command}"
	}
}

data "template_file" "shutdown_script" {
	template = "${file("${path.module}/shutdown.sh.tfemplate")}"
	count = "${var.count>0? var.count - 1 : 0}"

	vars {
	}
}

data "template_file" "gce_conf" {
	template = "${file("${path.module}/config_templates/gce-template.conf")}"
	vars {
		google-project-id="${var.google_project}"
	}
}

data "template_file" "kubeadm_conf" {
	template = "${file("${path.module}/config_templates/kubeadm-template.conf")}"
	vars {
		node-name="${var.master_node_name}"
	}
}

data "template_file" "kubernetes_metaobjects" {
	template = "${file("${path.module}/kubernetes_templates/kube_metaobjects-template.yaml")}"
	vars {
		//no variables
	}
}

//data "template_file" "kubernetes_tagging-service" {
//	template = "${file("${path.module}/kubernetes_templates/kube_tagging-service-template.yaml")}"
//	vars {
//		//no variables
//	}
//}

data "template_file" "kubernetes_sitesearch" {
	template = "${file("${path.module}/kubernetes_templates/kube_sitesearch_api-template.yaml")}"
	vars {
		count = "${var.kube_counts["sitesearch"] > 0 ? var.kube_counts["sitesearch"] : 1}" //has to be >=1
	}
}

data "template_file" "kubernetes_elasticsearch" {
	template = "${file("${path.module}/kubernetes_templates/kube_elasticsearch-template.yaml")}"
	vars {
		count = "${var.kube_counts["elasticsearch"] > 0 ? var.kube_counts["elasticsearch"] : 1}" //has to be >=1
	}
}

data "template_file" "kubernetes_searchservice" {
	template = "${file("${path.module}/kubernetes_templates/kube_searchservice-template.yaml")}"
	vars {
		count = "${var.kube_counts["searchservice"]}"
		elasticsearch_count = "${var.kube_counts["elasticsearch"] > 0 ? var.kube_counts["elasticsearch"] : 1}" //has to be >=1
	}
}