import { IDFSEO_API_Response, IDFSEO_API_Task } from '../../..';
export * from './live';
export * from './task_get';
export * from './task_post';
export * from './task_ready';
export interface ISERP_Google_Images_Advanced_Response extends IDFSEO_API_Response {
    tasks: ISERP_Google_Images_Advanced_Task[];
}
export interface ISERP_Google_Images_Advanced_Task extends IDFSEO_API_Task {
    data: string[];
    result: {
        keyword: string;
        type: string;
        se_domain: string;
        location_code: number;
        language_code: string;
        check_url: string;
        datetime: string;
        spell: {
            keyword: string;
            type: string;
        }[];
        item_types: "images_search"[];
        se_results_count: number;
        items_count: number;
        items: {
            type: "images_search";
            rank_group: number;
            rank_absolute: number;
            xpath: string;
            title: string;
            sub_title: string;
            alt: string;
            url: string;
            source_url: string;
            encoded_url: string;
        }[];
    }[];
}
export interface ISERP_Google_Images_HTML_Response extends IDFSEO_API_Response {
}
export interface ISERP_Google_Images_HTML_Task extends IDFSEO_API_Task {
    data: string[];
    result: {
        keyword: string;
        type: string;
        se_domain: string;
        location_code: number;
        language_code: string;
        datetime: string;
        items_count: number;
        items: {
            page: number;
            date: string;
            html: string;
        }[];
    }[];
}
