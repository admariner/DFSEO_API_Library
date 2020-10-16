import { DFSEO } from "../..";
export declare class KeywordResearch {
    private DFSEO;
    constructor(DFSEO: DFSEO);
    relatedKeywords(data: any): Promise<any>;
    keywordSuggestions(data: any): Promise<any>;
    keywordIdeas(data: any): Promise<any>;
}
