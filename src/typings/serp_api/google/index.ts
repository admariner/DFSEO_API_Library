import { IDFSEO_API_Response, ISERP_Request, IDFSEO_API_Task } from '../..';

export * from './images';
export * from './languages';
export * from './locations';
export * from './maps';
export * from './news';
export * from './organic';

export interface ISERP_Google_Live_Request extends ISERP_Request {
}

export interface ISERP_Google_Request extends ISERP_Request { }

/**
 * 	the element’s rating
the popularity rate based on reviews and displayed in SERP
 */
export interface IDFSEOSERPGoogleRating {
    rating_type: DFSEORatingType
    /**
     * the value of the rating
     */
    value: number;
    /**
     * the amount of feedback
     */
    votes_count: number;
    /**
     * the maximum value for a rating_type
     */
    rating_max: number;
}
/**
 * the type of rating
here you can find the following elements: Max5, Percents, CustomMax
 */
export type DFSEORatingType = "Max5" | "Percents" | "CustomMax";

export interface ISERP_Google_Tasks_Ready_Response extends IDFSEO_API_Response {

}

export interface ISERP_Google_Tasks_Ready_Task extends IDFSEO_API_Task {
    /**
     * contains the parameters passed in the request’s URL
     */
    data: any;
    /**
     * array of results
     */
    result: ISERP_Google_Tasks_Ready_Result[]
}

export interface ISERP_Google_Tasks_Ready_Result {
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
     * type of search engine
     */
    se_type: string;
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
}