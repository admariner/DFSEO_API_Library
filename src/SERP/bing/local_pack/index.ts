import DFSEO from "../../..";
import { TaskGet } from "./task_get";
import { Live } from "./live";

export class LocalPack {
  public taskGet: TaskGet = new TaskGet(this.DFSEO);
  public live: Live = new Live(this.DFSEO);
  constructor(private DFSEO: DFSEO) {}

  public taskPost(data: any) {
    return this.DFSEO.fetch({
      method: "POST",
      url: "serp/bing/local_pack/task_post",
      data
    });
  }

  public tasksReady() {
    return this.DFSEO.fetch({
      method: "GET",
      url: "serp/bing/local_pack/tasks_ready"
    });
  }
}
