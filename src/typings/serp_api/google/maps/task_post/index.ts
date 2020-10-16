import { ISERP_Request, IDFSEO_API_Response, IDFSEO_API_Task } from "../../../..";

export interface ISERP_Google_Maps_Task_Post_Request extends ISERP_Request {
    /**
 * postback_url datatype
required field if you specify postback_url
corresponds to the function you used for setting a task
possible values:
advanced, html
 */
    postback_data?: "advanced" | "html";
}

export interface ISERP_Google_Maps_Task_Post_Response extends IDFSEO_API_Response {
    tasks: ISERP_Google_Maps_Task_Post_Task[];
}

export interface ISERP_Google_Maps_Task_Post_Task extends IDFSEO_API_Task {
    data: string[];
    result: null;
}
