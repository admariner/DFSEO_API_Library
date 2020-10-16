import { ISERP_Google_Request } from "../..";
import { IDFSEO_API_Response, IDFSEO_API_Task } from "../../../..";
export interface ISERP_Google_Images_Task_Post_Request extends ISERP_Google_Request {
}
export interface ISERP_Google_Images_Task_Post_Response extends IDFSEO_API_Response {
    tasks: ISERP_Google_Images_Task_Post_Task[];
}
export interface ISERP_Google_Images_Task_Post_Task extends IDFSEO_API_Task {
    results: null;
}
