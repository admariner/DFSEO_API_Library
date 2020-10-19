"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var task_get_1 = require("./task_get");
var live_1 = require("./live");
var LocalPack = /** @class */ (function () {
    function LocalPack(DFSEO) {
        this.DFSEO = DFSEO;
        this.taskGet = new task_get_1.TaskGet(this.DFSEO);
        this.live = new live_1.Live(this.DFSEO);
    }
    LocalPack.prototype.taskPost = function (data) {
        return this.DFSEO.fetch({
            method: "POST",
            url: "serp/bing/local_pack/task_post",
            data: data,
        });
    };
    LocalPack.prototype.tasksReady = function () {
        return this.DFSEO.fetch({
            method: "GET",
            url: "serp/bing/local_pack/tasks_ready",
        });
    };
    return LocalPack;
}());
exports.LocalPack = LocalPack;
//# sourceMappingURL=index.js.map