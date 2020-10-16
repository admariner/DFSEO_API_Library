import { DFSEO } from "../..";

export class MarketSpecificAnalysis {
	constructor(private DFSEO: DFSEO) {}

	categoriesForDomain(data: any) {
		return this.DFSEO.fetch({
			method: "POST",
			url: "dataforseo_labs/categories_for_domain/live",
			data,
		});
	}

	keywordsForCategories(data: any) {
		return this.DFSEO.fetch({
			method: "POST",
			url: "dataforseo_labs/keyword_for_categories/live",
			data,
		});
	}

	rankedDomainsByCategory(data: any) {
		return this.DFSEO.fetch({
			method: "POST",
			url: "dataforseo_labs/ranked_domains_by_category/live",
			data,
		});
	}
}
