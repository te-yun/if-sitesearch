FAQ
=

* What is Site Search?
    * Site Search is an on-demand SaaS offering from IntraFind Software AG to enable website operators 
    to provide search functionality for their websites.

* What is the difference between **sites** and **pages**?
    * A **site** is a *website* that can contain thousands of **pages**. 
    You may have two **sites**: *en.example.com* and *de.example.com* 
    and each may contain thousands of pages in the respective language.

* What is a **tenant**?
    * A tenant is an **organizational entity** that can manage **dozens of independent sites**.
    You may have a company that is assigned to a tenant.

* How can I index a website and make it searchable?
  * Currently a website needs to expose an **RSS / Atom feed** to make it easily searchable.
  This is the fastest & easiest way to get up and running. Use this ***curl command***
  
        curl -X POST https://api.sitesearch.cloud/sites/rss?feedUrl=https%3A%2F%2Fintrafind.de%2Fshare%2Fenterprise-search-blog.xml
  
  ...to [call our API accordingly](https://sitesearch.cloud/swagger-ui.html#!/site45controller/indexNewRssFeedUsingPOST). 
  Still you can make a website searchable that does not expose any feeds by using our API and indexing a website page by page, 
  cf. "How can I index a page and make it searchable?".  
  
* How can I **index a page**, automatically **creating a new site**, and make it searchable?
    * After executing this ***curl command***, you will also obtain the *siteId* and *siteSecret* of the newly created site. 

            curl -X POST \
              https://api.sitesearch.cloud/pages \
              -H 'content-type: application/json' \
              -d '{ 
                "url" : "https://example.com/page",
                "title": "Test Page",
                "body": "Test Content"
            }'

* How can I **index a page**, within an **already existing site**, and make it searchable?
    * TODO add an example curl

* How can I **update** an already indexed page?
    * TODO

* How can I **delete** an indexed page?
    * TODO

* What is a **site secret**?
    * A site secret is a token that you should keep confidential and not publish it to any public repository. 
    The site secret enables you to **add new pages and update existing pages** within a site. 
    You need to provide a *siteSecret* as a query parameter to authorize operations that modify the index of a site.

* Do I need the **search bar** to use Site Search?
    * No, not necessarily; the **search bar is a sample implementation** to quickly show you how 
    a search bar may look like and interact with the *Site Search service*.
    Still, the **search bar** is a production-grade implementation and ready for production deployments.

* Can I use my own search bar with Site Search?
    * Yes, you can use any search bar, written in any language that also runs on native platforms as long as it follows
    [Site Search' API specification](https://sitesearch.cloud/swagger-ui.html).

* Can I *customize* the layout and/or design of the search bar?   
    * Yes, you can *fully customize the appearance of the search bar* using HBS templates.
    * Alternative you can customize the search bar overriding its CSS classes which is appropriate for minor customizations only.

* How can I make my website searchable?
    * The easiest & quickest way is to use the [Site Search Gadget](https://sitesearch.cloud/sitesearch-gadget.html)
    to **create an index** from an RSS / Atom feed and make it **instantly searchable** without even embedding it into a website.
    If your website does not expose any feeds, you need to use our open [API](https://sitesearch.cloud/swagger-ui.html#!/page45controller/indexNewSiteUsingPOST)
    to **index your website page by page** calling the API.
    
* Where can I find an API documentation and specification for Site Search?
    * [Site Search' API](https://sitesearch.cloud/swagger-ui.html) ist technically documented according 
    to the OpenAPI 3.0 specification, using Swagger. Not only, you can lookup the required schemas 
    but you can also, use the API right from your browser. 

* What does Site Search cost?
    * Currently we have no fixed plans as Site Search is still in BETA. 
    As soon as Site Search meets all our production requirements, we will offer a **free basic plan** 
    and additional **enterprise offerings**.  

* Who is using Site Search?
    * Very soon, following website's search will be powered by Site Search
        * intrafind.de 
        * intrafind.com
        * analyzelaw.com
        
    

