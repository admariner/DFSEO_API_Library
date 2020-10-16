"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Yahoo = void 0;
var organic_1 = require("./organic");
var Yahoo = /** @class */ (function () {
    function Yahoo(DFSEO) {
        this.DFSEO = DFSEO;
        this.organic = new organic_1.Organic(this.DFSEO);
    }
    Yahoo.prototype.locations = function (country) {
        return this.DFSEO.fetch({
            method: "GET",
            url: country ? "serp/yahoo/locations/" + country : "serp/yahoo/locations",
        });
    };
    Yahoo.prototype.languages = function () {
        return this.DFSEO.fetch({
            method: "GET",
            url: "serp/yahoo/languages",
        });
    };
    return Yahoo;
}());
exports.Yahoo = Yahoo;
//# sourceMappingURL=index.js.map