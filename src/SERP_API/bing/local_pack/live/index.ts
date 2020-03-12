import { DFSEO } from "../../../..";

export class Live {
    constructor(private DFSEO: DFSEO) {

    }

    regular(data: any) {
        this.DFSEO.fetch({
            method: "POST",
            url: `serp/bing/local_pack/live/regular`,
            data
        })
    }

    html(data: any) {
        this.DFSEO.fetch({
            method: "POST",
            url: `serp/bing/local_pack/live/html`,
            data
        })
    }
}