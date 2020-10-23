import { DFSEO } from "..";
import { IOnPage_Task_Post_Request, IOnPage_Task_Post_Response } from "../typings/onPage_api/task_post";
import { IOnPage_Summary_Response } from "../typings/onPage_api/summary";
import { IOnPage_Pages_Request, IOnPage_Pages_Response } from "../typings/onPage_api/pages";
import { IOnPage_Pages_By_Resource_Request } from "../typings/onPage_api/pages_by_resource";

export class OnPage {
	constructor(private DFSEO: DFSEO) {}

	public async taskPost(data: IOnPage_Task_Post_Request[]): Promise<IOnPage_Task_Post_Response> {
		return this.DFSEO.fetch({
			method: "POST",
			url: "on_page/task_post",
			data,
		});
	}

	public summary(id: string): Promise<IOnPage_Summary_Response> {
		return this.DFSEO.fetch({
			method: "GET",
			url: `on_page/summary/${id}`,
		});
	}

	public pages(data: IOnPage_Pages_Request[]): Promise<IOnPage_Pages_Response> {
		return this.DFSEO.fetch({
			method: "POST",
			url: "on_page/pages",
			data,
		});
	}

	public pagesByResource(data: IOnPage_Pages_By_Resource_Request[]): Promise<IOnPage_Pages_Response> {
		return this.DFSEO.fetch({
			method: "POST",
			url: "on_page/pages_by_resource",
			data,
		});
	}

	public resources(data: any[]) {
		return this.DFSEO.fetch({
			method: "POST",
			url: "on_page/resources",
			data,
		});
	}

	public duplicate_tags(data: any[]) {
		return this.DFSEO.fetch({
			method: "POST",
			url: "on_page/duplicate_tags",
			data,
		});
	}

	public duplicate_content(data: any[]) {
		return this.DFSEO.fetch({
			method: "POST",
			url: "on_page/duplicate_content",
			data,
		});
	}

	public links(data: any[]) {
		return this.DFSEO.fetch({
			method: "POST",
			url: "on_page/links",
			data,
		});
	}

	public non_indexable(data: any[]) {
		return this.DFSEO.fetch({
			method: "POST",
			url: "on_page/non_indexable",
			data,
		});
	}

	public waterfall(data: any[]) {
		return this.DFSEO.fetch({
			method: "POST",
			url: "on_page/waterfall",
			data,
		});
	}

	public raw_HTML(data: any[]) {
		return this.DFSEO.fetch({
			method: "POST",
			url: "on_page/raw_html",
			data,
		});
	}
}
