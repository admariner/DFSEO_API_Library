import { GoogleAds } from "./google_ads";
import { GoogleTrends } from "./google_trends";
var KeywordsData = /** @class */ (function () {
    function KeywordsData(DFSEO) {
        this.DFSEO = DFSEO;
        this.googleAds = new GoogleAds(this.DFSEO);
        this.googleTrends = new GoogleTrends(this.DFSEO);
    }
    return KeywordsData;
}());
export { KeywordsData };
//# sourceMappingURL=index.js.map