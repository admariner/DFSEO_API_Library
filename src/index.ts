import { SerpAPI } from "./SERP_API";
import { Logger } from "./helpers/logger";
import { KeywordsDataAPI } from "./keywords_data_API";
import { TrafficAnalyticsAPI } from "./traffic_analytics_API";
import { Appendix } from "./appendix";
import fetch from "node-fetch";
import { DataForSEOLabsAPI } from "./DataForSEO_labs_API";

export class DFSEO {
  /**
   * Logger  of dfseo
   */
  private logger: Logger = new Logger();
  /**
   * Authorization  of dfseo api
   */
  private authorization: string;
  /**
   * public api methods;
   */
  public serpAPI: SerpAPI = new SerpAPI(this);
  public keywordsDataAPI: KeywordsDataAPI = new KeywordsDataAPI(this);
  public dataForSEOLabsAPI: DataForSEOLabsAPI = new DataForSEOLabsAPI(this);
  public trafficAnalyticsAPI: TrafficAnalyticsAPI = new TrafficAnalyticsAPI(
    this
  );
  public appendix: Appendix = new Appendix(this);

  /**
   * Creates an instance of dfseo api.
   * @param username
   * @param password
   */
  constructor(
    private username: string,
    private password: string,
    private useSandbox?: boolean
  ) {
    this.authorization = this.generateAuthorizationString();
  }
  /**
   * Generates authorization string
   */
  private generateAuthorizationString(): string {
    const stringToEncode: string = `${this.username}:${this.password}`;
    let base64 = Buffer.from(stringToEncode).toString("base64");

    return `Basic ${base64}`;
  }

  public async fetch(config: {
    url: string;
    method: "GET" | "POST";
    data?: any;
  }): Promise<any> {
    const authorization = this.authorization;
    const useSandbox = this.useSandbox;
    const baseURL = this.useSandbox
      ? "https://sandbox.dataforseo.com/v3/"
      : "https://api.dataforseo.com/v3/";
    const headers = { authorization, "Content-Type": "application/json" };
    try {
      const response = await fetch(baseURL + config.url, {
        method: config.method,
        body: JSON.stringify(config.data),
        headers
      });

      if (response.status !== 200) {
        this.logger.error(response.status, response.statusText);
        throw response.statusText;
      }

      const data = await response.json();
      if (data.status_code !== 20000 && data.status_code !== 20100) {
        this.logger.error(data.status_code, data.status_message);
        throw data.status_message;
      }

      return data;
    } catch (e) {
      console.log(e);
      throw e;
    }
    // error handling
  }
}
