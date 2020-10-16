import { Organic } from "./organic";
var Yahoo = /** @class */ (function () {
    function Yahoo(DFSEO) {
        this.DFSEO = DFSEO;
        this.organic = new Organic(this.DFSEO);
    }
    Yahoo.prototype.locations = function (country) {
        return this.DFSEO.fetch({
            method: "GET",
            url: country ? "serp/yahoo/locations/" + country : "serp/yahoo/locations",
        });
    };
    Yahoo.prototype.languages = function () {
        return this.DFSEO.fetch({
            method: "GET",
            url: "serp/yahoo/languages",
        });
    };
    return Yahoo;
}());
export { Yahoo };
//# sourceMappingURL=index.js.map