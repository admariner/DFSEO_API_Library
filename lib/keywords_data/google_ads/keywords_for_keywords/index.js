"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var KeywordsForKeywords = /** @class */ (function () {
    function KeywordsForKeywords(DFSEO) {
        this.DFSEO = DFSEO;
    }
    KeywordsForKeywords.prototype.taskPost = function (data) {
        return this.DFSEO.fetch({
            method: "POST",
            url: "keywords_data/google/keywords_for_keywords/task_post",
            data: data,
        });
    };
    KeywordsForKeywords.prototype.tasksReady = function () {
        return this.DFSEO.fetch({
            method: "GET",
            url: "keywords_data/google/keywords_for_keywords/tasks_ready",
        });
    };
    KeywordsForKeywords.prototype.taskGet = function (id) {
        return this.DFSEO.fetch({
            method: "GET",
            url: "keywords_data/google/keywords_for_keywords/task_get/" + id,
        });
    };
    KeywordsForKeywords.prototype.live = function (data) {
        return this.DFSEO.fetch({
            method: "POST",
            url: "keywords_data/google/keywords_for_keywords/live",
            data: data,
        });
    };
    return KeywordsForKeywords;
}());
exports.KeywordsForKeywords = KeywordsForKeywords;
//# sourceMappingURL=index.js.map