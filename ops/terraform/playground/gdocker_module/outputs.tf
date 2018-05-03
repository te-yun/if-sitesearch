//value = "${google_compute_instance.sitesearch.*.network_interface.0.address}"
// TODO did not work
output "other" {
  value = "aha"
}

output "ip_address" {
  value = "${google_compute_instance.sitesearch.*.network_interface.0.address}"
}

output "external_ip_address" {
  value = "${google_compute_instance.sitesearch.*.network_interface.0.access_config.0.nat_ip}"
}