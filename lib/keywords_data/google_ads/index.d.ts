import { DFSEO } from "../..";
import { SearchVolume } from "./search_volume";
import { KeywordsForSite } from "./keywords_for_site";
import { KeywordsForKeywords } from "./keywords_for_keywords";
import { KeywordsForCategory } from "./keywords_for_category";
import { AdsTrafficByKeywords } from "./ads_traffic_by_keywords";
import { AdsTrafficByPlatforms } from "./ads_traffic_by_platforms";
export declare class GoogleAds {
    private DFSEO;
    searchVolume: SearchVolume;
    keywordsForSite: KeywordsForSite;
    keywordsForKeywords: KeywordsForKeywords;
    keywordsForCategory: KeywordsForCategory;
    adsTrafficByKeywords: AdsTrafficByKeywords;
    adsTrafficByPlatform: AdsTrafficByPlatforms;
    constructor(DFSEO: DFSEO);
    locations(): Promise<any>;
    languages(): Promise<any>;
    categories(): Promise<any>;
    adWordsStatus(): Promise<any>;
}
