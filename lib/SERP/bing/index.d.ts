import { DFSEO } from "../..";
import { Organic } from "./organic";
import { LocalPack } from "./local_pack";
export declare class Bing {
    private DFSEO;
    organic: Organic;
    localPack: LocalPack;
    constructor(DFSEO: DFSEO);
    locations(country?: string): Promise<any>;
    languages(): Promise<any>;
}
