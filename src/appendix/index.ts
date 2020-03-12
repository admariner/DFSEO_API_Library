import { DFSEO } from "..";

export class Appendix {
    constructor(private DFSEO: DFSEO) {

    }

    userData() {
        return this.DFSEO.fetch({
            method: "GET",
            url: "appendix/user_data"
        })
    }

    errors() {
        return this.DFSEO.fetch({
            method: "GET",
            url: "appendix/errors"
        })
    }
}