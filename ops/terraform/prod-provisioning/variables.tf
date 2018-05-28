variable "ip_pool"{
  description = "The pool of IPs that already exist."
  type = "list"
}
variable "total_vm_count"{
  description = "The total amount of desired VMs. (IPs in ip_pool + VMs still to provision)"
}