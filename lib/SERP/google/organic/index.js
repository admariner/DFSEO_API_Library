"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Organic = void 0;
var task_get_1 = require("./task_get");
var live_1 = require("./live");
var Organic = /** @class */ (function () {
    function Organic(DFSEO) {
        this.DFSEO = DFSEO;
        this.taskGet = new task_get_1.TaskGet(this.DFSEO);
        this.live = new live_1.TaskLive(this.DFSEO);
    }
    Organic.prototype.taskPost = function (data) {
        return this.DFSEO.fetch({
            method: "POST",
            url: "serp/google/organic/task_post",
            data: data,
        });
    };
    Organic.prototype.taskReady = function () {
        return this.DFSEO.fetch({
            method: "GET",
            url: "serp/google/organic/tasks_ready",
        });
    };
    return Organic;
}());
exports.Organic = Organic;
//# sourceMappingURL=index.js.map