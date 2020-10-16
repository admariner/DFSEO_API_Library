import { DFSEO } from "../..";
import { Organic } from "./organic";

export class Yahoo {
	public organic: Organic = new Organic(this.DFSEO);
	constructor(private DFSEO: DFSEO) {}

	public locations(country?: string) {
		return this.DFSEO.fetch({
			method: "GET",
			url: country ? `serp/yahoo/locations/${country}` : "serp/yahoo/locations",
		});
	}

	public languages() {
		return this.DFSEO.fetch({
			method: "GET",
			url: "serp/yahoo/languages",
		});
	}
}
