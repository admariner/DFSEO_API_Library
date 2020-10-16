import { DFSEO } from "../..";
export declare class CompetitorResearch {
    private DFSEO;
    constructor(DFSEO: DFSEO);
    rankedKeywords(data: any): Promise<any>;
    serpCompetitors(data: any): Promise<any>;
    competitorsDomain(data: any): Promise<any>;
    domainIntersection(data: any): Promise<any>;
    subdomains(data: any): Promise<any>;
    relevantPages(data: any): Promise<any>;
    domainRankOverview(data: any): Promise<any>;
}
