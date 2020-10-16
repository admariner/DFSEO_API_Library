import { TaskGet } from "./task_get";
import { Live } from "./live";
var Organic = /** @class */ (function () {
    function Organic(DFSEO) {
        this.DFSEO = DFSEO;
        this.taskGet = new TaskGet(this.DFSEO);
        this.live = new Live(this.DFSEO);
    }
    Organic.prototype.taskPost = function (data) {
        return this.DFSEO.fetch({
            method: "POST",
            url: "serp/bing/organic/task_post",
            data: data,
        });
    };
    Organic.prototype.tasksReady = function () {
        return this.DFSEO.fetch({
            method: "GET",
            url: "serp/bing/organic/tasks_ready",
        });
    };
    return Organic;
}());
export { Organic };
//# sourceMappingURL=index.js.map