module "sitesearch" {
  docker-registry = {
    "password" = "${uuid()}"
  }
  count = 1
  name_machine = "main"
  project = "woven-alpha-150909"
  source = "gdocker_module"
  credentials = "${file("/srv/minion/compute-engine-default-service-account.json")}"
  ssh_private_key = "${file("/home/minion/.ssh/id_rsa")}"
  ssh_user = "alexander_orlov"
  docker_port = "2375"
  start-up-commandss = [
    "echo start-up-commands > start-up-commands.txt",
  ]
  docker-router = "router"
  app-home- = [
    "app-home-0",
    "app-home-1",
  ]
}

data "external" "custom-script" {
  program = [
    "sh",
    "custom.sh",
    "${uuid()}"]
}