import { Organic } from "./organic";
import { DFSEO } from "../..";
import { ISERP_Google_Languages_Response, ISERP_Google_Locations_Response } from "../../typings";
import { Images } from "./images";
import { Maps } from "./maps";
import { News } from "./news";
export declare class Google {
    private DFSEO;
    organic: Organic;
    images: Images;
    maps: Maps;
    news: News;
    constructor(DFSEO: DFSEO);
    languages(): Promise<ISERP_Google_Languages_Response>;
    locations(country?: string): Promise<ISERP_Google_Locations_Response>;
}
