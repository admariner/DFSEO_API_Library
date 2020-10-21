"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Logger = /** @class */ (function () {
    function Logger() {
    }
    Logger.prototype.error = function (code, message, path) {
        console.log("========================");
        console.log("DATA FOR SEO API - ERROR");
        console.log("error code: " + code);
        if (message)
            console.log("error message: " + message);
        if (path)
            console.log("endpoint attempted: " + path);
        console.log("========================");
    };
    return Logger;
}());
exports.Logger = Logger;
//# sourceMappingURL=logger.js.map