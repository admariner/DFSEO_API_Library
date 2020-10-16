import { DFSEO } from "../../..";
import { ISERP_Google_Organic_Task_Post_Data, ISERP_Google_Organic_Task_Post_Response, ISERP_Google_Maps_Task_Ready_Response } from "../../../typings";
import { Live } from "./live";
import { TaskGet } from "./task_get";

export class Maps {
	public live: Live = new Live(this.DFSEO);
	public taskGet: TaskGet = new TaskGet(this.DFSEO);
	constructor(private DFSEO: DFSEO) {}

	taskPost(data: ISERP_Google_Organic_Task_Post_Data[]): Promise<ISERP_Google_Organic_Task_Post_Response> {
		return this.DFSEO.fetch({
			method: "POST",
			url: "serp/google/maps/task_post",
			data,
		});
	}

	tasksReady(): Promise<ISERP_Google_Maps_Task_Ready_Response> {
		return this.DFSEO.fetch({
			method: "GET",
			url: "serp/google/maps/tasks_ready",
		});
	}
}
