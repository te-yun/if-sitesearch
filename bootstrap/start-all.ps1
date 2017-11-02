#!/usr/bin/env pwsh

Set-StrictMode -Version Latest
$ErrorActionPreference = "Stop"
$PSDefaultParameterValues["*:ErrorAction"] = "Stop"

iex ./start-sitesearch-elasticsearch.ps1
& ./start-sitesearch-search-service.ps1