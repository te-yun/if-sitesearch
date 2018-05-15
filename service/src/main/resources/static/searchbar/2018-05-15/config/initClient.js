IFS.initClient({
      sbTarget: '#searchbar',
      sitesearch: true,
      siteId: SITE_ID_MIGROS,
      customConfig: {
        overwrite: {
          "components.searchbar.typeaheadProps.hint": false,
          "components.searchbar.resultlist.resulttype.all.hitTemplate": "hit-template",
          // Replace "/data/sitesearch.hbs" with actual url to Template
          "components.searchbar.templatesUrl" : "/data/migros.hbs"
        }
      }
    });