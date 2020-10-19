"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var KeywordsForSite = /** @class */ (function () {
    function KeywordsForSite(DFSEO) {
        this.DFSEO = DFSEO;
    }
    KeywordsForSite.prototype.taskPost = function (data) {
        return this.DFSEO.fetch({
            method: "POST",
            url: "keywords_data/google/keywords_for_site/task_post",
            data: data,
        });
    };
    KeywordsForSite.prototype.tasksReady = function () {
        return this.DFSEO.fetch({
            method: "GET",
            url: "keywords_data/google/keywords_for_site/tasks_ready",
        });
    };
    KeywordsForSite.prototype.taskGet = function (id) {
        return this.DFSEO.fetch({
            method: "GET",
            url: "keywords_data/google/keywords_for_site/task_get/" + id,
        });
    };
    KeywordsForSite.prototype.live = function (data) {
        return this.DFSEO.fetch({
            method: "POST",
            url: "keywords_data/google/keywords_for_site/live",
            data: data,
        });
    };
    return KeywordsForSite;
}());
exports.KeywordsForSite = KeywordsForSite;
//# sourceMappingURL=index.js.map