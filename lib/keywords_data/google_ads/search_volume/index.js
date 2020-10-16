var SearchVolume = /** @class */ (function () {
    function SearchVolume(DFSEO) {
        this.DFSEO = DFSEO;
    }
    SearchVolume.prototype.taskPost = function (data) {
        return this.DFSEO.fetch({
            method: "POST",
            url: "keywords_data/google/search_volume/task_post",
            data: data,
        });
    };
    SearchVolume.prototype.tasksReady = function () {
        return this.DFSEO.fetch({
            method: "GET",
            url: "keywords_data/google/search_volume/tasks_ready",
        });
    };
    SearchVolume.prototype.taskGet = function (id) {
        return this.DFSEO.fetch({
            method: "GET",
            url: "keywords_data/google/search_volume/task_get/" + id,
        });
    };
    SearchVolume.prototype.live = function (data) {
        return this.DFSEO.fetch({
            method: "POST",
            url: "keywords_data/google/search_volume/live",
            data: data,
        });
    };
    return SearchVolume;
}());
export { SearchVolume };
//# sourceMappingURL=index.js.map