import { DFSEO } from "../../../..";

export class TaskGet {
    constructor(private DFSEO: DFSEO) {

    }

    /**
     * Get Google Images SERP Results by id
     * @param id 
     * @returns advanced 
     */
    advanced(id: string): Promise<any> {
        return this.DFSEO.fetch({ method: "GET", url: `serp/google/images/task_get/advanced/${id}` });
    }

    /**
     * Get Google Images HTML Results by id
     * @param id 
     * @returns html 
     */
    html(id: string): Promise<any> {
        return this.DFSEO.fetch({ method: "GET", url: `serp/google/images/task_get/html/${id}` });
    }
}