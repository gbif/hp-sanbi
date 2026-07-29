---
layout: documentation
sideNavigation: sidenav.taxonomy
title: Taxon
permalink: /taxonomy/taxon
---

<!--distribution map is opt-in in v2 and needs maplibre loaded separately-->
<link rel="stylesheet" href="https://unpkg.com/maplibre-gl@5/dist/maplibre-gl.css" />
<script src="https://unpkg.com/maplibre-gl@5/dist/maplibre-gl.js"></script>

<script src="https://cdn.jsdelivr.net/gh/CatalogueOfLife/portal-components@{{site.col.version}}/umd/col-browser.min.js" ></script>

<div id="taxon"></div>
<div id="gbifTaxonLinks"></div>

<script>
'use strict';
// v2 components no longer read or write the URL themselves; withRouting reads
// the taxon id off the end of the path and navigates by full page reload.
// No `source` path: this site has no source dataset page, and omitting it makes
// v2 render those names as plain text rather than as broken links.
const URLTaxon = ColBrowser.withRouting(ColBrowser.Taxon, {
  kind: 'taxon',
  mode: 'path',
  navigation: 'reload',
  paths: {
    taxon: '/taxonomy/taxon/',
    tree: '/taxonomy/browse',
    search: '/taxonomy/search'
  }
});

const domContainer = document.querySelector('#taxon');
ColBrowser.ReactDOM.createRoot(domContainer).render(
  ColBrowser.React.createElement(
    URLTaxon,
    {
      datasetKey: '{{site.col.catalogueKey}}',
      showDistributionMap: true,
      gbifChecklistKey: '{{site.col.gbifDatasetKey}}',
      pageTitleTemplate: 'SANBI | __taxon__',
      citation: 'top'
    }
  )
);
</script>

<script>
  const id = location.pathname.substr(location.pathname.lastIndexOf('/') + 1);
  var el = document.getElementById('gbifTaxonLinks');
  var link = `/occurrence/search?taxonKey=${id}`;
  el.innerHTML = `<a class="button is-primary" href="${link}">Search occurrences</a>`;
</script>
