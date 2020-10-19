"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var live_1 = require("./live");
var task_get_1 = require("./task_get");
var Maps = /** @class */ (function () {
    function Maps(DFSEO) {
        this.DFSEO = DFSEO;
        this.live = new live_1.Live(this.DFSEO);
        this.taskGet = new task_get_1.TaskGet(this.DFSEO);
    }
    Maps.prototype.taskPost = function (data) {
        return this.DFSEO.fetch({
            method: "POST",
            url: "serp/google/maps/task_post",
            data: data,
        });
    };
    Maps.prototype.tasksReady = function () {
        return this.DFSEO.fetch({
            method: "GET",
            url: "serp/google/maps/tasks_ready",
        });
    };
    return Maps;
}());
exports.Maps = Maps;
//# sourceMappingURL=index.js.map