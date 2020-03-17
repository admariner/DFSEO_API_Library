# Data For SEO API (for javascript)

![code coverage](/docs/badge.svg) [(HTML Coverage Report)](https://1point21interactive.github.io/DFSEO_API_Library/)

## Official Documentation

https://docs.dataforseo.com/v3/

### Purpose

The purpose of this library is to expose the wonderful Data For SEO rest API to javascript applications easily. Without having to write your own API calls and whatnot. It should work out of the box with only needing to provide your account's credentials for authorization purposes.

### Ideal Usage (vanilla JS)

```javascript
require("dotenv").config();
var dfseoAPI = require("DFSEO");

var username = process.env.DATAFORSEO_USERNAME;
var password = process.env.DATAFORSEO_PASSWORD;

var dfseo = new DFSEO(username, password);

dfseo.serp.google.organic
  .taskPost([
    {
      keyword: "test",
      priority: 1,
      location_code: 2840,
      language_code: "en"
    }
  ])
  .then(res => {
    console.log(res);
  })
  .catch(err => {
    console.log(err);
  });
```

### Ideal Usage (TypeScript/ES6)

_Note_ Types are incomplete

```typescript
import { DFSEO } from './';
import * as dotenv from 'dotenv';
dotenv.config();

const username = process.env.DATAFORSEO_USERNAME;
const password = process.env.DATAFORSEO_PASSWORD;

const dfseo = new DFSEO(username, password);

async function main(){
    try{
        const response = await dfseo.serp.google.organic.taskPost([
            keyword: 'test',
            priority: 1,
            location_code: 2840,
            language_code: 'en'
        ]);

        console.log(response);
    }catch(e){
        console.log(e);
    }
}

```

### Support

Currently this library only supports version 3 of the DataForSEO API. _sorry!_

# Documentation Map

Figured it would just be easiest to line up what api calls go to where. For endpoints requiring an id [example](https://docs.dataforseo.com/v3/keywords_data/google_trends/explore/task_get/?php) simply pass the id as an argument to the method. For endpoints requiring a task follow the requirements in the documentation and pass the data as an object to the method (as shown in the examples above).

| API Method                                                                | DFSEO Documentation Link                                                                     |
| ------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `dfseo.serp.google.locations`                                             | https://docs.dataforseo.com/v3/serp/google/locations/?php                                    |
| `dfseo.serp.google.languages`                                             | https://docs.dataforseo.com/v3/serp/google/languages/?php                                    |
| `dfseo.serp.google.organic.taskPost`                                      | https://docs.dataforseo.com/v3/serp/google/organic/task_post/?php                            |
| `dfseo.serp.google.organic.tasksReady`                                    | https://docs.dataforseo.com/v3/serp/google/organic/tasks_ready/?php                          |
| `dfseo.serp.google.organic.taskGet.regular`                               | https://docs.dataforseo.com/v3/serp/google/organic/task_get/regular/?php                     |
| `dfseo.serp.google.organic.taskGet.advanced`                              | https://docs.dataforseo.com/v3/serp/google/organic/task_get/advanced/?php                    |
| `dfseo.serp.google.organic.taskGet.html`                                  | https://docs.dataforseo.com/v3/serp/google/organic/task_get/html/?php                        |
| `dfseo.serp.google.organic.live.regular`                                  | https://docs.dataforseo.com/v3/serp/google/organic/live/regular/?php                         |
| `dfseo.serp.google.organic.live.advanced`                                 | https://docs.dataforseo.com/v3/serp/google/organic/live/advanced/?php                        |
| `dfseo.serp.google.organic.live.html`                                     | https://docs.dataforseo.com/v3/serp/google/organic/live/html/?php                            |
| `dfseo.serp.google.maps.taskPost`                                         | https://docs.dataforseo.com/v3/serp/google/maps/task_post/?php                               |
| `dfseo.serp.google.maps.tasksReady`                                       | https://docs.dataforseo.com/v3/serp/google/maps/tasks_ready/?php                             |
| `dfseo.serp.google.maps.taskGet.advanced`                                 | https://docs.dataforseo.com/v3/serp/google/maps/task_get/advanced/?php                       |
| `dfseo.serp.google.maps.live.advanced`                                    | https://docs.dataforseo.com/v3/serp/google/maps/live/advanced/?php                           |
| `dfseo.serp.google.news.taskPost`                                         | https://docs.dataforseo.com/v3/serp/google/news/task_post/?php                               |
| `dfseo.serp.google.news.tasksReady`                                       | https://docs.dataforseo.com/v3/serp/google/news/tasks_ready/?php                             |
| `dfseo.serp.google.news.taskGet.advanced`                                 | https://docs.dataforseo.com/v3/serp/google/news/task_get/advanced/?php                       |
| `dfseo.serp.google.news.taskGet.html`                                     | https://docs.dataforseo.com/v3/serp/google/news/task_get/html/?php                           |
| `dfseo.serp.google.news.live.advanced`                                    | https://docs.dataforseo.com/v3/serp/google/news/live/advanced/?php                           |
| `dfseo.serp.google.news.live.html`                                        | https://docs.dataforseo.com/v3/serp/google/news/live/html/?php                               |
| `dfseo.serp.google.images.taskPost`                                       | https://docs.dataforseo.com/v3/serp/google/images/task_post/?php                             |
| `dfseo.serp.google.images.tasksReady`                                     | https://docs.dataforseo.com/v3/serp/google/images/tasks_ready/?php                           |
| `dfseo.serp.google.images.taskGet.advanced`                               | https://docs.dataforseo.com/v3/serp/google/images/task_get/advanced/?php                     |
| `dfseo.serp.google.images.taskGet.html`                                   | https://docs.dataforseo.com/v3/serp/google/images/task_get/html/?php                         |
| `dfseo.serp.google.images.live.advanced`                                  | https://docs.dataforseo.com/v3/serp/google/images/live/advanced/?php                         |
| `dfseo.serp.google.images.live.html`                                      | https://docs.dataforseo.com/v3/serp/google/images/live/html/?php                             |
| `dfseo.serp.bing.locations`                                               | https://docs.dataforseo.com/v3/serp/bing/locations/?php                                      |
| `dfseo.serp.bing.languages`                                               | https://docs.dataforseo.com/v3/serp/bing/languages/?php                                      |
| `dfseo.serp.bing.organic.taskPost`                                        | https://docs.dataforseo.com/v3/serp/bing/organic/task_post/?php                              |
| `dfseo.serp.bing.organic.tasksReady`                                      | https://docs.dataforseo.com/v3/serp/bing/organic/tasks_ready/?php                            |
| `dfseo.serp.bing.organic.taskGet.regular`                                 | https://docs.dataforseo.com/v3/serp/bing/organic/task_get/regular/?php                       |
| `dfseo.serp.bing.organic.taskGet.html`                                    | https://docs.dataforseo.com/v3/serp/bing/organic/task_get/html/?php                          |
| `dfseo.serp.bing.organic.live.regular`                                    | https://docs.dataforseo.com/v3/serp/bing/organic/live/regular/?php                           |
| `dfseo.serp.bing.organic.live.html`                                       | https://docs.dataforseo.com/v3/serp/bing/organic/live/html/?php                              |
| `dfseo.serp.bing.localPack.taskPost`                                      | https://docs.dataforseo.com/v3/serp/bing/local_pack/task_post/?php                           |
| `dfseo.serp.bing.localPack.tasksReady`                                    | https://docs.dataforseo.com/v3/serp/bing/local_pack/tasks_ready/?php                         |
| `dfseo.serp.bing.localPack.taskGet.regular`                               | https://docs.dataforseo.com/v3/serp/bing/local_pack/task_get/regular/?php                    |
| `dfseo.serp.bing.localPack.taskGet.html`                                  | https://docs.dataforseo.com/v3/serp/bing/local_pack/task_get/html/?php                       |
| `dfseo.serp.bing.localPack.live.regular`                                  | https://docs.dataforseo.com/v3/serp/bing/local_pack/live/regular/?php                        |
| `dfseo.serp.bing.localPack.live.html`                                     | https://docs.dataforseo.com/v3/serp/bing/local_pack/live/html/?php                           |
| `dfseo.serp.yahoo.locations`                                              | https://docs.dataforseo.com/v3/serp/yahoo/locations/?php                                     |
| `dfseo.serp.yahoo.languages`                                              | https://docs.dataforseo.com/v3/serp/yahoo/languages/?php                                     |
| `dfseo.serp.yahoo.organic.taskPost`                                       | https://docs.dataforseo.com/v3/serp/yahoo/organic/task_post/?php                             |
| `dfseo.serp.yahoo.organic.tasksReady`                                     | https://docs.dataforseo.com/v3/serp/yahoo/organic/tasks_ready/?php                           |
| `dfseo.serp.yahoo.organic.taskGet.regular`                                | https://docs.dataforseo.com/v3/serp/yahoo/organic/task_get/regular/?php                      |
| `dfseo.serp.yahoo.organic.taskGet.html`                                   | https://docs.dataforseo.com/v3/serp/yahoo/organic/task_get/html/?php                         |
| `dfseo.serp.yahoo.organic.live.regular`                                   | https://docs.dataforseo.com/v3/serp/yahoo/organic/live/regular/?php                          |
| `dfseo.serp.yahoo.organic.live.html`                                      | https://docs.dataforseo.com/v3/serp/yahoo/organic/live/html/?php                             |
| `dfseo.serp.yandex.locations`                                             | https://docs.dataforseo.com/v3/serp/yandex/locations/?php                                    |
| `dfseo.serp.yandex.languages`                                             | https://docs.dataforseo.com/v3/serp/yandex/languages/?php                                    |
| `dfseo.serp.yandex.organic.taskPost`                                      | https://docs.dataforseo.com/v3/serp/yandex/organic/task_post/?php                            |
| `dfseo.serp.yandex.organic.tasksReady`                                    | https://docs.dataforseo.com/v3/serp/yandex/organic/tasks_ready/?php                          |
| `dfseo.serp.yandex.organic.taskGet.regular`                               | https://docs.dataforseo.com/v3/serp/yandex/organic/task_get/regular/?php                     |
| `dfseo.serp.yandex.organic.taskGet.html`                                  | https://docs.dataforseo.com/v3/serp/yandex/organic/task_get/html/?php                        |
| `dfseo.serp.yandex.organic.live.regular`                                  | https://docs.dataforseo.com/v3/serp/yandex/organic/live/regular/?php                         |
| `dfseo.serp.yandex.organic.live.html`                                     | https://docs.dataforseo.com/v3/serp/yandex/organic/live/html/?php                            |
| `dfseo.keywordsData.googleAds.locations`                                  | https://docs.dataforseo.com/v3/keywords_data/google/locations/?php                           |
| `dfseo.keywordsData.googleAds.languages`                                  | https://docs.dataforseo.com/v3/keywords_data/google/languages/?php                           |
| `dfseo.keywordsData.googleAds.categories`                                 | https://docs.dataforseo.com/keywords_data/google/categories/?php                             |
| `dfseo.keywordsData.googleAds.adWordsStatus`                              | https://docs.dataforseo.com/v3/keywords_data/google/adwords_status/?php                      |
| `dfseo.keywordsData.googleAds.searchVolume.taskPost`                      | https://docs.dataforseo.com/v3/keywords_data/google/search_volume/task_post/?php             |
| `dfseo.keywordsData.googleAds.searchVolume.tasksReady`                    | https://docs.dataforseo.com/v3/keywords_data/google/search_volume/tasks_ready/?php           |
| `dfseo.keywordsData.googleAds.searchVolume.taskGet`                       | https://docs.dataforseo.com/v3/keywords_data/google/search_volume/task_get/?php              |
| `dfseo.keywordsData.googleAds.searchVolume.live`                          | https://docs.dataforseo.com/v3/keywords_data/google/search_volume/live/?php                  |
| `dfseo.keywordsData.googleAds.keywordsForSite.taskPost`                   | https://docs.dataforseo.com/v3/keywords_data/google/keywords_for_site/task_post/?php         |
| `dfseo.keywordsData.googleAds.keywordsForSite.tasksReady`                 | https://docs.dataforseo.com/v3/keywords_data/google/keywords_for_site/tasks_ready/?php       |
| `dfseo.keywordsData.googleAds.keywordsForSite.taskGet`                    | https://docs.dataforseo.com/v3/keywords_data/google/search_volume/task_get/?php              |
| `dfseo.keywordsData.googleAds.keywordsForSite.live`                       | https://docs.dataforseo.com/v3/keywords_data/google/search_volume/live/?php                  |
| `dfseo.keywordsData.googleAds.keywordsForKeywords.taskPost`               | https://docs.dataforseo.com/v3/keywords_data/google/keywords_for_keywords/task_post/?php     |
| `dfseo.keywordsData.googleAds.keywordsForKeywords.tasksReady`             | https://docs.dataforseo.com/v3/keywords_data/google/keywords_for_keywords/tasks_ready/?php   |
| `dfseo.keywordsData.googleAds.keywordsForKeywords.taskGet`                | https://docs.dataforseo.com/v3/keywords_data/google/keywords_for_keywords/task_get/?php      |
| `dfseo.keywordsData.googleAds.keywordsForKeywords.live`                   | https://docs.dataforseo.com/v3/keywords_data/google/keywords_for_keywords/live/?php          |
| `dfseo.keywordsData.googleAds.keywordsForCategory.taskPost`               | https://docs.dataforseo.com/v3/keywords_data/google/keywords_for_category/task_post/?php     |
| `dfseo.keywordsData.googleAds.keywordsForCategory.tasksReady`             | https://docs.dataforseo.com/v3/keywords_data/google/keywords_for_category/tasks_ready/?php   |
| `dfseo.keywordsData.googleAds.keywordsForCategory.taskGet`                | https://docs.dataforseo.com/v3/keywords_data/google/keywords_for_category/task_get/?php      |
| `dfseo.keywordsData.googleAds.keywordsForCategory.live`                   | https://docs.dataforseo.com/v3/keywords_data/google/keywords_for_category/live/?php          |
| `dfseo.keywordsData.googleAds.AdsTrafficByKeywords.taskPost`              | https://docs.dataforseo.com/v3/keywords_data/google/ad_traffic_by_keywords/task_post/?php    |
| `dfseo.keywordsData.googleAds.AdsTrafficByKeywords.tasksReady`            | https://docs.dataforseo.com/v3/keywords_data/google/ad_traffic_by_keywords/tasks_ready/?php  |
| `dfseo.keywordsData.googleAds.AdsTrafficByKeywords.taskGet`               | https://docs.dataforseo.com/v3/keywords_data/google/ad_traffic_by_keywords/task_get/?php     |
| `dfseo.keywordsData.googleAds.AdsTrafficByKeywords.live`                  | https://docs.dataforseo.com/v3/keywords_data/google/ad_traffic_by_keywords/live/?php         |
| `dfseo.keywordsData.googleAds.AdsTrafficByPlatforms.taskPost`             | https://docs.dataforseo.com/v3/keywords_data/google/ad_traffic_by_platforms/task_post/?php   |
| `dfseo.keywordsData.googleAds.AdsTrafficByPlatforms.tasksReady`           | https://docs.dataforseo.com/v3/keywords_data/google/ad_traffic_by_platforms/tasks_ready/?php |
| `dfseo.keywordsData.googleAds.AdsTrafficByPlatforms.taskGet`              | https://docs.dataforseo.com/v3/keywords_data/google/ad_traffic_by_platforms/task_get/?php    |
| `dfseo.keywordsData.googleAds.AdsTrafficByPlatforms.live`                 | https://docs.dataforseo.com/v3/keywords_data/google/ad_traffic_by_platforms/live/?php        |
| `dfseo.keywordsData.googleTrends.locations`                               | https://docs.dataforseo.com/v3/keywords_data/google_trends/locations/?php                    |
| `dfseo.keywordsData.googleTrends.languages`                               | https://docs.dataforseo.com/v3/keywords_data/google_trends/languages/?php                    |
| `dfseo.keywordsData.googleTrends.categories`                              | https://docs.dataforseo.com/v3/keywords_data/google_trends/categories/?php                   |
| `dfseo.keywordsData.googleTrends.explore.taskPost`                        | https://docs.dataforseo.com/v3/keywords_data/google_trends/explore/task_post/?php            |
| `dfseo.keywordsData.googleTrends.explore.tasksReady`                      | https://docs.dataforseo.com/v3/keywords_data/google_trends/explore/tasks_ready/?php          |
| `dfseo.keywordsData.googleTrends.explore.taskGet`                         | https://docs.dataforseo.com/v3/keywords_data/google_trends/explore/task_get/?php             |
| `dfseo.keywordsData.googleTrends.explore.live`                            | https://docs.dataforseo.com/v3/keywords_data/google_trends/explore/live/?php                 |
| `dfseo.trafficAnalytics.similarWeb.taskPost`                              | https://docs.dataforseo.com/v3/traffic_analytics/similarweb/task_post/?php                   |
| `dfseo.trafficAnalytics.similarWeb.tasksReady`                            | https://docs.dataforseo.com/v3/traffic_analytics/similarweb/tasks_ready/?php                 |
| `dfseo.trafficAnalytics.similarWeb.taskGet`                               | https://docs.dataforseo.com/v3/traffic_analytics/similarweb/task_get/?php                    |
| `dfseo.trafficAnalytics.similarWeb.live`                                  | https://docs.dataforseo.com/v3/traffic_analytics/similarweb/live/?php                        |
| `dfseo.dataForSEOLabs.filters` (404)                                      | https://docs.dataforseo.com/v3/dataforseo_labs/filters/?php                                  |
| `dfseo.dataForSEOLabs.categories`                                         | https://docs.dataforseo.com/v3/dataforseo_labs/categories_list/?php                          |
| `dfseo.dataForSEOLabs.locationsAndLanguages`                              | https://docs.dataforseo.com/v3/dataforseo_labs/locations_and_languages/?php                  |
| `dfseo.dataForSEOLabs.keywordResearch.relatedKeywords`                    | https://docs.dataforseo.com/v3/dataforseo_labs/related_keywords/live/?php                    |
| `dfseo.dataForSEOLabs.keywordResearch.keywordSuggestions`                 | https://docs.dataforseo.com/v3/dataforseo_labs/keyword_suggestions/live/?php                 |
| `dfseo.dataForSEOLabs.keywordResearch.keywordIdeas`                       | https://docs.dataforseo.com/v3/dataforseo_labs/keyword_ideas/live/?php                       |
| `dfseo.dataForSEOLabs.marketSpecificAnalysis.categoriesForDomain`         | https://docs.dataforseo.com/v3/dataforseo_labs/categories_for_domain/live/?php               |
| `dfseo.dataForSEOLabs.marketSpecificAnalysis.keywordsForCategories` (404) | https://docs.dataforseo.com/v3/dataforseo_labs/keywords_for_categories/live/?php             |
| `dfseo.dataForSEOLabs.marketSpecificAnalysis.rankedDomainsByCategory`     | https://docs.dataforseo.com/v3/dataforseo_labs/ranked_domains_by_category/live/?php          |
| `dfseo.dataForSEOLabs.competitorResearch.rankedKeywords`                  | https://docs.dataforseo.com/v3/dataforseo_labs/ranked_keywords/live/?php                     |
| `dfseo.dataForSEOLabs.competitorResearch.serpCompetitors`                 | https://docs.dataforseo.com/v3/dataforseo_labs/serp_competitors/live/?php                    |
| `dfseo.dataForSEOLabs.competitorResearch.competitorsDomain`               | https://docs.dataforseo.com/v3/dataforseo_labs/competitors_domain/live/?php                  |
| `dfseo.dataForSEOLabs.competitorResearch.domainIntersection`              | https://docs.dataforseo.com/v3/dataforseo_labs/domain_intersection/live/?php                 |
| `dfseo.dataForSEOLabs.competitorResearch.subdomains`                      | https://docs.dataforseo.com/v3/dataforseo_labs/subdomains/live/?php                          |
| `dfseo.dataForSEOLabs.competitorResearch.relevantPages`                   | https://docs.dataforseo.com/v3/dataforseo_labs/relevant_pages/live/?php                      |
| `dfseo.dataForSEOLabs.competitorResearch.domainRankOverview`              | https://docs.dataforseo.com/v3/dataforseo_labs/domain_rank_overview/live/?php                |
| `dfseo.dataForSEOLabs.appendix.userData`                                  | https://docs.dataforseo.com/v3/appendix/user_data/?php                                       |
| `dfseo.dataForSEOLabs.appendix.errors`                                    | https://docs.dataforseo.com/v3/appendix/errors/?php                                          |
