import { IDFSEO_API_Response, IDFSEO_API_Task } from "../../../..";

export interface ISERP_Google_Maps_Task_Ready_Response extends IDFSEO_API_Response {
    tasks: ISERP_Google_Maps_Task_Ready_Task[];
}

export interface ISERP_Google_Maps_Task_Ready_Task extends IDFSEO_API_Task {
    data: string[];
    result: {
        id: string;
        se: string;
        se_type: "maps";
        date_posted: string;
        endpoint_regular: string | null;
        endpoint_advanced: string | null;
        endpoint_html: string | null;
    }[]
}