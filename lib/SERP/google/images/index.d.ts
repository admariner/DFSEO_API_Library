import { DFSEO } from "../../..";
import { ISERP_Google_Images_Task_Post_Request, ISERP_Google_Images_Task_Post_Response, ISERP_Google_Images_Tasks_Ready_Response } from "../../../typings";
import { TaskGet } from "./task_get";
import { Live } from "./live";
export declare class Images {
    private DFSEO;
    taskGet: TaskGet;
    live: Live;
    constructor(DFSEO: DFSEO);
    taskPost(data: ISERP_Google_Images_Task_Post_Request[]): Promise<ISERP_Google_Images_Task_Post_Response>;
    tasksReady(): Promise<ISERP_Google_Images_Tasks_Ready_Response>;
}
