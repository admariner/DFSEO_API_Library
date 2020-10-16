"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Serp = void 0;
var google_1 = require("./google");
var bing_1 = require("./bing");
var yahoo_1 = require("./yahoo");
var yandex_1 = require("./yandex");
var Serp = /** @class */ (function () {
    function Serp(DFSEO) {
        this.DFSEO = DFSEO;
        this.google = new google_1.Google(this.DFSEO);
        this.bing = new bing_1.Bing(this.DFSEO);
        this.yahoo = new yahoo_1.Yahoo(this.DFSEO);
        this.yandex = new yandex_1.Yandex(this.DFSEO);
    }
    return Serp;
}());
exports.Serp = Serp;
//# sourceMappingURL=index.js.map