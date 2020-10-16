var TaskGet = /** @class */ (function () {
    function TaskGet(DFSEO) {
        this.DFSEO = DFSEO;
    }
    TaskGet.prototype.regular = function (id) {
        return this.DFSEO.fetch({
            method: "GET",
            url: "serp/google/organic/task_get/regular/" + id,
        });
    };
    TaskGet.prototype.advanced = function (id) {
        return this.DFSEO.fetch({
            method: "GET",
            url: "serp/google/organic/task_get/advanced/" + id,
        });
    };
    TaskGet.prototype.html = function (id) {
        return this.DFSEO.fetch({
            method: "GET",
            url: "serp/google/organic/task_get/html/" + id,
        });
    };
    return TaskGet;
}());
export { TaskGet };
//# sourceMappingURL=index.js.map