import { TaskGet } from "./task_get";
import { Live } from "./live";
var LocalPack = /** @class */ (function () {
    function LocalPack(DFSEO) {
        this.DFSEO = DFSEO;
        this.taskGet = new TaskGet(this.DFSEO);
        this.live = new Live(this.DFSEO);
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
export { LocalPack };
//# sourceMappingURL=index.js.map