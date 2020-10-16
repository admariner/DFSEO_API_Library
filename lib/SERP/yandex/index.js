"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Yandex = void 0;
var organic_1 = require("./organic");
var Yandex = /** @class */ (function () {
    function Yandex(DFSEO) {
        this.DFSEO = DFSEO;
        this.organic = new organic_1.Organic(this.DFSEO);
    }
    Yandex.prototype.locations = function (country) {
        return this.DFSEO.fetch({
            method: "GET",
            url: country ? "serp/yandex/locations/" + country : "serp/yandex/locations",
        });
    };
    Yandex.prototype.languages = function () {
        return this.DFSEO.fetch({
            method: "GET",
            url: "serp/yandex/languages",
        });
    };
    return Yandex;
}());
exports.Yandex = Yandex;
//# sourceMappingURL=index.js.map