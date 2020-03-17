import DFSEO from "../..";
import { SearchVolume } from "./search_volume";
import { KeywordsForSite } from "./keywords_for_site";
import { KeywordsForKeywords } from "./keywords_for_keywords";
import { KeywordsForCategory } from "./keywords_for_category";
import { AdsTrafficByKeywords } from "./ads_traffic_by_keywords";
import { AdsTrafficByPlatforms } from "./ads_traffic_by_platforms";

export class GoogleAds {
  public searchVolume: SearchVolume = new SearchVolume(this.DFSEO);
  public keywordsForSite: KeywordsForSite = new KeywordsForSite(this.DFSEO);
  public keywordsForKeywords: KeywordsForKeywords = new KeywordsForKeywords(
    this.DFSEO
  );
  public keywordsForCategory: KeywordsForCategory = new KeywordsForCategory(
    this.DFSEO
  );
  public adsTrafficByKeywords: AdsTrafficByKeywords = new AdsTrafficByKeywords(
    this.DFSEO
  );
  public adsTrafficByPlatform: AdsTrafficByPlatforms = new AdsTrafficByPlatforms(
    this.DFSEO
  );
  constructor(private DFSEO: DFSEO) {}

  public locations() {
    return this.DFSEO.fetch({
      method: "GET",
      url: "keywords_data/google/locations"
    });
  }

  public languages() {
    return this.DFSEO.fetch({
      method: "GET",
      url: "keywords_data/google/languages"
    });
  }

  public categories() {
    return this.DFSEO.fetch({
      method: "GET",
      url: "keywords_data/google/categories"
    });
  }

  public adWordsStatus() {
    return this.DFSEO.fetch({
      method: "GET",
      url: "keywords_data/google/adwords_status"
    });
  }
}
