import { DFSEO } from "../../..";
import { Live } from "./live";
import { TaskGet } from "./task_get";
export declare class Organic {
    private DFSEO;
    live: Live;
    taskGet: TaskGet;
    constructor(DFSEO: DFSEO);
    taskPost(data: any): Promise<any>;
    tasksReady(): Promise<any>;
}
