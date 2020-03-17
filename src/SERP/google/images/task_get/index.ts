import { DFSEO } from "../../../..";
import { ISERP_Google_Images_Task_Get_HTML_Response, ISERP_Google_Images_Task_Get_Advanced_Response } from "../../../../../typings";

export class TaskGet {
    constructor(private DFSEO: DFSEO) {

    }

    /**
     * Get Google Images SERP Results by id
     * @param id 
     * @returns advanced 
     */
    advanced(id: string): Promise<ISERP_Google_Images_Task_Get_Advanced_Response> {
        return this.DFSEO.fetch({ method: "GET", url: `serp/google/images/task_get/advanced/${id}` });
    }

    /**
     * Get Google Images HTML Results by id
     * @param id 
     * @returns html 
     */
    html(id: string): Promise<ISERP_Google_Images_Task_Get_HTML_Response> {
        return this.DFSEO.fetch({ method: "GET", url: `serp/google/images/task_get/html/${id}` });
    }
}