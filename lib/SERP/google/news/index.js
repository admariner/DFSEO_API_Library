import { Live } from "./live";
import { TaskGet } from "./task_get";
var News = /** @class */ (function () {
    function News(DFSEO) {
        this.DFSEO = DFSEO;
        this.live = new Live(this.DFSEO);
        this.taskGet = new TaskGet(this.DFSEO);
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
export { News };
//# sourceMappingURL=index.js.map