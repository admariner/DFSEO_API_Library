import { DFSEO } from "../../..";
import { Live } from "./live";
import { TaskGet } from "./task_get";
export declare class News {
    private DFSEO;
    live: Live;
    taskGet: TaskGet;
    constructor(DFSEO: DFSEO);
    tasksReady(): Promise<any>;
    taskPost(data: any): Promise<any>;
}
