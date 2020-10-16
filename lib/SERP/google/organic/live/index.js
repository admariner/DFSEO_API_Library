"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskLive = void 0;
var TaskLive = /** @class */ (function () {
    function TaskLive(DFSEO) {
        this.DFSEO = DFSEO;
    }
    /**
     * Regulars task live - Live SERP provides real-time data on top 100 search engine results for the specified keyword, search engine, and location.
     * @param data
     * @returns regular
     */
    TaskLive.prototype.regular = function (data) {
        return this.DFSEO.fetch({
            method: "POST",
            url: "serp/google/organic/live/regular",
            data: data,
        });
    };
    /**
     * Advanced task live - Live SERP provides real-time data on top 100 search engine results for the specified keyword, search engine, and location. This endpoint will supply a complete overview of featured snippets and other extra elements of SERPs.
     * @param data
     * @returns advanced
     */
    TaskLive.prototype.advanced = function (data) {
        return this.DFSEO.fetch({
            method: "POST",
            url: "serp/google/organic/live/advanced",
            data: data,
        });
    };
    /**
     * Htmls task live - Live SERP HTML provides a raw HTML page of 100 search engine results for the specified keyword, search engine, and location.
     * @param data
     * @returns html
     */
    TaskLive.prototype.html = function (data) {
        return this.DFSEO.fetch({
            method: "POST",
            url: "serp/google/organic/live/html",
            data: data,
        });
    };
    return TaskLive;
}());
exports.TaskLive = TaskLive;
//# sourceMappingURL=index.js.map