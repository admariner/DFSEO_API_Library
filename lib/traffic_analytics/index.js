"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TrafficAnalytics = void 0;
var similar_web_1 = require("./similar_web");
var TrafficAnalytics = /** @class */ (function () {
    function TrafficAnalytics(DFSEO) {
        this.DFSEO = DFSEO;
        this.similarWeb = new similar_web_1.SimilarWeb(this.DFSEO);
    }
    return TrafficAnalytics;
}());
exports.TrafficAnalytics = TrafficAnalytics;
//# sourceMappingURL=index.js.map