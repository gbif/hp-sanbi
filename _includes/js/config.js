var siteTheme = gbifReactComponents.themeBuilder.extend({
  baseTheme: 'light', extendWith: {
    primary: themeStyle.colors.primary
  }
});

var siteConfig = {
  routes: {
    enabledRoutes: ['occurrenceSearch', 'literatureSearch']
  },
  occurrence: {
    rootPredicate: {
      "type": "equals",
      "key": "publishingCountry",
      "value": "ZA"
    },
    excludedFilters: ['publishingCountryCode'], // it makes no sense to show this filter as we scope the data by a single value
  },
  literature: {
    rootFilter: {
      predicate: {
        type: 'or', predicates: [
          {
            type: 'in',
            key: 'countriesOfResearcher',
            values: ['ZA']
          },
          {
            type: 'in',
            key: 'countriesOfCoverage',
            values: ['ZA']
          }
        ]
      }
    },
    highlightedFilters: ['q', 'countriesOfResearcher', 'countriesOfCoverage', 'year']
  }
};
