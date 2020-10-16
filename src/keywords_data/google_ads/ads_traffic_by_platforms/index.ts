import { DFSEO } from "../../..";

export class AdsTrafficByPlatforms {
	constructor(private DFSEO: DFSEO) {}

	public taskPost(data: any) {
		return this.DFSEO.fetch({
			method: "POST",
			url: "keywords_data/google/ad_traffic_by_platforms/task_post",
			data,
		});
	}

	public tasksReady() {
		return this.DFSEO.fetch({
			method: "GET",
			url: "keywords_data/google/ad_traffic_by_platforms/tasks_ready",
		});
	}

	public taskGet(id: string) {
		return this.DFSEO.fetch({
			method: "GET",
			url: `keywords_data/google/ad_traffic_by_platforms/task_get/${id}`,
		});
	}

	public live(data: any) {
		return this.DFSEO.fetch({
			method: "POST",
			url: "keywords_data/google/ad_traffic_by_platforms/live",
			data,
		});
	}
}
