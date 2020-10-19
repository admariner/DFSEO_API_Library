"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var KeywordsForCategory = /** @class */ (function () {
    function KeywordsForCategory(DFSEO) {
        this.DFSEO = DFSEO;
    }
    KeywordsForCategory.prototype.taskPost = function (data) {
        return this.DFSEO.fetch({
            method: "POST",
            url: "keywords_data/google/keywords_for_category/task_post",
            data: data,
        });
    };
    KeywordsForCategory.prototype.tasksReady = function () {
        return this.DFSEO.fetch({
            method: "GET",
            url: "keywords_data/google/keywords_for_category/tasks_ready",
        });
    };
    KeywordsForCategory.prototype.taskGet = function (id) {
        return this.DFSEO.fetch({
            method: "GET",
            url: "keywords_data/google/keywords_for_category/task_get/" + id,
        });
    };
    KeywordsForCategory.prototype.live = function (data) {
        return this.DFSEO.fetch({
            method: "POST",
            url: "keywords_data/google/keywords_for_category/live",
            data: data,
        });
    };
    return KeywordsForCategory;
}());
exports.KeywordsForCategory = KeywordsForCategory;
//# sourceMappingURL=index.js.map