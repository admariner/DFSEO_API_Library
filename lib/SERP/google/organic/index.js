import { TaskGet } from "./task_get";
import { TaskLive } from "./live";
var Organic = /** @class */ (function () {
    function Organic(DFSEO) {
        this.DFSEO = DFSEO;
        this.taskGet = new TaskGet(this.DFSEO);
        this.live = new TaskLive(this.DFSEO);
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
export { Organic };
//# sourceMappingURL=index.js.map