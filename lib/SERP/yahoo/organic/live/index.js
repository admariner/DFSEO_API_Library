"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Live = void 0;
var Live = /** @class */ (function () {
    function Live(DFSEO) {
        this.DFSEO = DFSEO;
    }
    Live.prototype.regular = function (data) {
        return this.DFSEO.fetch({
            method: "POST",
            url: "serp/yahoo/organic/live/regular",
            data: data,
        });
    };
    Live.prototype.html = function (data) {
        return this.DFSEO.fetch({
            method: "POST",
            url: "serp/yahoo/organic/live/hrml",
            data: data,
        });
    };
    return Live;
}());
exports.Live = Live;
//# sourceMappingURL=index.js.map