const NATIONAL_CHECKLIST = 'f5dc22ca-0bb1-4692-8a97-cc7ac54d7ed9'; // South African National Plant Checklist (SANPC) — plant-only, so it already scopes occurrences to Plantae
const COL = '7ddf754f-d193-4cc9-b351-99906754a03b'; // Catalogue of Life — secondary taxonomy (replaces the retired GBIF Backbone d7dddbf4)
const COUNTRY = 'ZA'; // South Africa

var siteConfig = {
  "version": 3,
  defaultChecklistKey: NATIONAL_CHECKLIST,
  availableChecklistKeys: [NATIONAL_CHECKLIST, COL],
  "pages": [
    {
      "id": "occurrenceSearch"
    },
    {
      "id": "literatureSearch"
    },
    {
      "id": "datasetKey"
    }
  ],
  "disableInlineTableFilterButtons": false,
  "dataHeader": {
    "enableApiPopup": false,
    "enableInfoPopup": false
  },
  "theme": {
    "primary": themeStyle.colors.primary,
    "borderRadius": 3,
    "stickyOffset": "0px"
  },
  "maps": {
    "mapStyles": {
      "defaultProjection": "MERCATOR",
      "defaultMapStyle": "BRIGHT",
      "options": {
        "MERCATOR": [
          "BRIGHT",
          "NATURAL"
        ]
      }
    }
  },
  "languages": [
    {
      "code": "en",
      "localeCode": "en",
      "label": "English",
      "default": true,
      "textDirection": "ltr",
      "iso3LetterCode": "eng",
      "cmsLocale": "en-GB",
      "gbifOrgLocalePrefix": "",
      "mapTileLocale": "en"
    }
  ],
  "messages": {},
  "occurrenceSearch": {
    "scope": {
      "type": "and",
      "predicates": [
        {
          "type": "equals",
          "key": "publishingCountry",
          "value": COUNTRY
        },
        {
          "type": "equals",
          "key": "country",
          "value": COUNTRY
        },
        {
          "type": "equals",
          "key": "checklistKey",
          "value": NATIONAL_CHECKLIST
        }
      ]
    },
    "excludedFilters": [
      "publishingCountry",
      "country"
    ]
  },
  "collectionSearch": {},
  "institutionSearch": {},
  "datasetSearch": {},
  "publisherSearch": {},
  "literatureSearch": {
    "scope": {
      "type": "or",
      "predicates": [
        {
          "type": "in",
          "key": "countriesOfResearcher",
          "values": [
            COUNTRY
          ]
        },
        {
          "type": "in",
          "key": "countriesOfCoverage",
          "values": [
            COUNTRY
          ]
        }
      ]
    },
    "highlightedFilters": [
      "q",
      "countriesOfResearcher",
      "countriesOfCoverage",
      "year"
    ]
  }
};
