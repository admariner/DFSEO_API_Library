import { DFSEO } from "../..";
import { Organic } from "./organic";

export class Yandex {
	public organic: Organic = new Organic(this.DFSEO);
	constructor(private DFSEO: DFSEO) {}

	public locations(country?: string) {
		return this.DFSEO.fetch({
			method: "GET",
			url: country ? `serp/yandex/locations/${country}` : "serp/yandex/locations",
		});
	}

	public languages() {
		return this.DFSEO.fetch({
			method: "GET",
			url: "serp/yandex/languages",
		});
	}
}
