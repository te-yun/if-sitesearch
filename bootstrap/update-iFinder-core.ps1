#!/usr/bin/env pwsh

Set-StrictMode -Version Latest
$ErrorActionPreference = "Stop"
$PSDefaultParameterValues["*:ErrorAction"] = "Stop"

iex ./bootstrap/start-sitesearch-elasticsearch.ps1
& ./bootstrap/start-sitesearch-search-service.ps1