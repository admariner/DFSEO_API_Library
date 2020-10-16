var AdsTrafficByPlatforms = /** @class */ (function () {
    function AdsTrafficByPlatforms(DFSEO) {
        this.DFSEO = DFSEO;
    }
    AdsTrafficByPlatforms.prototype.taskPost = function (data) {
        return this.DFSEO.fetch({
            method: "POST",
            url: "keywords_data/google/ad_traffic_by_platforms/task_post",
            data: data,
        });
    };
    AdsTrafficByPlatforms.prototype.tasksReady = function () {
        return this.DFSEO.fetch({
            method: "GET",
            url: "keywords_data/google/ad_traffic_by_platforms/tasks_ready",
        });
    };
    AdsTrafficByPlatforms.prototype.taskGet = function (id) {
        return this.DFSEO.fetch({
            method: "GET",
            url: "keywords_data/google/ad_traffic_by_platforms/task_get/" + id,
        });
    };
    AdsTrafficByPlatforms.prototype.live = function (data) {
        return this.DFSEO.fetch({
            method: "POST",
            url: "keywords_data/google/ad_traffic_by_platforms/live",
            data: data,
        });
    };
    return AdsTrafficByPlatforms;
}());
export { AdsTrafficByPlatforms };
//# sourceMappingURL=index.js.map