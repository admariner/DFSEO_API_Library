import { DFSEO } from "../..";
import { Explore } from "./explore";
export declare class GoogleTrends {
    private DFSEO;
    explore: Explore;
    constructor(DFSEO: DFSEO);
    locations(country?: string): Promise<any>;
    languages(): Promise<any>;
    categories(): Promise<any>;
}
