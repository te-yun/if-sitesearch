output "join_command" {
	value = "${lookup(data.external.swarm_token_reader.result, "join_command")}"
}
