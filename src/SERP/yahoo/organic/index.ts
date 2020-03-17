import DFSEO from "../../..";
import { Live } from "./live";
import { TaskGet } from "./task_get";

export class Organic {
  public live: Live = new Live(this.DFSEO);
  public taskGet: TaskGet = new TaskGet(this.DFSEO);
  constructor(private DFSEO: DFSEO) {}

  public taskPost(data: any) {
    return this.DFSEO.fetch({
      method: "POST",
      url: "serp/yahoo/organic/task_post",
      data
    });
  }

  public tasksReady() {
    return this.DFSEO.fetch({
      method: "GET",
      url: "serp/yahoo/organic/tasks_ready"
    });
  }
}
