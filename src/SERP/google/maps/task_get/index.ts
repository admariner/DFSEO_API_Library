import DFSEO from "../../../..";

export class TaskGet {
  constructor(private DFSEO: DFSEO) {}

  advanced(id: string) {
    return this.DFSEO.fetch({
      method: "GET",
      url: `serp/google/maps/task_get/advanced/${id}`
    });
  }
}
