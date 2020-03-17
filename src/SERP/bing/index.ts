import DFSEO from "../..";
import { Organic } from "./organic";
import { LocalPack } from "./local_pack";

export class Bing {
  public organic: Organic = new Organic(this.DFSEO);
  public localPack: LocalPack = new LocalPack(this.DFSEO);

  constructor(private DFSEO: DFSEO) {}

  locations(country?: string) {
    return this.DFSEO.fetch({
      method: "GET",
      url: country ? `serp/bing/locations/${country}` : "serp/bing/locations"
    });
  }

  languages() {
    return this.DFSEO.fetch({
      method: "GET",
      url: "serp/bing/languages"
    });
  }
}
