"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TaskGet = /** @class */ (function () {
    function TaskGet(DFSEO) {
        this.DFSEO = DFSEO;
    }
    TaskGet.prototype.regular = function (id) {
        return this.DFSEO.fetch({
            method: "GET",
            url: "serp/yandex/organic/task_get/regular/" + id,
        });
    };
    TaskGet.prototype.html = function (id) {
        return this.DFSEO.fetch({
            method: "GET",
            url: "serp/yandex/organic/task_get/html/" + id,
        });
    };
    return TaskGet;
}());
exports.TaskGet = TaskGet;
//# sourceMappingURL=index.js.map