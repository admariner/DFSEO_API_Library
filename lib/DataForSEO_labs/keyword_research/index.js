var KeywordResearch = /** @class */ (function () {
    function KeywordResearch(DFSEO) {
        this.DFSEO = DFSEO;
    }
    KeywordResearch.prototype.relatedKeywords = function (data) {
        return this.DFSEO.fetch({
            method: "POST",
            url: "dataforseo_labs/related_keywords/live",
            data: data,
        });
    };
    KeywordResearch.prototype.keywordSuggestions = function (data) {
        return this.DFSEO.fetch({
            method: "POST",
            url: "dataforseo_labs/keyword_suggestions/live",
            data: data,
        });
    };
    KeywordResearch.prototype.keywordIdeas = function (data) {
        return this.DFSEO.fetch({
            method: "POST",
            url: "dataforseo_labs/keyword_ideas/live",
            data: data,
        });
    };
    return KeywordResearch;
}());
export { KeywordResearch };
//# sourceMappingURL=index.js.map