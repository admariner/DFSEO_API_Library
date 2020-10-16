import { ISERP_Google_Maps_Live_Request } from "..";
import { IDFSEO_API_Response, IDFSEO_API_Task, IDFSEOSERPGoogleRating } from "../../../../..";
export interface ISERP_Google_Maps_Live_Advanced_Request extends ISERP_Google_Maps_Live_Request {
}
export interface ISERP_Google_Maps_Live_Advanced_Response extends IDFSEO_API_Response {
    tasks: ISERP_Google_Maps_Live_Advanced_Task[];
}
export interface ISERP_Google_Maps_Live_Advanced_Task extends IDFSEO_API_Task {
    data: string[];
    result: {
        keyword: string;
        type: string;
        se_domain: string;
        location_code: number;
        language_code: string;
        check_url: string;
        datetime: string;
        spell: {
            keyword: string;
            type: "did_you_mean" | "showing_results_for" | "no_results_found_for";
        }[];
        item_types: "maps_search"[];
        se_results_count: number;
        items_count: number;
        items: {
            type: "maps_search";
            rank_group: number;
            rank_absolute: number;
            domain: string;
            title: string;
            url: string;
            rating: IDFSEOSERPGoogleRating[];
        }[];
    }[];
}
