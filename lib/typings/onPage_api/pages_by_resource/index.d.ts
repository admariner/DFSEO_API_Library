import { IDFSEO_API_Request, IDFSEO_API_Response } from "../..";
import { IPage_Resource_Broken_Page } from "./broken_page";
import { IPage_Resource_HTML_Page } from "./html_page";
import { IPage_Resource_Redirect_Page } from "./redirect_page";
export interface IOnPage_Pages_By_Resource_Request extends IDFSEO_API_Request {
    id: string;
    url: string;
    limit?: number;
    offset?: number;
    filters?: string[];
    order_by?: string[];
    tag?: string;
}
export interface IOnPage_Pages_By_Resource_Response extends IDFSEO_API_Response {
    data: IOnPage_Pages_By_Resource_Request[];
    result: {
        crawl_progress: string;
        items_count: number;
        items: Item_Resource_Page[];
    }[];
}
declare type Item_Resource_Page = IPage_Resource_Broken_Page | IPage_Resource_HTML_Page | IPage_Resource_Redirect_Page;
export {};
