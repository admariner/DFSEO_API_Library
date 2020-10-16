import { DFSEO } from "../../../..";
import { ISERP_Google_Images_Task_Get_HTML_Response, ISERP_Google_Images_Task_Get_Advanced_Response } from "../../../../typings";
export declare class TaskGet {
    private DFSEO;
    constructor(DFSEO: DFSEO);
    /**
     * Get Google Images SERP Results by id
     * @param id
     * @returns advanced
     */
    advanced(id: string): Promise<ISERP_Google_Images_Task_Get_Advanced_Response>;
    /**
     * Get Google Images HTML Results by id
     * @param id
     * @returns html
     */
    html(id: string): Promise<ISERP_Google_Images_Task_Get_HTML_Response>;
}
