import { Organic } from "./organic";
var Yandex = /** @class */ (function () {
    function Yandex(DFSEO) {
        this.DFSEO = DFSEO;
        this.organic = new Organic(this.DFSEO);
    }
    Yandex.prototype.locations = function (country) {
        return this.DFSEO.fetch({
            method: "GET",
            url: country ? "serp/yandex/locations/" + country : "serp/yandex/locations",
        });
    };
    Yandex.prototype.languages = function () {
        return this.DFSEO.fetch({
            method: "GET",
            url: "serp/yandex/languages",
        });
    };
    return Yandex;
}());
export { Yandex };
//# sourceMappingURL=index.js.map