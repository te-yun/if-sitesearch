Backlog
=

# now
* smoke tests for CORS
* introduce Site Search, incl. search bar to intrafind.de
* fix: updating a page via its primary ID which should not be possible 
    * currently one can also create a new ID this way
* ~~finish FAQ~~
* update GitHub listing 
* Admin page
* ~~httpS all over: CI, 9605~~
* ~~product frontpage routing~~
* Sitemap XML support, coordinate with iFinder core team
    * let the *crawler* talk to Site Search API to feed its content

# next
* Customer Feedback Channel: Slack vs Twak
* Smoketest
* try https://www.elastic.co/cloud/enterprise
    * start as the first {if-lab} project
        * introduce and sell the concept of **R&D**
* talk to Johannes about Search Service / Elasticsearch tuning
* "Site Search in a minute" on YouTube 
* Marketing website / product frontpage
* save siteSecret in persistent store, not in the ElasticSearch document

# future
* payment button
* support for types / category-specific search
* automatic disaster failover

# Ideas from stake holders to be considered 

* page types, e.g. marketing vs projects 
* semantic page grouping 
    1page + 2page +3page = OneArticle
