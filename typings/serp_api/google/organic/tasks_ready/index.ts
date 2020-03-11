import { ISERP_Google_Organic_Task_Post_Data } from "../task_post";
import { IDFSEO_API_Response, IDFSEO_API_Task } from "../../../..";


export interface ISERP_Google_Organic_Tasks_Ready_Response extends IDFSEO_API_Response {
    tasks: ISERP_Google_Organic_Tasks_Ready_Task[];
}

export interface ISERP_Google_Organic_Tasks_Ready_Task extends IDFSEO_API_Task {
    /**
     * contains the parameters passed in the request’s URL
     */
    data: ISERP_Google_Organic_Task_Post_Data[];
    /**
     * array of results
     */
    result: {
        /**
         * task identifier of the completed task
unique task identifier in our system in the UUID format
         */
        id: string;
        /**
         * search engine specified when setting the task
         */
        se: string;
        /**
         * 	type of search engine
can take the following values: organic
         */
        se_type: "organic";
        /**
         * date when the task was posted (in the UTC format)
         */
        date_posted: string;
        /**
         * URL for collecting the results of the SERP Regular task
if SERP Regular is not supported in the specified endpoint, the value will be null
         */
        endpoint_regular: string | null;
        /**
         * URL for collecting the results of the SERP Advanced task
if SERP Advanced is not supported in the specified endpoint, the value will be null
         */
        endpoint_advanced: string | null;
        /**
         * URL for collecting the results of the SERP HTML task
if SERP HTML is not supported in the specified endpoint, the value will be null
         */
        endpoint_html: string | null;
    }[]
}
