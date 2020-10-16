import { ISERP_Google_Organic_Task_Post_Data } from "../../task_post";
export interface ISERP_Google_Organic_Task_Get_HTML_Response {
    version: string;
    status_code: number;
    status_message: string;
    time: string;
    cost: number;
    tasks_count: number;
    tasks_error: number;
    tasks: {
        id: string;
        status_code: number;
        status_message: string;
        time: string;
        cost: number;
        result_count: number;
        path: string[];
        data: ISERP_Google_Organic_Task_Post_Data[];
        result: {
            keyword: string;
            type: string;
            se_domain: string;
            location_code: number;
            language_code: string;
            datetime: string;
            items_count: number;
            items: {
                page: number;
                date: string;
                html: string;
            }[];
        }[];
    }[];
}
