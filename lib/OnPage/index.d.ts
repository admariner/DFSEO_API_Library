import { DFSEO } from "..";
import { IOnPage_Task_Post_Request, IOnPage_Task_Post_Response } from "../typings/onPage_api/task_post";
import { IOnPage_Summary_Response } from "../typings/onPage_api/summary";
import { IOnPage_Pages_Request, IOnPage_Pages_Response } from "../typings/onPage_api/pages";
import { IOnPage_Pages_By_Resource_Request } from "../typings/onPage_api/pages_by_resource";
export declare class OnPage {
    private DFSEO;
    constructor(DFSEO: DFSEO);
    taskPost(data: IOnPage_Task_Post_Request[]): Promise<IOnPage_Task_Post_Response>;
    summary(id: string): Promise<IOnPage_Summary_Response>;
    pages(data: IOnPage_Pages_Request[]): Promise<IOnPage_Pages_Response>;
    pagesByResource(data: IOnPage_Pages_By_Resource_Request[]): Promise<IOnPage_Pages_Response>;
    resources(data: any[]): Promise<any>;
    duplicate_tags(data: any[]): Promise<any>;
    duplicate_content(data: any[]): Promise<any>;
    links(data: any[]): Promise<any>;
    non_indexable(data: any[]): Promise<any>;
    waterfall(data: any[]): Promise<any>;
    raw_HTML(data: any[]): Promise<any>;
}
