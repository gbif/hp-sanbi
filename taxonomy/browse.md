---
layout: default
title: Browse
permalink: /taxonomy/browse
description: Browse the checklist of south africa
klass: fullwidth
lang-ref: species-browse
---

<script src="https://cdn.jsdelivr.net/gh/CatalogueOfLife/portal-components@{{site.col.version}}/umd/col-browser.min.js" ></script>

<div id="tree"></div>

<script>
'use strict';
// v2 components no longer read or write the URL themselves; withRouting wires
// them to this static site's paths and navigates by full page reload.
const URLTree = ColBrowser.withRouting(ColBrowser.Tree, {
  kind: 'tree',
  mode: 'path',
  navigation: 'reload',
  paths: {
    taxon: '/taxonomy/taxon/',
    tree: '/taxonomy/browse',
    search: '/taxonomy/search'
  }
});

const domContainer = document.querySelector('#tree');
ColBrowser.ReactDOM.createRoot(domContainer).render(
  ColBrowser.React.createElement(
    URLTree,
    {
      datasetKey: '{{site.col.catalogueKey}}',
      defaultTaxonKey: '{{site.col.defaultTaxonKey}}',
      citation: 'top'
    }
  )
);
</script>
