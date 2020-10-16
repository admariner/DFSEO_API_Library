import { Google } from "./google";
import { Bing } from "./bing";
import { Yahoo } from "./yahoo";
import { Yandex } from "./yandex";
var Serp = /** @class */ (function () {
    function Serp(DFSEO) {
        this.DFSEO = DFSEO;
        this.google = new Google(this.DFSEO);
        this.bing = new Bing(this.DFSEO);
        this.yahoo = new Yahoo(this.DFSEO);
        this.yandex = new Yandex(this.DFSEO);
    }
    return Serp;
}());
export { Serp };
//# sourceMappingURL=index.js.map