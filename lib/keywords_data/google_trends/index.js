"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GoogleTrends = void 0;
var explore_1 = require("./explore");
var GoogleTrends = /** @class */ (function () {
    function GoogleTrends(DFSEO) {
        this.DFSEO = DFSEO;
        this.explore = new explore_1.Explore(this.DFSEO);
    }
    GoogleTrends.prototype.locations = function (country) {
        return this.DFSEO.fetch({
            method: "GET",
            url: country ? "keywords_data/google_trends/locations/" + country : "keywords_data/google_trends/locations",
        });
    };
    GoogleTrends.prototype.languages = function () {
        return this.DFSEO.fetch({
            method: "GET",
            url: "keywords_data/google_trends/languages",
        });
    };
    GoogleTrends.prototype.categories = function () {
        return this.DFSEO.fetch({
            method: "GET",
            url: "keywords_data/google_trends/categories",
        });
    };
    return GoogleTrends;
}());
exports.GoogleTrends = GoogleTrends;
//# sourceMappingURL=index.js.map