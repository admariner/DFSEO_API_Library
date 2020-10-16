"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Images = void 0;
var task_get_1 = require("./task_get");
var live_1 = require("./live");
var Images = /** @class */ (function () {
    function Images(DFSEO) {
        this.DFSEO = DFSEO;
        this.taskGet = new task_get_1.TaskGet(this.DFSEO);
        this.live = new live_1.Live(this.DFSEO);
    }
    Images.prototype.taskPost = function (data) {
        return this.DFSEO.fetch({
            method: "POST",
            url: "serp/google/images/task_post",
            data: data,
        });
    };
    Images.prototype.tasksReady = function () {
        return this.DFSEO.fetch({
            method: "GET",
            url: "serp/google/images/tasks_ready",
        });
    };
    return Images;
}());
exports.Images = Images;
//# sourceMappingURL=index.js.map