"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Appendix = /** @class */ (function () {
    function Appendix(DFSEO) {
        this.DFSEO = DFSEO;
    }
    Appendix.prototype.userData = function () {
        return this.DFSEO.fetch({
            method: "GET",
            url: "appendix/user_data",
        });
    };
    Appendix.prototype.errors = function () {
        return this.DFSEO.fetch({
            method: "GET",
            url: "appendix/errors",
        });
    };
    return Appendix;
}());
exports.Appendix = Appendix;
//# sourceMappingURL=index.js.map