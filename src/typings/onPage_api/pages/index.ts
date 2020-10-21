import { IAvailableFiltersOnPage, IDFSEO_API_Request } from "../..";

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
