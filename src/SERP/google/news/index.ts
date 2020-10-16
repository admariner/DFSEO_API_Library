import { DFSEO } from "../../..";
import { Live } from "./live";
import { TaskGet } from "./task_get";

export class News {
	public live: Live = new Live(this.DFSEO);
	public taskGet: TaskGet = new TaskGet(this.DFSEO);
	constructor(private DFSEO: DFSEO) {}

	tasksReady(): Promise<any> {
		return this.DFSEO.fetch({
			method: "GET",
			url: "serp/google/news/tasks_ready",
		});
	}

	taskPost(data: any): Promise<any> {
		return this.DFSEO.fetch({
			method: "POST",
			url: "serp/google/news/task_post",
			data,
		});
	}
}
