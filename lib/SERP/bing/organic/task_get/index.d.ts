import { DFSEO } from "../../../..";
export declare class TaskGet {
    private DFSEO;
    constructor(DFSEO: DFSEO);
    regular(id: string): Promise<any>;
    html(id: string): Promise<any>;
}
