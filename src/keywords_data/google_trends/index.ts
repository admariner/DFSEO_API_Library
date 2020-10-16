import { DFSEO } from "../..";
import { Explore } from "./explore";

export class GoogleTrends {
	public explore: Explore = new Explore(this.DFSEO);
	constructor(private DFSEO: DFSEO) {}

	public locations(country?: string) {
		return this.DFSEO.fetch({
			method: "GET",
			url: country ? `keywords_data/google_trends/locations/${country}` : "keywords_data/google_trends/locations",
		});
	}

	public languages() {
		return this.DFSEO.fetch({
			method: "GET",
			url: "keywords_data/google_trends/languages",
		});
	}

	public categories() {
		return this.DFSEO.fetch({
			method: "GET",
			url: "keywords_data/google_trends/categories",
		});
	}
}
