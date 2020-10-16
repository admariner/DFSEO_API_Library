import { DFSEO } from "../../..";
import { ISERP_Google_Organic_Task_Post_Data, ISERP_Google_Organic_Task_Post_Response, ISERP_Google_Organic_Tasks_Ready_Response } from "../../../typings";
import { TaskGet } from "./task_get";
import { TaskLive } from "./live";
export declare class Organic {
    private DFSEO;
    taskGet: TaskGet;
    live: TaskLive;
    constructor(DFSEO: DFSEO);
    taskPost(data: ISERP_Google_Organic_Task_Post_Data[]): Promise<ISERP_Google_Organic_Task_Post_Response>;
    taskReady(): Promise<ISERP_Google_Organic_Tasks_Ready_Response>;
}
