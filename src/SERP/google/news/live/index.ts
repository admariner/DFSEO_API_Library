import { DFSEO } from "../../../..";

export class Live {
    constructor(private DFSEO: DFSEO) {

    }

    advanced(data: any): Promise<any> {
        return this.DFSEO.fetch({
            method: "POST",
            url: "serp/google/news/live/advanced",
            data
        })
    }

    html(data: any): Promise<any> {
        return this.DFSEO.fetch({
            method: "POST",
            url: "serp/google/news/live/html",
            data
        })
    }
}