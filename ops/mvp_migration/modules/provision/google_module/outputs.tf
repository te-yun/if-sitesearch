output "internal_ip_address_list" {
  value = "${google_compute_instance.vm.*.network_interface.0.address}"
}

output "external_ip_address_list" {
  value = "${google_compute_instance.vm.*.network_interface.0.access_config.0.nat_ip}"
}