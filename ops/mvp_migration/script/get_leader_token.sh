#!/usr/bin/env sh
#TerraForm needs output in JSON format
jq -n -R --arg join_command "$(ssh -q -oStrictHostKeyChecking=no -i $3 $1@$2 sudo kubeadm token create --print-join-command)" '{"join_command":$join_command}'
