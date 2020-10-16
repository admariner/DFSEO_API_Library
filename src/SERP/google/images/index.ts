import { DFSEO } from "../../..";
import { ISERP_Google_Images_Task_Post_Request, ISERP_Google_Images_Task_Post_Response, ISERP_Google_Images_Tasks_Ready_Response } from "../../../typings";
import { TaskGet } from "./task_get";
import { Live } from "./live";

export class Images {
	public taskGet: TaskGet = new TaskGet(this.DFSEO);
	public live: Live = new Live(this.DFSEO);
	constructor(private DFSEO: DFSEO) {}

	taskPost(data: ISERP_Google_Images_Task_Post_Request[]): Promise<ISERP_Google_Images_Task_Post_Response> {
		return this.DFSEO.fetch({
			method: "POST",
			url: "serp/google/images/task_post",
			data,
		});
	}

	tasksReady(): Promise<ISERP_Google_Images_Tasks_Ready_Response> {
		return this.DFSEO.fetch({
			method: "GET",
			url: "serp/google/images/tasks_ready",
		});
	}
}
