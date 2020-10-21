import { DFSEO } from "..";
import { KeywordResearch } from "./keyword_research";
import { MarketSpecificAnalysis } from "./market_specific_analysis";
import { CompetitorResearch } from "./competitor_research";
export declare class DataForSEOLabs {
    private DFSEO;
    keywordResearch: KeywordResearch;
    marketSpecificAnalysis: MarketSpecificAnalysis;
    competitorResearch: CompetitorResearch;
    constructor(DFSEO: DFSEO);
    /**
     * this endpoint does not work currently. But here's the documentation:
     *
     * https://docs.dataforseo.com/v3/dataforseo_labs/filters/?php
     */
    filters(): Promise<any>;
    categories(): Promise<any>;
    locationsAndLanguages(): Promise<any>;
}
