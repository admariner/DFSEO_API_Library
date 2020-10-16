import { DFSEO } from "../../..";

export class SearchVolume {
	constructor(private DFSEO: DFSEO) {}

	public taskPost(data: any) {
		return this.DFSEO.fetch({
			method: "POST",
			url: "keywords_data/google/search_volume/task_post",
			data,
		});
	}

	public tasksReady() {
		return this.DFSEO.fetch({
			method: "GET",
			url: "keywords_data/google/search_volume/tasks_ready",
		});
	}

	public taskGet(id: string) {
		return this.DFSEO.fetch({
			method: "GET",
			url: `keywords_data/google/search_volume/task_get/${id}`,
		});
	}

	public live(data: any) {
		return this.DFSEO.fetch({
			method: "POST",
			url: "keywords_data/google/search_volume/live",
			data,
		});
	}
}
