
import { AxiosRequestConfig, AxiosResponse } from 'axios';
import axios from 'axios';
import { SerpAPI } from './SERP_API';
import { Logger } from './helpers';
import { IDFSEO_API_Response } from './typings';
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



    /**
     * Creates an instance of dfseo api.
     * @param username 
     * @param password 
     */
    constructor(private username: string, private password: string, private useSandbox?: boolean) {
        this.generateAuthorizationString();
    }
    /**
     * Generates authorization string
     */
    private generateAuthorizationString(): string {
        if (this.username && this.password) {

            const stringToEncode: string = `${this.username}:${this.password}`;
            let base64: string;
            if (typeof window !== 'undefined') {
                // running in browser
                base64 = btoa(stringToEncode);
            } else {
                // running in node.js
                base64 = Buffer.from(stringToEncode).toString('base64');
            }
            this.authorization = `Basic ${base64}`;
            return this.authorization;
        }
    }

    public async fetch(config: AxiosRequestConfig): Promise<IDFSEO_API_Response> {
        const authorization = this.authorization;
        const useSandbox = this.useSandbox;
        const baseURL = this.useSandbox ? 'https://sandbox.dataforseo.com/v3/' : 'https://api.dataforseo.com/v3/'
        const headers = authorization ? { authorization } : null;

        const response: AxiosResponse<IDFSEO_API_Response> = await axios.request({
            ...config,
            baseURL,
            headers
        })
        // error handling
        if (response.status !== 200) {
            this.logger.error(response.status, response.statusText);
            throw response.statusText;
        };

        if (response.data.status_code !== 20000 && response.data.status_code !== 20100) {
            this.logger.error(response.data.status_code, response.data.status_message);
            throw response.data.status_message
        }

        return response.data;
    }
}