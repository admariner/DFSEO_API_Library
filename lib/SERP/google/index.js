import { Organic } from "./organic";
import { Images } from "./images";
import { Maps } from "./maps";
import { News } from "./news";
var Google = /** @class */ (function () {
    function Google(DFSEO) {
        this.DFSEO = DFSEO;
        this.organic = new Organic(this.DFSEO);
        this.images = new Images(this.DFSEO);
        this.maps = new Maps(this.DFSEO);
        this.news = new News(this.DFSEO);
    }
    Google.prototype.languages = function () {
        return this.DFSEO.fetch({ method: "GET", url: "serp/google/languages" });
    };
    Google.prototype.locations = function (country) {
        return this.DFSEO.fetch({
            method: "GET",
            url: "serp/google/locations" + (country ? "/" + country : ""),
        });
    };
    return Google;
}());
export { Google };
//# sourceMappingURL=index.js.map