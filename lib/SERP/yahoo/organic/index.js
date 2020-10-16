"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Organic = void 0;
var live_1 = require("./live");
var task_get_1 = require("./task_get");
var Organic = /** @class */ (function () {
    function Organic(DFSEO) {
        this.DFSEO = DFSEO;
        this.live = new live_1.Live(this.DFSEO);
        this.taskGet = new task_get_1.TaskGet(this.DFSEO);
    }
    Organic.prototype.taskPost = function (data) {
        return this.DFSEO.fetch({
            method: "POST",
            url: "serp/yahoo/organic/task_post",
            data: data,
        });
    };
    Organic.prototype.tasksReady = function () {
        return this.DFSEO.fetch({
            method: "GET",
            url: "serp/yahoo/organic/tasks_ready",
        });
    };
    return Organic;
}());
exports.Organic = Organic;
//# sourceMappingURL=index.js.map