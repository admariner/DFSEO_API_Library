var Live = /** @class */ (function () {
    function Live(DFSEO) {
        this.DFSEO = DFSEO;
    }
    Live.prototype.advanced = function (data) {
        return this.DFSEO.fetch({
            method: "POST",
            url: "serp/google/maps/live/advanced",
            data: data,
        });
    };
    return Live;
}());
export { Live };
//# sourceMappingURL=index.js.map