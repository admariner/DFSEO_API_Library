"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bing = void 0;
var organic_1 = require("./organic");
var local_pack_1 = require("./local_pack");
var Bing = /** @class */ (function () {
    function Bing(DFSEO) {
        this.DFSEO = DFSEO;
        this.organic = new organic_1.Organic(this.DFSEO);
        this.localPack = new local_pack_1.LocalPack(this.DFSEO);
    }
    Bing.prototype.locations = function (country) {
        return this.DFSEO.fetch({
            method: "GET",
            url: country ? "serp/bing/locations/" + country : "serp/bing/locations",
        });
    };
    Bing.prototype.languages = function () {
        return this.DFSEO.fetch({
            method: "GET",
            url: "serp/bing/languages",
        });
    };
    return Bing;
}());
exports.Bing = Bing;
//# sourceMappingURL=index.js.map