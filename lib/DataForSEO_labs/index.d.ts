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
    filters(): Promise<any>;
    categories(): Promise<any>;
    locationsAndLanguages(): Promise<any>;
}
