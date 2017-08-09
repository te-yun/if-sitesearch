Backlog
=

# now
* update all feeds
* update a single feed

# next

* Searchbar Epic
    * searchbar does not contain any UI elements but search box & magnifier button
    * searchbar can be embedded into any page by just using 
        * <script src="searchbar.js> and 
        * <script>const searchbarInit = {"tenantId": "bb767618-c70a-4edd-9f15-b5cce7aeda0e", "anchorDOMid": "mySearchbarContainerDOMelement"};</script>
    * every searchbar request contains a `teananId` query parameter
    * the `query` parameter should be passed instead of `sSearchTerm` query parameter for queries
        
# future

* get the credentials out of SCM (use Vault?)
* add search provider to "Google Sites"
    > https://sites.google.com/a/loxal.net/portal/system/app/pages/admin/settings 
    > "Enable and configure search option" 
    > Sitesearch also available as Google Gadget