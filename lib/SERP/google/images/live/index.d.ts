import { ISERP_Google_Images_Live_Advanced_Response, ISERP_Google_Images_Live_Advanced_Request, ISERP_Google_Images_Live_HTML_Request, ISERP_Google_Images_Live_HTML_Response } from "../../../../typings";
import { DFSEO } from "../../../..";
export declare class Live {
    private DFSEO;
    constructor(DFSEO: DFSEO);
    advanced(data: ISERP_Google_Images_Live_Advanced_Request[]): Promise<ISERP_Google_Images_Live_Advanced_Response>;
    html(data: ISERP_Google_Images_Live_HTML_Request[]): Promise<ISERP_Google_Images_Live_HTML_Response>;
}
