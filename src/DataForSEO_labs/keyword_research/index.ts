import DFSEO from "../..";

export class KeywordResearch {
  constructor(private DFSEO: DFSEO) {}

  relatedKeywords(data: any) {
    return this.DFSEO.fetch({
      method: "POST",
      url: "dataforseo_labs/related_keywords/live",
      data
    });
  }

  keywordSuggestions(data: any) {
    return this.DFSEO.fetch({
      method: "POST",
      url: "dataforseo_labs/keyword_suggestions/live",
      data
    });
  }

  keywordIdeas(data: any) {
    return this.DFSEO.fetch({
      method: "POST",
      url: "dataforseo_labs/keyword_ideas/live",
      data
    });
  }
}
