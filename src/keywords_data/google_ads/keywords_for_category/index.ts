import { DFSEO } from "../../..";

export class KeywordsForCategory {
    constructor(private DFSEO: DFSEO) {

    }

    public taskPost(data: any) {
        return this.DFSEO.fetch({
            method: "POST",
            url: "keywords_data/google/keywords_for_category/task_post",
            data
        })
    }

    public tasksReady() {
        return this.DFSEO.fetch({
            method: "GET",
            url: "keywords_data/google/keywords_for_category/tasks_ready"
        })
    }

    public taskGet(id: string) {
        return this.DFSEO.fetch({
            method: "GET",
            url: `keywords_data/google/keywords_for_category/task_get/${id}`
        })
    }

    public live(data: any) {
        return this.DFSEO.fetch({
            method: "POST",
            url: 'keywords_data/google/keywords_for_category/live',
            data
        })
    }
}