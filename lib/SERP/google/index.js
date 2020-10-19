"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var organic_1 = require("./organic");
var images_1 = require("./images");
var maps_1 = require("./maps");
var news_1 = require("./news");
var Google = /** @class */ (function () {
    function Google(DFSEO) {
        this.DFSEO = DFSEO;
        this.organic = new organic_1.Organic(this.DFSEO);
        this.images = new images_1.Images(this.DFSEO);
        this.maps = new maps_1.Maps(this.DFSEO);
        this.news = new news_1.News(this.DFSEO);
    }
    Google.prototype.languages = function () {
        return this.DFSEO.fetch({ method: "GET", url: "serp/google/languages" });
    };
    Google.prototype.locations = function (country) {
        return this.DFSEO.fetch({
            method: "GET",
            url: "serp/google/locations" + (country ? "/" + country : ""),
        });
    };
    return Google;
}());
exports.Google = Google;
//# sourceMappingURL=index.js.map