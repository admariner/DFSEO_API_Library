var Logger = /** @class */ (function () {
    function Logger() {
    }
    Logger.prototype.error = function (code, message) {
        console.log('========================');
        console.log("DATA FOR SEO API - ERROR");
        console.log("error code: " + code);
        console.log("error message: " + message);
        console.log('========================');
    };
    return Logger;
}());
export { Logger };
//# sourceMappingURL=logger.js.map