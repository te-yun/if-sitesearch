data "template_file" "start_up_script" {
	template = "${file("${path.module}/setup.sh.tfemplate")}"

	vars {
		init_commands="${join("\n",var.init_commands)}"
		start_up_commands="${join("\n",var.start_up_commands)}"
		ssh_user="${var.ssh_user}"
		docker_registry_address="${var.docker_registry["address"]}"
		docker_registry_username="${var.docker_registry["username"]}"
		docker_registry_password="${var.docker_registry["password"]}"
		docker_registry_secret_name="${var.docker_registry["secret_name"]}"
	}
}

data "template_file" "shut_down_script" {
	template = "${file("${path.module}/shutdown.sh.tfemplate")}"

	vars {
	}
}
