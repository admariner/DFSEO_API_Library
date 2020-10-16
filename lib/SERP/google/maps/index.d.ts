import { DFSEO } from "../../..";
import { ISERP_Google_Organic_Task_Post_Data, ISERP_Google_Organic_Task_Post_Response, ISERP_Google_Maps_Task_Ready_Response } from "../../../typings";
import { Live } from "./live";
import { TaskGet } from "./task_get";
export declare class Maps {
    private DFSEO;
    live: Live;
    taskGet: TaskGet;
    constructor(DFSEO: DFSEO);
    taskPost(data: ISERP_Google_Organic_Task_Post_Data[]): Promise<ISERP_Google_Organic_Task_Post_Response>;
    tasksReady(): Promise<ISERP_Google_Maps_Task_Ready_Response>;
}
