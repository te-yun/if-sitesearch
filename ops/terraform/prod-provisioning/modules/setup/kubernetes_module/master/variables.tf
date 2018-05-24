variable "ssh_user"{}
variable "ssh_private_key"{}
variable "ssh_private_key_path"{}
variable "ip_address"{}

variable "start_up_commands" { type = "list" default = []}
variable "init_commands" { type = "list" default = []}

variable "network_name" {}

variable "depends_on" { type = "list" default = []}

variable "docker_port" { default = "2375" }
variable "docker_registry" {
  type    = "map"
  default = {
    "address"     = ""
    "username"    = ""
    "password"    = ""
    "secret_name" = ""
  }
}

variable "master_node_name" {}
variable "google_project" {}
