import { DFSEO } from "../../../..";
import { ISERP_Google_Organic_Live_Advanced_Post_Response, ISERP_Google_Organic_Live_Request } from '../../../../typings';
export class TaskLive {
    constructor(private DFSEO: DFSEO) {

    }

    /**
     * Regulars task live - Live SERP provides real-time data on top 100 search engine results for the specified keyword, search engine, and location.
     * @param data 
     * @returns regular 
     */
    regular(data: ISERP_Google_Organic_Live_Request): Promise<ISERP_Google_Organic_Live_Advanced_Post_Response> {
        return this.DFSEO.fetch({ method: 'POST', url: 'serp/google/organic/live/regular', data });
    }

    /**
     * Advanced task live - Live SERP provides real-time data on top 100 search engine results for the specified keyword, search engine, and location. This endpoint will supply a complete overview of featured snippets and other extra elements of SERPs.
     * @param data 
     * @returns advanced 
     */
    advanced(data: ISERP_Google_Organic_Live_Request): Promise<ISERP_Google_Organic_Live_Advanced_Post_Response> {
        return this.DFSEO.fetch({ method: 'POST', url: 'serp/google/organic/live/advanced', data });
    }

    /**
     * Htmls task live - Live SERP HTML provides a raw HTML page of 100 search engine results for the specified keyword, search engine, and location.
     * @param data 
     * @returns html 
     */
    html(data: ISERP_Google_Organic_Live_Request): Promise<ISERP_Google_Organic_Live_Advanced_Post_Response> {
        return this.DFSEO.fetch({ method: 'POST', url: 'serp/google/organic/live/html', data });
    }
}