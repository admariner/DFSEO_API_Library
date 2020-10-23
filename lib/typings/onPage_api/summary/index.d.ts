import { IDFSEO_API_Response, IDFSEO_API_Task } from "../..";
import { IOnPage_Task_Post_Request } from "../task_post";
export interface IOnPage_Summary_Response extends IDFSEO_API_Response {
    tasks: IOnPage_Summary_Task[];
}
export interface IOnPage_Summary_Task extends IDFSEO_API_Task {
    data: IOnPage_Task_Post_Request[];
    result: {
        crawl_progress: "in_progress" | "finished";
        domain_info: {
            name: string;
            cms: string;
            ip: string;
            server: string;
            crawl_start: string;
            crawl_end: string;
            ssl_info: {
                valid_certificate: boolean;
                certificate_issuer: string;
                certificate_subject: string;
                certificate_version: string;
                certificate_hash: string;
                certificate_expiration_date: string;
            };
            checks: {
                sitemap: boolean;
                robots_txt: boolean;
                start_page_deny_flag: boolean;
                ssl: boolean;
                test_canonicalization: boolean;
                test_hidden_server_signature: boolean;
                test_page_not_found: boolean;
                test_directory_browsing: boolean;
            };
            total_pages: number;
            page_not_found_status_code: number;
            canonicalization_status_code: number;
            directory_browsing_status_code: number;
            main_domain: number;
        };
        page_metrics: {
            links_external: number;
            links_internal: number;
            duplicate_title: number;
            duplicate_description: number;
            duplicate_content: number;
            broken_links: number;
            broken_resources: number;
            checks: {
                canonical: number;
                duplicate_meta_tag: number;
                no_description: number;
                frame: number;
                large_page_size: number;
                irrelevant_description: number;
                irrelevant_meta_keywords: number;
                is_https: number;
                is_http: number;
                title_too_long: number;
                low_content_rate: number;
                small_page_size: number;
                no_h1_tag: number;
                no_favicon: number;
                no_image_alt: number;
                no_image_title: number;
                seo_friendly_url: number;
                seo_friendly_url_characters_check: number;
                seo_friendly_url_dynamic_check: number;
                seo_friendly_url_keywords_check: number;
                seo_friendly_url_relative_length_check: number;
                title_too_short: number;
                no_content_encoding: number;
                high_waiting_time: number;
                high_loading_time: number;
                is_redirect: number;
                is_broken: number;
                is_www: number;
                no_doctype: number;
                no_encoding_meta_tag: number;
                high_content_rate: number;
                low_character_count: number;
                high_character_count: number;
                low_readability_rate: number;
                irrelevant_title: number;
                deprecated_html_tags: number;
                duplicate_title_tag: number;
                no_title: number;
                flash: number;
                lorem_ipsum: number;
            };
        };
    }[];
}
