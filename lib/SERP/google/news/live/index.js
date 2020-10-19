"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Live = /** @class */ (function () {
    function Live(DFSEO) {
        this.DFSEO = DFSEO;
    }
    Live.prototype.advanced = function (data) {
        return this.DFSEO.fetch({
            method: "POST",
            url: "serp/google/news/live/advanced",
            data: data,
        });
    };
    Live.prototype.html = function (data) {
        return this.DFSEO.fetch({
            method: "POST",
            url: "serp/google/news/live/html",
            data: data,
        });
    };
    return Live;
}());
exports.Live = Live;
//# sourceMappingURL=index.js.map