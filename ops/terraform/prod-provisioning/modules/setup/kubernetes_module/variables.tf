variable "ssh_user"{}
variable "ssh_private_key"{}
variable "ip_address_list"{ type = "list" }

variable "start_up_commands" { type = "list" default = []}
variable "init_commands" { type = "list" default = []}
variable "docker_registry" {
  type    = "map"
  default = {
    "address"     = ""
    "username"    = ""
    "password"    = ""
    "secret_name" = ""
  }
}
variable "count" {}

variable "kube_counts" {
  type = "map"
}

variable "master_node_name" {}
variable "google_project" {}