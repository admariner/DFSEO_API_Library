import { DFSEO } from "../../..";
import { ISERP_Google_Organic_Task_Post_Data, ISERP_Google_Organic_Task_Post_Response, ISERP_Google_Organic_Tasks_Ready_Response } from "../../../typings";
import { TaskGet } from "./task_get";
import { TaskLive } from "./live";

export class Organic {
	public taskGet: TaskGet = new TaskGet(this.DFSEO);
	public live: TaskLive = new TaskLive(this.DFSEO);
	constructor(private DFSEO: DFSEO) {}

	taskPost(data: ISERP_Google_Organic_Task_Post_Data[]): Promise<ISERP_Google_Organic_Task_Post_Response> {
		return this.DFSEO.fetch({
			method: "POST",
			url: "serp/google/organic/task_post",
			data,
		});
	}

	taskReady(): Promise<ISERP_Google_Organic_Tasks_Ready_Response> {
		return this.DFSEO.fetch({
			method: "GET",
			url: "serp/google/organic/tasks_ready",
		});
	}
}
