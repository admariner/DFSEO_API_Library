import { DFSEO } from "../../..";
import { TaskGet } from "./task_get";
import { Live } from "./live";

export class Organic {
    public taskGet: TaskGet = new TaskGet(this.DFSEO);
    public live: Live = new Live(this.DFSEO);

    constructor(private DFSEO: DFSEO) {

    }

    taskPost(data: any) {
        return this.DFSEO.fetch({
            method: "POST",
            url: "serp/bing/organic/task_post",
            data
        })
    }

    tasksReady() {
        return this.DFSEO.fetch({
            method: "GET",
            url: "serp/bing/organic/tasks_ready"
        })
    }
}