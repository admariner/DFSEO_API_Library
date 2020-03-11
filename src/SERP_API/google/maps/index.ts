import { DFSEO } from "../../..";
import { ISERP_Google_Organic_Task_Post_Data, ISERP_Google_Organic_Task_Post_Response, ISERP_Google_Maps_Task_Ready_Response } from "../../../../typings";

export class Maps {
    constructor(private DFSEO: DFSEO) { }

    taskPost(data: ISERP_Google_Organic_Task_Post_Data[]): Promise<ISERP_Google_Organic_Task_Post_Response> {
        return this.DFSEO.fetch({
            method: "POST",
            url: "serp/google/maps/task_post",
            data
        });
    }

    tasksReady(): Promise<ISERP_Google_Maps_Task_Ready_Response> {
        return this.DFSEO.fetch({
            method: "GET",
            url: "serp/google/maps/task_ready"
        })
    }
}