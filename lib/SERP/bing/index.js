import { Organic } from "./organic";
import { LocalPack } from "./local_pack";
var Bing = /** @class */ (function () {
    function Bing(DFSEO) {
        this.DFSEO = DFSEO;
        this.organic = new Organic(this.DFSEO);
        this.localPack = new LocalPack(this.DFSEO);
    }
    Bing.prototype.locations = function (country) {
        return this.DFSEO.fetch({
            method: "GET",
            url: country ? "serp/bing/locations/" + country : "serp/bing/locations",
        });
    };
    Bing.prototype.languages = function () {
        return this.DFSEO.fetch({
            method: "GET",
            url: "serp/bing/languages",
        });
    };
    return Bing;
}());
export { Bing };
//# sourceMappingURL=index.js.map