import { DFSEO } from "..";
import { Google } from "./google";
import { Bing } from "./bing";
import { Yahoo } from "./yahoo";
import { Yandex } from "./yandex";
export declare class Serp {
    private DFSEO;
    google: Google;
    bing: Bing;
    yahoo: Yahoo;
    yandex: Yandex;
    constructor(DFSEO: DFSEO);
}
