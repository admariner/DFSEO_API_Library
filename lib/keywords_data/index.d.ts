import { DFSEO } from "..";
import { GoogleAds } from "./google_ads";
import { GoogleTrends } from "./google_trends";
export declare class KeywordsData {
    private DFSEO;
    googleAds: GoogleAds;
    googleTrends: GoogleTrends;
    constructor(DFSEO: DFSEO);
}
