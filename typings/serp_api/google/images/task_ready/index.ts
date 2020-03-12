import { ISERP_Google_Tasks_Ready_Response, ISERP_Google_Tasks_Ready_Task, ISERP_Google_Tasks_Ready_Result } from "../..";

export interface ISERP_Google_Images_Tasks_Ready_Response extends ISERP_Google_Tasks_Ready_Response {
    tasks: ISERP_Google_Images_Tasks_Ready_Task[]
}

export interface ISERP_Google_Images_Tasks_Ready_Task extends ISERP_Google_Tasks_Ready_Task {
    result: ISERP_Google_Images_Tasks_Ready_Result[]
}

export interface ISERP_Google_Images_Tasks_Ready_Result extends ISERP_Google_Tasks_Ready_Result {
    /**
     * type of search engine
can take the following values: images
     */
    se_type: "images"
}