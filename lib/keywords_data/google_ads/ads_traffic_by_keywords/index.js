"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AdsTrafficByKeywords = /** @class */ (function () {
    function AdsTrafficByKeywords(DFSEO) {
        this.DFSEO = DFSEO;
    }
    AdsTrafficByKeywords.prototype.taskPost = function (data) {
        return this.DFSEO.fetch({
            method: "POST",
            url: "keywords_data/google/ad_traffic_by_keywords/task_post",
            data: data,
        });
    };
    AdsTrafficByKeywords.prototype.tasksReady = function () {
        return this.DFSEO.fetch({
            method: "GET",
            url: "keywords_data/google/ad_traffic_by_keywords/tasks_ready",
        });
    };
    AdsTrafficByKeywords.prototype.taskGet = function (id) {
        return this.DFSEO.fetch({
            method: "GET",
            url: "keywords_data/google/ad_traffic_by_keywords/task_get/" + id,
        });
    };
    AdsTrafficByKeywords.prototype.live = function (data) {
        return this.DFSEO.fetch({
            method: "POST",
            url: "keywords_data/google/ad_traffic_by_keywords/live",
            data: data,
        });
    };
    return AdsTrafficByKeywords;
}());
exports.AdsTrafficByKeywords = AdsTrafficByKeywords;
//# sourceMappingURL=index.js.map