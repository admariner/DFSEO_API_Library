"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KeywordsData = void 0;
var google_ads_1 = require("./google_ads");
var google_trends_1 = require("./google_trends");
var KeywordsData = /** @class */ (function () {
    function KeywordsData(DFSEO) {
        this.DFSEO = DFSEO;
        this.googleAds = new google_ads_1.GoogleAds(this.DFSEO);
        this.googleTrends = new google_trends_1.GoogleTrends(this.DFSEO);
    }
    return KeywordsData;
}());
exports.KeywordsData = KeywordsData;
//# sourceMappingURL=index.js.map