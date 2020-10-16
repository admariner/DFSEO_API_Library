import { KeywordResearch } from "./keyword_research";
import { MarketSpecificAnalysis } from "./market_specific_analysis";
import { CompetitorResearch } from "./competitor_research";
var DataForSEOLabs = /** @class */ (function () {
    function DataForSEOLabs(DFSEO) {
        this.DFSEO = DFSEO;
        this.keywordResearch = new KeywordResearch(this.DFSEO);
        this.marketSpecificAnalysis = new MarketSpecificAnalysis(this.DFSEO);
        this.competitorResearch = new CompetitorResearch(this.DFSEO);
    }
    DataForSEOLabs.prototype.filters = function () {
        return this.DFSEO.fetch({
            method: "GET",
            url: "dataforseo_labs/filters",
        });
    };
    DataForSEOLabs.prototype.categories = function () {
        return this.DFSEO.fetch({
            method: "GET",
            url: "dataforseo_labs/categories",
        });
    };
    DataForSEOLabs.prototype.locationsAndLanguages = function () {
        return this.DFSEO.fetch({
            method: "GET",
            url: "dataforseo_labs/locations_and_languages",
        });
    };
    return DataForSEOLabs;
}());
export { DataForSEOLabs };
//# sourceMappingURL=index.js.map