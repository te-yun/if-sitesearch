//IMPORTANT NOTE: This file should only be changed to alter the behaviour of the code.
//NO CONFIGURATION HERE

//This file provisions extra VMs in the Google Cloud if not enough machines are already running

variable "google_project"{
	description = "The ID of the Google Compute Engine project."
}
variable "credentials"{
	description = "The credentials JSON file for access of the Google Compute Engine."
}
variable "count"{
	description = "Number of Google VMs to start."
	default = 1
}
variable "google_vm_name"{
	description = "Name of the Google VM to start. This acts as a template - the actual name will be 'google_vm_name'+'index_of_vm', since there are multiple VMs."
}
variable "google_vm_type"{
	description = "Type of Google VM to start."
	default = "n1-standard-2"
}
variable "google_vm_image"{
	description = "Name of the image to use. The name has to follow the naming standard of the Google Compute Engine."
	default = "ubuntu-os-cloud/ubuntu-1604-lts"
}

//The Google provider gives TerraForm API access to the Google Compute Engine
provider "google" {
	credentials = "${var.credentials}"
	project     = "${var.google_project}"
}

//This describes the VMs to be started in the Google Compute Engine
resource "google_compute_instance" "vm" {

	//These are variables specific to the "google_compute_instance" resource type
	//The variables are filled according to the inputs into this module.
	count = "${var.count}"
	zone = "europe-west3-b"
	name = "${var.google_vm_name}${count.index}"
	machine_type = "${var.google_vm_type}"

	//This is needed, so that the Kubernetes cluster will later have the rights to access disks for storage of container data.
	service_account {
		scopes = ["compute-rw"]
	}

	//Image to boot on. The image name is derived from the variables.
	boot_disk {
		initialize_params {
			image = "${var.google_vm_image}"
		}
	}

	network_interface {
		network = "default"
		access_config {
			//If this block is omitted, there will be no public IP
		}
	}

	//This is needed, because Kubernetes attaches disks for mounts into containers
	lifecycle {
			ignore_changes = ["attached_disk"]
	}

}

