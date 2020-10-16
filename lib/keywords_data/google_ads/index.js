import { SearchVolume } from "./search_volume";
import { KeywordsForSite } from "./keywords_for_site";
import { KeywordsForKeywords } from "./keywords_for_keywords";
import { KeywordsForCategory } from "./keywords_for_category";
import { AdsTrafficByKeywords } from "./ads_traffic_by_keywords";
import { AdsTrafficByPlatforms } from "./ads_traffic_by_platforms";
var GoogleAds = /** @class */ (function () {
    function GoogleAds(DFSEO) {
        this.DFSEO = DFSEO;
        this.searchVolume = new SearchVolume(this.DFSEO);
        this.keywordsForSite = new KeywordsForSite(this.DFSEO);
        this.keywordsForKeywords = new KeywordsForKeywords(this.DFSEO);
        this.keywordsForCategory = new KeywordsForCategory(this.DFSEO);
        this.adsTrafficByKeywords = new AdsTrafficByKeywords(this.DFSEO);
        this.adsTrafficByPlatform = new AdsTrafficByPlatforms(this.DFSEO);
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
export { GoogleAds };
//# sourceMappingURL=index.js.map