Backlog
=

intrafind.de DE siteId: afe0ba00-e4de-4ea5-8f4a-0bb1c417979c
intrafind.de EN siteId: 4bcccea2-8bcf-4280-88c7-8736e9c3d15c
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
* Search bar versioning
* API improvement: move /search & /autocomplete beneath /sites/{siteId}/*  
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
* Search bar: dedicated page for search results
    * OR at least make the Search the center point of interaction 
* Site Search in a minute YouTube video
* Display Maps support for visually improved presentation for autocomplete => sitesearch-search-service
* ELK for logging
* Terraform for provisioning 
* Consul for B/G deployment, service discovery, core scalability features
* Autocomplete-Rubrizierung: Wir könnten Websitetreffer und Blog-Treffer unterscheiden (Franz)
* Autocomplete-Blacklisting (Franz)
* https://github.com/yasserg/crawler4j#more-examples (or https://java-source.net/open-source/crawlers) as an alternative to iFinder crawler
* explore http://ktor.io/assets/js/jekyll-search.js as alternative to search bar & finder
* Results close to the actual appearance == preserve HTML in results (SB)
* PDF converter support, Beni? (SB)
* payment button
* support for types / category-specific search
* automatic disaster failover

# Issues
* specify language via query parameter
* enable user to click-away the results list: search bar
* 400s for: https://api.sitesearch.cloud/search?action=WHILEYOUTYPE&search=cre&siteId=  
* ToS: safe to include reference customers? 
* increase "Raw.Semantics"
* improve fuzzines aka "Korrekturvorschlag/Tippfehler?" (POSSIBLE?): Frapart vs Fraport;
* searchbar: fix "empty blank space" when no hits have been found 
* intrafind.de: "crawl" =autocomplete> "crawling" (OK) "crawling-prozess" (without hits)
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


