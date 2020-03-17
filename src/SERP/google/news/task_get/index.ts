import DFSEO from "../../../../index";

export class TaskGet {
  constructor(private DFSEO: DFSEO) {}

  advanced(id: string) {
    return this.DFSEO.fetch({
      method: "GET",
      url: `serp/google/news/task_get/advanced/${id}`
    });
  }

  html(id: string) {
    return this.DFSEO.fetch({
      method: "GET",
      url: `serp/google/news/task_get/advanced/${id}`
    });
  }
}
