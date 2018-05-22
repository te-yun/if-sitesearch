resource "null_resource" "kubernetes_master"{

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
		inline="${data.template_file.start_up_script.rendered}"
	}

	provisioner "remote-exec" {
		when="destroy"
		inline="${data.template_file.shut_down_script.rendered}"
	}


	connection {
			user = "${var.ssh_user}"
			//Access IP of newly provisioned machine
			host = "${var.ip_address}"
			type = "ssh"
			private_key="${var.ssh_private_key}"
	}
}

data "external" "swarm_token_reader" {
	depends_on=["null_resource.kubernetes_master"]
	#TODO: Export private key file path
	program = ["sh","script/get_leader_token.sh","${var.ssh_user}","${var.ip_address}","/home/bernard/.ssh/id_rsa.pem"]
}
