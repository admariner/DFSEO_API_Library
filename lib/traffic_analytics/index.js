import { SimilarWeb } from "./similar_web";
var TrafficAnalytics = /** @class */ (function () {
    function TrafficAnalytics(DFSEO) {
        this.DFSEO = DFSEO;
        this.similarWeb = new SimilarWeb(this.DFSEO);
    }
    return TrafficAnalytics;
}());
export { TrafficAnalytics };
//# sourceMappingURL=index.js.map