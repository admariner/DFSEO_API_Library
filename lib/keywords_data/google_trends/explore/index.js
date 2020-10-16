var Explore = /** @class */ (function () {
    function Explore(DFSEO) {
        this.DFSEO = DFSEO;
    }
    Explore.prototype.taskPost = function (data) {
        return this.DFSEO.fetch({
            method: "POST",
            url: "keywords_data/google_trends/explore/task_post",
            data: data,
        });
    };
    Explore.prototype.tasksReady = function () {
        return this.DFSEO.fetch({
            method: "GET",
            url: "keywords_data/google_trends/explore/tasks_ready",
        });
    };
    Explore.prototype.taskGet = function (id) {
        return this.DFSEO.fetch({
            method: "GET",
            url: "keywords_data/google_trends/explore/task_get/" + id,
        });
    };
    Explore.prototype.live = function (data) {
        return this.DFSEO.fetch({
            method: "POST",
            url: "keywords_data/google_trends/explore/live",
            data: data,
        });
    };
    return Explore;
}());
export { Explore };
//# sourceMappingURL=index.js.map