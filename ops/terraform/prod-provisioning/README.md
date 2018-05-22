# Steps before provisioning

* Scopes anpassen bei VM / gce.conf mit token befüllen
* Provision disks, format them and give them proper permissions ( minion should be owner )
* secret_local_values
* TerraForm.fvars IP
* change google_instance.tf if you are going to start a machine
* permissions for private ssh key for minion
* change master_node_name in main.tf = > instance-name