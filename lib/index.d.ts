import { Serp } from "./SERP";
import { KeywordsData } from "./keywords_data";
import { TrafficAnalytics } from "./traffic_analytics";
import { Appendix } from "./appendix";
import { DataForSEOLabs } from "./DataForSEO_labs";
export * from "./typings";
export declare class DFSEO {
    private username;
    private password;
    private useSandbox?;
    /**
     * Logger  of dfseo
     */
    private logger;
    /**
     * Authorization  of dfseo api
     */
    private authorization;
    /**
     * public api methods;
     */
    serp: Serp;
    keywordsData: KeywordsData;
    dataForSEOLabs: DataForSEOLabs;
    trafficAnalytics: TrafficAnalytics;
    appendix: Appendix;
    /**
     * Creates an instance of dfseo api.
     * @param username
     * @param password
     */
    constructor(username: string, password: string, useSandbox?: boolean | undefined);
    /**
     * Generates authorization string
     */
    private generateAuthorizationString;
    fetch(config: {
        url: string;
        method: "GET" | "POST";
        data?: any;
    }): Promise<any>;
}
