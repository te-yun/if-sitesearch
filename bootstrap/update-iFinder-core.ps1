#!/usr/bin/env powershell

Set-StrictMode -Version Latest
$ErrorActionPreference = "Stop"
$PSDefaultParameterValues["*:ErrorAction"] = "Stop"

./start-sitesearch-elasticsearch.ps1
& ./start-sitesearch-search-service.ps1