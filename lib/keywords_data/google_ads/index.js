"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var search_volume_1 = require("./search_volume");
var keywords_for_site_1 = require("./keywords_for_site");
var keywords_for_keywords_1 = require("./keywords_for_keywords");
var keywords_for_category_1 = require("./keywords_for_category");
var ads_traffic_by_keywords_1 = require("./ads_traffic_by_keywords");
var ads_traffic_by_platforms_1 = require("./ads_traffic_by_platforms");
var GoogleAds = /** @class */ (function () {
    function GoogleAds(DFSEO) {
        this.DFSEO = DFSEO;
        this.searchVolume = new search_volume_1.SearchVolume(this.DFSEO);
        this.keywordsForSite = new keywords_for_site_1.KeywordsForSite(this.DFSEO);
        this.keywordsForKeywords = new keywords_for_keywords_1.KeywordsForKeywords(this.DFSEO);
        this.keywordsForCategory = new keywords_for_category_1.KeywordsForCategory(this.DFSEO);
        this.adsTrafficByKeywords = new ads_traffic_by_keywords_1.AdsTrafficByKeywords(this.DFSEO);
        this.adsTrafficByPlatform = new ads_traffic_by_platforms_1.AdsTrafficByPlatforms(this.DFSEO);
    }
    GoogleAds.prototype.locations = function () {
        return this.DFSEO.fetch({
            method: "GET",
            url: "keywords_data/google/locations",
        });
    };
    GoogleAds.prototype.languages = function () {
        return this.DFSEO.fetch({
            method: "GET",
            url: "keywords_data/google/languages",
        });
    };
    GoogleAds.prototype.categories = function () {
        return this.DFSEO.fetch({
            method: "GET",
            url: "keywords_data/google/categories",
        });
    };
    GoogleAds.prototype.adWordsStatus = function () {
        return this.DFSEO.fetch({
            method: "GET",
            url: "keywords_data/google/adwords_status",
        });
    };
    return GoogleAds;
}());
exports.GoogleAds = GoogleAds;
//# sourceMappingURL=index.js.map