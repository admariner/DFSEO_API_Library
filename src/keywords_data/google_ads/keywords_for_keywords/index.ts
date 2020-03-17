import { DFSEO } from "../../..";

export class KeywordsForKeywords {
    constructor(private DFSEO: DFSEO) {

    }

    public taskPost(data: any) {
        return this.DFSEO.fetch({
            method: "POST",
            url: "keywords_data/google/keywords_for_keywords/task_post",
            data
        })
    }

    public tasksReady() {
        return this.DFSEO.fetch({
            method: "GET",
            url: "keywords_data/google/keywords_for_keywords/tasks_ready"
        })
    }

    public taskGet(id: string) {
        return this.DFSEO.fetch({
            method: "GET",
            url: `keywords_data/google/keywords_for_keywords/task_get/${id}`
        })
    }

    public live(data: any) {
        return this.DFSEO.fetch({
            method: "POST",
            url: 'keywords_data/google/keywords_for_keywords/live',
            data
        })
    }
}