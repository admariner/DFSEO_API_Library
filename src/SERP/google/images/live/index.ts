import { ISERP_Google_Organic_Task_Post_Data, ISERP_Google_Images_Live_Advanced_Response, ISERP_Google_Images_Live_Advanced_Request, ISERP_Google_Images_Live_HTML_Request, ISERP_Google_Images_Live_HTML_Response } from "../../../../typings";
import { DFSEO } from "../../../..";

export class Live {
	constructor(private DFSEO: DFSEO) {}

	advanced(data: ISERP_Google_Images_Live_Advanced_Request[]): Promise<ISERP_Google_Images_Live_Advanced_Response> {
		return this.DFSEO.fetch({
			method: "POST",
			url: "serp/google/images/live/advanced",
			data,
		});
	}

	html(data: ISERP_Google_Images_Live_HTML_Request[]): Promise<ISERP_Google_Images_Live_HTML_Response> {
		return this.DFSEO.fetch({
			method: "POST",
			url: "serp/google/images/live/html",
			data,
		});
	}
}
