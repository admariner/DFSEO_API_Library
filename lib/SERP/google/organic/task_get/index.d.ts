import { DFSEO } from "../../../..";
import { ISERP_Google_Organic_Task_Get_Regular_Response, ISERP_Google_Organic_Task_Get_Advanced_Response, ISERP_Google_Organic_Task_Get_HTML_Response } from "../../../../typings";
export declare class TaskGet {
    private DFSEO;
    constructor(DFSEO: DFSEO);
    regular(id: string): Promise<ISERP_Google_Organic_Task_Get_Regular_Response>;
    advanced(id: string): Promise<ISERP_Google_Organic_Task_Get_Advanced_Response>;
    html(id: string): Promise<ISERP_Google_Organic_Task_Get_HTML_Response>;
}
