import { DFSEO } from "..";
import { Google } from "./google";
import { Bing } from "./bing";
import { Yahoo } from "./yahoo";
import { Yandex } from "./yandex";

export class SerpAPI {
    public google: Google = new Google(this.DFSEO)
    public bing: Bing = new Bing(this.DFSEO);
    public yahoo: Yahoo = new Yahoo(this.DFSEO);
    public yandex: Yandex = new Yandex(this.DFSEO);
    constructor(private DFSEO: DFSEO) {

    }
}