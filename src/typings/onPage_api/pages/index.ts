import { IAvailableFiltersOnPage, IDFSEO_API_Request, IDFSEO_API_Response, IDFSEO_API_Task } from "../..";
import { IBroken_Page } from "./broken_page";
import { IHTML_Page } from "./html_page";
import { IRedirect_Page } from "./redirect_page";

export interface IOnPage_Pages_Request extends IDFSEO_API_Request {
	id: string;
	limit?: number;
	offset?: number;
	/**
	 * see documentation https://docs.dataforseo.com/v3/on_page/pages/?python
	 */
	filters?: string[];
	/**
	 * see documentation https://docs.dataforseo.com/v3/on_page/pages/?python
	 */
	order_by?: string[];
	tag?: string;
}
export interface IOnPage_Pages_Response extends IDFSEO_API_Response {
	tasks: IOnPage_Pages_Task[];
}
export interface IOnPage_Pages_Task extends IDFSEO_API_Task {
	data: IOnPage_Pages_Request[];
	result: {
		crawl_progress: "in_progress" | "finished";
		items_count: number;
		items: Item_Page[];
	}[];
}

type Item_Page = IHTML_Page | IBroken_Page | IRedirect_Page;

export interface IITem_Page {
	resource_type: "html" | "broken" | "redirect";
}
