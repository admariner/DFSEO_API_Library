"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SimilarWeb = void 0;
var SimilarWeb = /** @class */ (function () {
    function SimilarWeb(DFSEO) {
        this.DFSEO = DFSEO;
    }
    SimilarWeb.prototype.taskPost = function (data) {
        return this.DFSEO.fetch({
            method: "POST",
            url: "traffic_analytics/similarweb/task_post",
            data: data,
        });
    };
    SimilarWeb.prototype.tasksReady = function () {
        return this.DFSEO.fetch({
            method: "GET",
            url: "traffic_analytics/similarweb/tasks_ready",
        });
    };
    SimilarWeb.prototype.taskGet = function (id) {
        return this.DFSEO.fetch({
            method: "GET",
            url: "traffic_analytics/similarweb/task_get/" + id,
        });
    };
    SimilarWeb.prototype.live = function (data) {
        return this.DFSEO.fetch({
            method: "POST",
            url: "traffic_analytics/similarweb/live",
            data: data,
        });
    };
    return SimilarWeb;
}());
exports.SimilarWeb = SimilarWeb;
//# sourceMappingURL=index.js.map