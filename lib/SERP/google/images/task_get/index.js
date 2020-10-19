"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TaskGet = /** @class */ (function () {
    function TaskGet(DFSEO) {
        this.DFSEO = DFSEO;
    }
    /**
     * Get Google Images SERP Results by id
     * @param id
     * @returns advanced
     */
    TaskGet.prototype.advanced = function (id) {
        return this.DFSEO.fetch({
            method: "GET",
            url: "serp/google/images/task_get/advanced/" + id,
        });
    };
    /**
     * Get Google Images HTML Results by id
     * @param id
     * @returns html
     */
    TaskGet.prototype.html = function (id) {
        return this.DFSEO.fetch({
            method: "GET",
            url: "serp/google/images/task_get/html/" + id,
        });
    };
    return TaskGet;
}());
exports.TaskGet = TaskGet;
//# sourceMappingURL=index.js.map