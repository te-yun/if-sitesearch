<img src="https://api.sitesearch.cloud/theme/logo.png" alt="Site Search" width="600" style="max-width:100%;">

[![Travis CI Build Status](https://travis-ci.org/intrafind/if-sitesearch.svg)](https://travis-ci.org/intrafind/if-sitesearch)
[![TeamCity CI Build Status](https://ci.sitesearch.cloud/app/rest/builds/buildType(id:IntraFind_Oss_Build)/statusIcon)](https://ci.sitesearch.cloud/viewType.html?buildTypeId=IntraFind_Oss_Build)


sitesearch-dispatcher
=
Site Search Dispatcher is an upstream service of [Site Search](https://api.sitesearch.cloud), 
an on-demand SaaS offering for providing websites with an externally managed search capability. 

# About

* [OpenAPI 3.0 Specification](https://api.sitesearch.cloud/swagger-ui.html)
* [Product roadmap](http://if-wiki:8090/pages/viewpage.action?pageId=14714226)
* [JIRA project](http://jira/projects/SITESEARCH)
* [Release](https://api.sitesearch.cloud) / [DEV Release](https://dev.sitesearch.cloud)
* [SCM repository](http://ml-if-git/sitesearch/if-sitesearch)
* [Container](http://ml-if-git/sitesearch/docker-container)
* [Documentation](https://github.com/intrafind/if-sitesearch/blob/master/docs/faq.md)
* [Product Integration](https://github.com/intrafind/if-sitesearch/blob/master/docs/Site%20Search%20Product%20Overview.pdf)
* [Product Abstract](http://if-wiki:8090/pages/viewpage.action?pageId=14714226).
    
***> > > [DEMO](https://api.sitesearch.cloud) < < <***    
    
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
    
## CI configuration
Required environment variables:

    * BUILD_NUMBER = "extracted from CI"
    * GITHUB_PUBLIC_ACCESS_TOKEN = "your long living GitHub token"
    * DEV_SKIP_FLAG = "true" # skip some oAuth2 checks in integration tests to enable additional test scenarios
    * SCM_HASH = "Git commit hash, extracted from CI"
    * SECURITY_USER_PASSWORD = "Basic Auth password" # for iFinder Core access   
    
# Attribution
* Made with ♥ in Munich