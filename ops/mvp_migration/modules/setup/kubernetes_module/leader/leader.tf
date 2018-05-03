resource "null_resource" "docker_leader"{

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
	depends_on=["null_resource.docker_leader"]
	#TODO: Export private key file path
	program = ["sh","script/get_leader_token.sh","${var.ssh_user}","${var.ip_address}","/home/bernard/.ssh/id_rsa.pem"]
}
