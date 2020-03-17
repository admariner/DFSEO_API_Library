import DFSEO from "../..";

export class CompetitorResearch {
  constructor(private DFSEO: DFSEO) {}

  rankedKeywords(data: any) {
    return this.DFSEO.fetch({
      method: "POST",
      url: "dataforseo_labs/ranked_keywords/live",
      data
    });
  }

  serpCompetitors(data: any) {
    return this.DFSEO.fetch({
      method: "POST",
      url: "dataforseo_labs/ranked_keywords/live",
      data
    });
  }

  competitorsDomain(data: any) {
    return this.DFSEO.fetch({
      method: "POST",
      url: "dataforseo_labs/competitors_domain/live",
      data
    });
  }

  domainIntersection(data: any) {
    return this.DFSEO.fetch({
      method: "POST",
      url: "dataforseo_labs/domain_intersection/live",
      data
    });
  }

  subdomains(data: any) {
    return this.DFSEO.fetch({
      method: "POST",
      url: "dataforseo_labs/subdomains/live",
      data
    });
  }

  relevantPages(data: any) {
    return this.DFSEO.fetch({
      method: "POST",
      url: "dataforseo_labs/relevant_pages/live",
      data
    });
  }

  domainRankOverview(data: any) {
    return this.DFSEO.fetch({
      method: "POST",
      url: "dataforseo_labs/domain_rank_overview/live",
      data
    });
  }
}
