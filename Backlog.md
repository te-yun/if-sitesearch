Backlog
=

intrafind.de DE siteId: 9f374ad4-57e6-46b8-84a4-8a6db8881eb5
intrafind.de EN siteId: ba6200ed-f977-4a8a-b1ec-0d78f0c15e01
# now
* publish on Google G Suite Marketplace https://developers.google.com/gsuite/marketplace/
* introduce Site Search, incl. search bar to intrafind.de
* fix: updating a page via its primary ID which should not be possible 
    * currently one can also create a new ID this way
* update GitHub listing 
* ~~product frontpage routing~~
* Sitemap XML support, coordinate with iFinder core team
    * let the *crawler* talk to Site Search API to feed its content

# next
* introduce second machine with iFinder Core
* introduce load balancer for if-sitesearch 
* "sponsored by" branding for Site Search for freemium offers 
* status.html page that show the results of TeamCity's SmokeTest
* Customer Feedback Channel: Slack vs Twak
* try https://www.elastic.co/cloud/enterprise
    * start as the first {if-lab} project
        * introduce and sell the concept of **R&D**
* talk to Johannes about Search Service / Elasticsearch tuning
* "Site Search in a minute" on YouTube 
* Marketing website / product frontpage
* save siteSecret in persistent store, not in the ElasticSearch document

# future
* explore http://ktor.io/assets/js/jekyll-search.js as alternative to search bar & finder
* Results close to the actual appearance == preserve HTML in results (SB)
* PDF converter support, Beni? (SB)
* payment button
* support for types / category-specific search
* automatic disaster failover

# Issues
 * (SB)Die Autocomplete-Funktion ist wirklich toll, aber die eigentliche Suche arbeitet nach anderen Regeln und sucht nach exakten Begriffen?
    z.B. auf die Suche nach "Kran" liefert mir Autocomplete die Vorschläge "Kranprojekt" und "Kranlösung".
    Der SearchController findet für die Query "Kranlösung" aber nichts, nur für den exakten Begriff "Kranlösungen".


# Ideas from stake holders to be considered 

* (SB) Stop words
* page types, e.g. marketing vs projects 
* semantic page grouping 
    1page + 2page +3page = OneArticle
    
# USP
* without ads
* Frankfurt DC

# Feedback for 


