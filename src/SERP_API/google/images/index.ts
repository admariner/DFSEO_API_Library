import { DFSEO } from "../../..";
import { ISERP_Google_Organic_Task_Post_Data } from "../../../../typings";
import { TaskGet } from "./task_get";
import { Live } from "./live";

export class Images {
    public taskGet: TaskGet = new TaskGet(this.DFSEO);
    public live: Live = new Live(this.DFSEO);
    constructor(private DFSEO: DFSEO) {

    }

    taskPost(data: ISERP_Google_Organic_Task_Post_Data[]): Promise<any> {
        return this.DFSEO.fetch({ method: "POST", url: 'serp/google/images/task_post', data });
    }

    taskReady(): Promise<any> {
        return this.DFSEO.fetch({ method: "GET", url: 'serp/google/images/tasks_ready' })
    }
}