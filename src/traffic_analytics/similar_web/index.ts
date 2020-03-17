import { DFSEO } from "../..";

export class SimilarWeb {
  constructor(private DFSEO: DFSEO) {}

  public taskPost(data: any) {
    return this.DFSEO.fetch({
      method: "POST",
      url: "traffic_analytics/similarweb/task_post",
      data
    });
  }

  public tasksReady() {
    return this.DFSEO.fetch({
      method: "GET",
      url: "traffic_analytics/similarweb/tasks_ready"
    });
  }

  public taskGet(id: string) {
    return this.DFSEO.fetch({
      method: "GET",
      url: `traffic_analytics/similarweb/task_get/${id}`
    });
  }

  public live(data: any) {
    return this.DFSEO.fetch({
      method: "POST",
      url: "traffic_analytics/similarweb/live",
      data
    });
  }
}
