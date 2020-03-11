import { DFSEO } from "..";
import { Google } from "./google";

export class SerpAPI {
    public google: Google = new Google(this.DFSEO)
    constructor(private DFSEO: DFSEO) {

    }
}