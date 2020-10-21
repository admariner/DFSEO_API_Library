"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MarketSpecificAnalysis = /** @class */ (function () {
    function MarketSpecificAnalysis(DFSEO) {
        this.DFSEO = DFSEO;
    }
    MarketSpecificAnalysis.prototype.categoriesForDomain = function (data) {
        return this.DFSEO.fetch({
            method: "POST",
            url: "dataforseo_labs/categories_for_domain/live",
            data: data,
        });
    };
    MarketSpecificAnalysis.prototype.keywordsForCategories = function (data) {
        return this.DFSEO.fetch({
            method: "POST",
            url: "dataforseo_labs/keywords_for_categories/live",
            data: data,
        });
    };
    MarketSpecificAnalysis.prototype.rankedDomainsByCategory = function (data) {
        return this.DFSEO.fetch({
            method: "POST",
            url: "dataforseo_labs/ranked_domains_by_category/live",
            data: data,
        });
    };
    return MarketSpecificAnalysis;
}());
exports.MarketSpecificAnalysis = MarketSpecificAnalysis;
//# sourceMappingURL=index.js.map