"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TaskGet = /** @class */ (function () {
    function TaskGet(DFSEO) {
        this.DFSEO = DFSEO;
    }
    TaskGet.prototype.advanced = function (id) {
        return this.DFSEO.fetch({
            method: "GET",
            url: "serp/google/news/task_get/advanced/" + id,
        });
    };
    TaskGet.prototype.html = function (id) {
        return this.DFSEO.fetch({
            method: "GET",
            url: "serp/google/news/task_get/advanced/" + id,
        });
    };
    return TaskGet;
}());
exports.TaskGet = TaskGet;
//# sourceMappingURL=index.js.map