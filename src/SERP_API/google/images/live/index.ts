import { ISERP_Google_Organic_Task_Post_Data } from "../../../../../typings";
import { DFSEO } from "../../../..";

export class Live {
    constructor(private DFSEO: DFSEO) {

    }

    advanced(data: ISERP_Google_Organic_Task_Post_Data[]): Promise<any> {
        return this.DFSEO.fetch({
            method: "POST",
            url: "serp/google/images/live/advanced",
            data
        });
    }

    html(data: ISERP_Google_Organic_Task_Post_Data[]): Promise<any> {
        return this.DFSEO.fetch({
            method: "POST",
            url: "serp/google/images/live/html",
            data
        })
    }
}