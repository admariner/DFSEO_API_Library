var TaskGet = /** @class */ (function () {
    function TaskGet(DFSEO) {
        this.DFSEO = DFSEO;
    }
    TaskGet.prototype.advanced = function (id) {
        return this.DFSEO.fetch({
            method: "GET",
            url: "serp/google/maps/task_get/advanced/" + id,
        });
    };
    return TaskGet;
}());
export { TaskGet };
//# sourceMappingURL=index.js.map