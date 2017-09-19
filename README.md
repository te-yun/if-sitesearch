<img src="https://sitesearch.cloud/theme/logo.png" alt="Site Search" width="600" style="max-width:100%;">

[![Travis CI Build Status](https://travis-ci.org/intrafind/if-sitesearch.svg)](https://travis-ci.org/intrafind/if-sitesearch)
[![TeamCity CI Build Status](http://ci.sitesearch.cloud/app/rest/builds/buildType(id:IntraFind_Oss_Build)/statusIcon)](http://ci.sitesearch.cloud/viewType.html?buildTypeId=IntraFind_Oss_Build)


sitesearch-dispatcher
=
Here you can find a *non-technical* business focused abstract about [Site Search](http://if-wiki:8090/pages/viewpage.action?pageId=14714226).

# About

* [OpenAPI 3.0 Specification](https://sitesearch.cloud/swagger-ui.html)
* [Product roadmap](http://if-wiki:8090/pages/viewpage.action?pageId=14714226)
* [JIRA project](http://jira/projects/SITESEARCH)
* [Release](https://sitesearch.cloud) / [DEV Release](https://dev.sitesearch.cloud)
* [SCM repository](http://ml-if-git/sitesearch/if-sitesearch)
* [Container](http://ml-if-git/sitesearch/docker-container)
    
***> > > [DEMO](https://sitesearch.cloud) < < <***    
    
# Configuration

Add a [configuration profile](https://docs.spring.io/spring-boot/docs/current/reference/html/boot-features-external-config.html#boot-features-external-config-profile-specific-properties) 
to the `config` folder inside this project.

Required environment variables:

    * SECURITY_USER_PASSWORD # for iFinder Core access 
    * GITHUB_PUBLIC_ACCESS_TOKEN = "your long living GitHub token"
    * DEV_SKIP_FLAG = "true" # skip some oAuth2 checks in integration tests to enable additional test scenarios   

# Operations

* [PowerShell required](https://github.com/PowerShell/PowerShell)

## Run 
    ./run.ps1
    http://localhost:8001
    
## Test
    ./test.ps1

## Load Test
    ./load-test.ps1

## Release
    ./release.ps1
    
## Postman
    ./*.postman_collection.json
    
## CI configuration
Required environment variables:

    * BUILD_NUMBER = "extracted from CI"
    * GITHUB_PUBLIC_ACCESS_TOKEN = "your long living GitHub token"
    * DEV_SKIP_FLAG = "true" # skip some oAuth2 checks in integration tests to enable additional test scenarios
    * SCM_HASH = "Git commit hash, extracted from CI"
    * SECURITY_USER_PASSWORD = "Basic Auth password" # for iFinder Core access   
    
# Attribution
* Made with ♥ in Munich