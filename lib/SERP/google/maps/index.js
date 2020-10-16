import { Live } from "./live";
import { TaskGet } from "./task_get";
var Maps = /** @class */ (function () {
    function Maps(DFSEO) {
        this.DFSEO = DFSEO;
        this.live = new Live(this.DFSEO);
        this.taskGet = new TaskGet(this.DFSEO);
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
export { Maps };
//# sourceMappingURL=index.js.map