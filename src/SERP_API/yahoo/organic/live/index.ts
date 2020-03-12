import { DFSEO } from "../../../..";

export class Live {
    constructor(private DFSEO: DFSEO) {

    }

    public regular(data: any) {
        return this.DFSEO.fetch({
            method: "POST",
            url: "serp/yahoo/organic/live/regular",
            data
        })
    }

    public html(data: any) {
        return this.DFSEO.fetch({
            method: "POST",
            url: "serp/yahoo/organic/live/hrml",
            data
        })
    }
}