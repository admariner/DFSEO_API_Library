import { DFSEO } from "../../..";
import { TaskGet } from "./task_get";
import { Live } from "./live";
export declare class LocalPack {
    private DFSEO;
    taskGet: TaskGet;
    live: Live;
    constructor(DFSEO: DFSEO);
    taskPost(data: any): Promise<any>;
    tasksReady(): Promise<any>;
}
