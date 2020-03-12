import { DFSEO } from "../../..";

export class Explore {
    constructor(private DFSEO: DFSEO) {

    }

    taskPost(data: any) {
        return this.DFSEO.fetch({
            method: "POST",
            url: "keywords_data/google_trends/explore/task_post",
            data
        })
    }

    tasksReady() {
        return this.DFSEO.fetch({
            method: "GET",
            url: "keywords_data/google_trends/explore/tasks_ready"
        })
    }

    taskGet(id: string) {
        return this.DFSEO.fetch({
            method: "GET",
            url: `keywords_data/google_trends/explore/task_get/${id}`
        })
    }

    live(data: any) {
        return this.DFSEO.fetch({
            method: "POST",
            url: "keywords_data/google_trends/explore/live",
            data
        })
    }
}