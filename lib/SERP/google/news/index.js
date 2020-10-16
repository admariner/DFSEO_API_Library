"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.News = void 0;
var live_1 = require("./live");
var task_get_1 = require("./task_get");
var News = /** @class */ (function () {
    function News(DFSEO) {
        this.DFSEO = DFSEO;
        this.live = new live_1.Live(this.DFSEO);
        this.taskGet = new task_get_1.TaskGet(this.DFSEO);
    }
    News.prototype.tasksReady = function () {
        return this.DFSEO.fetch({
            method: "GET",
            url: "serp/google/news/tasks_ready",
        });
    };
    News.prototype.taskPost = function (data) {
        return this.DFSEO.fetch({
            method: "POST",
            url: "serp/google/news/task_post",
            data: data,
        });
    };
    return News;
}());
exports.News = News;
//# sourceMappingURL=index.js.map