"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var SERP_1 = require("./SERP");
var logger_1 = require("./helpers/logger");
var keywords_data_1 = require("./keywords_data");
var traffic_analytics_1 = require("./traffic_analytics");
var appendix_1 = require("./appendix");
var node_fetch_1 = __importDefault(require("node-fetch"));
var DataForSEO_labs_1 = require("./DataForSEO_labs");
var OnPage_1 = require("./OnPage");
__export(require("./typings"));
var DFSEO = /** @class */ (function () {
    /**
     * Creates an instance of dfseo api.
     * @param username
     * @param password
     */
    function DFSEO(username, password, useSandbox) {
        this.username = username;
        this.password = password;
        this.useSandbox = useSandbox;
        /**
         * Logger  of dfseo
         */
        this.logger = new logger_1.Logger();
        /**
         * public api methods;
         */
        this.serp = new SERP_1.Serp(this);
        this.onPage = new OnPage_1.OnPage(this);
        this.keywordsData = new keywords_data_1.KeywordsData(this);
        this.dataForSEOLabs = new DataForSEO_labs_1.DataForSEOLabs(this);
        this.trafficAnalytics = new traffic_analytics_1.TrafficAnalytics(this);
        this.appendix = new appendix_1.Appendix(this);
        this.authorization = this.generateAuthorizationString();
    }
    /**
     * Generates authorization string
     */
    DFSEO.prototype.generateAuthorizationString = function () {
        var stringToEncode = this.username + ":" + this.password;
        var base64 = Buffer.from(stringToEncode).toString("base64");
        return "Basic " + base64;
    };
    DFSEO.prototype.fetch = function (config) {
        return __awaiter(this, void 0, void 0, function () {
            var authorization, baseURL, headers, path, response, data, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        authorization = this.authorization;
                        baseURL = this.useSandbox ? "https://sandbox.dataforseo.com/v3/" : "https://api.dataforseo.com/v3/";
                        headers = { authorization: authorization, "Content-Type": "application/json" };
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 4, , 5]);
                        path = baseURL + config.url;
                        return [4 /*yield*/, node_fetch_1.default(path, {
                                method: config.method,
                                body: JSON.stringify(config.data),
                                headers: headers,
                            })];
                    case 2:
                        response = _a.sent();
                        if (response.status !== 200) {
                            this.logger.error(response.status, response.statusText, path);
                            throw response.statusText;
                        }
                        return [4 /*yield*/, response.json()];
                    case 3:
                        data = _a.sent();
                        if (data.status_code !== 20000 && data.status_code !== 20100) {
                            this.logger.error(data.status_code, data.status_message, path);
                        }
                        return [2 /*return*/, data];
                    case 4:
                        e_1 = _a.sent();
                        console.log(e_1);
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    return DFSEO;
}());
exports.DFSEO = DFSEO;
//# sourceMappingURL=index.js.map