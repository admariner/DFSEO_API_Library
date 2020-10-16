import { DFSEO } from "../..";
export declare class MarketSpecificAnalysis {
    private DFSEO;
    constructor(DFSEO: DFSEO);
    categoriesForDomain(data: any): Promise<any>;
    keywordsForCategories(data: any): Promise<any>;
    rankedDomainsByCategory(data: any): Promise<any>;
}
