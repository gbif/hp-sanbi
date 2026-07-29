---
layout: default
title: Taxon
permalink: /taxonomy/search
description: Search the checklist of south africa
klass: fullwidth
lang-ref: species-search
---

<script src="https://cdn.jsdelivr.net/gh/CatalogueOfLife/portal-components@{{site.col.version}}/umd/col-browser.min.js" ></script>

<div id="search"></div>

<script >
'use strict';
// v2 components no longer read or write the URL themselves; withRouting keeps
// the search filters in the query string and navigates by full page reload.
const URLSearch = ColBrowser.withRouting(ColBrowser.Search, {
  kind: 'search',
  mode: 'path',
  navigation: 'reload',
  paths: {
    taxon: '/taxonomy/taxon/',
    tree: '/taxonomy/browse',
    search: '/taxonomy/search'
  }
});

const domContainer = document.querySelector('#search');
ColBrowser.ReactDOM.createRoot(domContainer).render(
  ColBrowser.React.createElement(
    URLSearch,
    {
      datasetKey: '{{site.col.catalogueKey}}',
      defaultTaxonKey: '{{site.col.defaultTaxonKey}}',
      citation: 'top'
    }
  )
);
</script>
