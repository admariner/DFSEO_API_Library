"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var keyword_research_1 = require("./keyword_research");
var market_specific_analysis_1 = require("./market_specific_analysis");
var competitor_research_1 = require("./competitor_research");
var DataForSEOLabs = /** @class */ (function () {
    function DataForSEOLabs(DFSEO) {
        this.DFSEO = DFSEO;
        this.keywordResearch = new keyword_research_1.KeywordResearch(this.DFSEO);
        this.marketSpecificAnalysis = new market_specific_analysis_1.MarketSpecificAnalysis(this.DFSEO);
        this.competitorResearch = new competitor_research_1.CompetitorResearch(this.DFSEO);
    }
    /**
     * this endpoint does not work currently. But here's the documentation:
     *
     * https://docs.dataforseo.com/v3/dataforseo_labs/filters/?php
     */
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
exports.DataForSEOLabs = DataForSEOLabs;
//# sourceMappingURL=index.js.map