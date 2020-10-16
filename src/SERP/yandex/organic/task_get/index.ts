import { DFSEO } from "../../../..";

export class TaskGet {
	constructor(private DFSEO: DFSEO) {}

	public regular(id: string) {
		return this.DFSEO.fetch({
			method: "GET",
			url: `serp/yandex/organic/task_get/regular/${id}`,
		});
	}

	public html(id: string) {
		return this.DFSEO.fetch({
			method: "GET",
			url: `serp/yandex/organic/task_get/html/${id}`,
		});
	}
}
