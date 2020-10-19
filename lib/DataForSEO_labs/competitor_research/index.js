"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CompetitorResearch = /** @class */ (function () {
    function CompetitorResearch(DFSEO) {
        this.DFSEO = DFSEO;
    }
    CompetitorResearch.prototype.rankedKeywords = function (data) {
        return this.DFSEO.fetch({
            method: "POST",
            url: "dataforseo_labs/ranked_keywords/live",
            data: data,
        });
    };
    CompetitorResearch.prototype.serpCompetitors = function (data) {
        return this.DFSEO.fetch({
            method: "POST",
            url: "dataforseo_labs/ranked_keywords/live",
            data: data,
        });
    };
    CompetitorResearch.prototype.competitorsDomain = function (data) {
        return this.DFSEO.fetch({
            method: "POST",
            url: "dataforseo_labs/competitors_domain/live",
            data: data,
        });
    };
    CompetitorResearch.prototype.domainIntersection = function (data) {
        return this.DFSEO.fetch({
            method: "POST",
            url: "dataforseo_labs/domain_intersection/live",
            data: data,
        });
    };
    CompetitorResearch.prototype.subdomains = function (data) {
        return this.DFSEO.fetch({
            method: "POST",
            url: "dataforseo_labs/subdomains/live",
            data: data,
        });
    };
    CompetitorResearch.prototype.relevantPages = function (data) {
        return this.DFSEO.fetch({
            method: "POST",
            url: "dataforseo_labs/relevant_pages/live",
            data: data,
        });
    };
    CompetitorResearch.prototype.domainRankOverview = function (data) {
        return this.DFSEO.fetch({
            method: "POST",
            url: "dataforseo_labs/domain_rank_overview/live",
            data: data,
        });
    };
    return CompetitorResearch;
}());
exports.CompetitorResearch = CompetitorResearch;
//# sourceMappingURL=index.js.map