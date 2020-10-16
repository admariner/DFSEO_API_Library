import { TaskGet } from "./task_get";
import { Live } from "./live";
var Images = /** @class */ (function () {
    function Images(DFSEO) {
        this.DFSEO = DFSEO;
        this.taskGet = new TaskGet(this.DFSEO);
        this.live = new Live(this.DFSEO);
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
export { Images };
//# sourceMappingURL=index.js.map