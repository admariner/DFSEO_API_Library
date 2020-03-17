import DFSEO from "../../../..";
import {
  ISERP_Google_Organic_Task_Get_Regular_Response,
  ISERP_Google_Organic_Task_Get_Advanced_Response,
  ISERP_Google_Organic_Task_Get_HTML_Response
} from "../../../../../typings";

export class TaskGet {
  constructor(private DFSEO: DFSEO) {}

  regular(id: string): Promise<ISERP_Google_Organic_Task_Get_Regular_Response> {
    return this.DFSEO.fetch({
      method: "GET",
      url: `serp/google/organic/task_get/regular/${id}`
    });
  }

  advanced(
    id: string
  ): Promise<ISERP_Google_Organic_Task_Get_Advanced_Response> {
    return this.DFSEO.fetch({
      method: "GET",
      url: `serp/google/organic/task_get/advanced/${id}`
    });
  }

  html(id: string): Promise<ISERP_Google_Organic_Task_Get_HTML_Response> {
    return this.DFSEO.fetch({
      method: "GET",
      url: `serp/google/organic/task_get/html/${id}`
    });
  }
}
