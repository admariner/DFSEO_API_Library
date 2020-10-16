import { ISERP_Google_Maps_Live_Request, IDFSEO_API_Response, IDFSEO_API_Task } from "../../../../..";
export interface ISERP_Google_Maps_Live_HTML_Request extends ISERP_Google_Maps_Live_Request {
}
export interface ISERP_Google_Maps_Live_HTML_Response extends IDFSEO_API_Response {
    tasks: ISERP_Google_Maps_Live_HTML_Task[];
}
export interface ISERP_Google_Maps_Live_HTML_Task extends IDFSEO_API_Task {
    data: string[];
    keyword: string;
    type: string;
    se_domain: string;
    location_code: string;
    language_code: string;
    datetime: string;
    items_count: number;
    items: {
        page: number;
        date: string;
        html: string;
    }[];
}
