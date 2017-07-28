Set-StrictMode -Version Latest
$ErrorActionPreference = "Stop"
$PSDefaultParameterValues["*:ErrorAction"] = "Stop"

curl 172.18.0.1:9605/json/state?method=get --data param0='[system]'
curl sitesearch.cloud:9605/json/state?method=get --data param0='[system]'

curl -X POST 172.18.0.1:9605/json/index?method=index --data-urlencode param0='[{"id" : "1","fields" : {"_str.body":["Hello, World!"]}}]'
curl -X POST 172.18.0.1:9605/json/index?method=index --data-urlencode param0='[{"id" : "2","fields" : {"_str.body":["Hello, Munich!"]}}]'
curl -X POST 172.18.0.1:9605/json/index?method=index --data-urlencode param0='[{"id" : "2","fields" : {"_str.body":["Sitesearch is a great search service."]}}]'

 curl 172.18.0.1:9605/json/search?method=search --data-urlencode param0=*
# curl 172.18.0.1:9605/json/search?method=search --data-urlencode param0=field:content
# curl 172.18.0.1:9605/json/autocomplete?method=search --data param0=hello | python -m json.tool