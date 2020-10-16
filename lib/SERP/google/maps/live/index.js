"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Live = void 0;
var Live = /** @class */ (function () {
    function Live(DFSEO) {
        this.DFSEO = DFSEO;
    }
    Live.prototype.advanced = function (data) {
        return this.DFSEO.fetch({
            method: "POST",
            url: "serp/google/maps/live/advanced",
            data: data,
        });
    };
    return Live;
}());
exports.Live = Live;
//# sourceMappingURL=index.js.map