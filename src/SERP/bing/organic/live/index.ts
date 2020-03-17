import DFSEO from "../../../..";

export class Live {
  constructor(private DFSEO: DFSEO) {}

  regular(data: any) {
    return this.DFSEO.fetch({
      method: "POST",
      url: "serp/bing/organic/live/regular",
      data
    });
  }

  html(data: any) {
    return this.DFSEO.fetch({
      method: "POST",
      url: "serp/bing/organic/live/html",
      data
    });
  }
}
