variable "kubernetes_existing_nodes_ip_pool"{
  description = "The pool of IPs that already exist."
  type = "list"
}
variable "kubernetes_existing_nodes_names"{
  description = "The names of the VMs that already exist."
  type = "list"
}
variable "total_vm_count"{
  description = "The total amount of desired VMs. (IPs in ip_pool + VMs still to provision)"
}
