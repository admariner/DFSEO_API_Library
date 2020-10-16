import { DFSEO } from "../../../..";

export class Live {
	constructor(private DFSEO: DFSEO) {}

	advanced(data: any) {
		return this.DFSEO.fetch({
			method: "POST",
			url: "serp/google/maps/live/advanced",
			data,
		});
	}
}
