import { Live } from "./live";
import { TaskGet } from "./task_get";
var Organic = /** @class */ (function () {
    function Organic(DFSEO) {
        this.DFSEO = DFSEO;
        this.live = new Live(this.DFSEO);
        this.taskGet = new TaskGet(this.DFSEO);
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
export { Organic };
//# sourceMappingURL=index.js.map