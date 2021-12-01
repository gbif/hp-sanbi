var siteTheme = gbifReactComponents.themeBuilder.extend({baseTheme: 'light', extendWith: {
  primary: themeStyle.colors.primary
}});

var siteConfig = {
  rootPredicate: {
    "type": "equals", 
    "key": "publishingCountry", 
    "value": "ZA"
  },
  excludedFilters: ['publishingCountryCode'], // it makes no sense to show this filter as we scope the data by a single value
};
