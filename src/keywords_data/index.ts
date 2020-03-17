import DFSEO from "..";
import { GoogleAds } from "./google_ads";
import { GoogleTrends } from "./google_trends";

export class KeywordsData {
  public googleAds: GoogleAds = new GoogleAds(this.DFSEO);
  public googleTrends: GoogleTrends = new GoogleTrends(this.DFSEO);
  constructor(private DFSEO: DFSEO) {}
}
