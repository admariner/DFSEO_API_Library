import { ISERP_Google_Organic_Task_Post_Data } from "../../task_post";
import { IDFSEO_API_Response, IDFSEO_API_Task } from "../../../../..";
export interface ISERP_Google_Organic_Task_Get_Regular_Response extends IDFSEO_API_Response {
    tasks: ISERP_Google_Organic_Task_Get_Regular_Task[];
}
export interface ISERP_Google_Organic_Task_Get_Regular_Task extends IDFSEO_API_Task {
    data: ISERP_Google_Organic_Task_Post_Data[];
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
            type: string;
        }[];
        item_types: Array<"organic" | "paid">;
        se_results_count: number;
        items_count: number;
        items: Array<{
            type: "organic";
            rank_group: number;
            rank_absolute: number;
            domain: string;
            title: string;
            description: string;
            url: string;
            breadcrumb: string;
        } | {
            type: 'paid';
            rank_group: number;
            rank_absolute: number;
            domain: string;
            title: string;
            description: string;
            url: string;
            breadcrumb: string;
        }>;
    }[];
}
