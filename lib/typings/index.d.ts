export * from "./keywords_data_api";
export * from "./keywords_finder_api";
export * from "./merchant_api";
export * from "./onPage_api";
export * from "./serp_api";
export * from "./traffic_analytics_api";
export interface IDFSEO_API_Request {
}
export interface IDFSEO_API_Response extends IDFSEO_INFO {
    /**
     * the current version of the API
     */
    version: string;
    /**
     * the number of tasks in the tasks array
     */
    tasks_count: number;
    /**
     * the number of tasks in the tasks array returned with an error
     */
    tasks_error: number;
    /**
     * array of tasks
     */
    tasks: IDFSEO_API_Task[];
    /**
     * execution time, seconds
     */
    time: string;
    /**
     * cost	float	total tasks cost, USD
     */
    cost: number;
}
export interface IDFSEO_API_Task extends IDFSEO_INFO {
    /**
     * task identifier
unique task identifier in our system in the UUID format
reference: https://en.wikipedia.org/wiki/Universally_unique_identifier
     */
    id: string;
    /**
     * number of elements in the result array
     */
    result_count: number;
    /**
     * URL path
     */
    path: string[];
    data: any;
    result: any;
}
interface IDFSEO_INFO {
    /**
     * general status code
you can find the full list of the response codes here
reference: https://docs.dataforseo.com/v3/appendix/errors
     */
    status_code: Status_Code;
    /**
     * general informational message
you can find the full list of general informational messages here
reference: https://docs.dataforseo.com/v3/appendix/errors
     */
    status_message: Status_Message;
    /**
     * execution time, seconds
     */
    time: string;
    /**
     * total tasks cost, USD
     */
    cost: number;
}
declare type Status_Code = 20000 | 20100 | 40000 | 40001 | 40002 | 40003 | 40004 | 40005 | 40006 | 40100 | 40101 | 40102 | 40201 | 40202 | 40203 | 40400 | 40401 | 40402 | 40403 | 40501 | 40601 | 40602 | 50000 | 50001 | 50301 | 50303 | 50304;
declare type Status_Message = "Ok." | "Task Created." | "You can set only one task at a time." | "This id is used by another client, check the id." | "This id is used by another search engine, check the Path." | "This id is used by another search type, check the Path." | "This id is used by another function, check the id." | "This id is used by another device type, check the id." | "You can set no more than 100 tasks at a time." | "You are not authorized to access this resource. See your login details here: https://app.dataforseo.com/api-dashboard ." | "Internal SE Server Error." | "No Search Results." | "Payment Required." | "Our algorithms found suspicious activity in your DataForSEO account. It has been temporarily blocked. For further details please contact our support team." | "The rate-limit per minute has been exceeded." | "The cost limit has been exceeded. You can modify your cost limit in the user panel https://app.dataforseo.com/api-dashboard ." | "Not Found." | "Task Not Found." | "Invalid Path." | "Results Expired." | "Invalid Field." | "Task Handed." | "Task In Queue." | "Internal Error." | "Error While Checking the Balance." | "3rd Party API Service Unavailable." | "Update in progress. Please try after a few minutes." | "This function temporarily unavailable. Please contact support for more information.";
export declare type ISO_639_1_Language_Code = "ab" | "aa" | "af" | "sq" | "am" | "ar" | "an" | "hy" | "as" | "av" | "ae" | "ay" | "az" | "bm" | "ba" | "eu" | "be" | "bn" | "bh" | "bi" | "bi" | "bs" | "br" | "bg" | "my" | "ca" | "ce" | "ny" | "zh" | "cv" | "kw" | "co" | "cr" | "hr" | "cs" | "da" | "dv" | "nl" | "dz" | "en" | "eo" | "et" | "ee" | "fo" | "fj" | "fi" | "fr" | "ff" | "gl" | "ka" | "de" | "el" | "gn" | "gu" | "ht" | "ha" | "he" | "hz" | "hi" | "ho" | "hu" | "ia" | "id" | "ie" | "ga" | "ig" | "ik" | "io" | "is" | "it" | "iu" | "ja" | "jv" | "kl" | "kn" | "kr" | "ks" | "kk" | "km" | "kn" | "ko" | "kr" | "ks" | "ku" | "kv" | "kw" | "ky" | "na" | "nb" | "nd" | "ne" | "ng" | "nl" | "nn" | "no" | "nr" | "nv" | "ny" | "oc" | "oj" | "om" | "or" | "os" | "pa" | "pi" | "pl" | "ps" | "pt" | "qu" | "ru" | "rw" | "sa" | "sc" | "sd" | "se" | "sg" | "si" | "sk" | "sl" | "sm" | "sn" | "so" | "sq" | "sr" | "ss" | "st" | "su" | "sv" | "sw" | "ta" | "te" | "tg" | "th" | "ti" | "tk" | "tl" | "tn" | "to" | "tr" | "ts" | "tt" | "tw" | "ty" | "ug" | "uk" | "ur" | "uz" | "ve" | "vi" | "vo" | "wa" | "wo" | "xh" | "yi" | "yo" | "za" | "zh" | "zu";
export interface IAvailableFiltersOnPage {
    resources: {
        resource_type: string;
        "meta.alternative_text": string;
        "meta.title": string;
        "meta.original_width": number;
        "meta.original_height": number;
        "meta.width": number;
        "meta.height": number;
        status_code: number;
        location: string;
        url: string;
        size: number;
        encoded_size: number;
        total_transfer_size: number;
        fetch_time: "time";
        "fetch_timing.duration_time": number;
        "fetch_timing.fetch_start": number;
        "fetch_timing.fetch_end": number;
        "cache_control.cachable": boolean;
        "cache_control.ttl": number;
        "checks.no_content_encoding": boolean;
        "checks.high_loading_time": boolean;
        "checks.is_redirect": boolean;
        "checks.is_broken": boolean;
        "checks.is_www": boolean;
        "checks.is_https": boolean;
        "checks.is_http": boolean;
        content_encoding: string;
        media_type: string;
        server: string;
    };
    pages: {
        resource_type: string;
        "meta.title": string;
        "meta.charset": number;
        "meta.follow": boolean;
        "meta.generator": string;
        "meta.description": string;
        "meta.favicon": string;
        "meta.meta_keywords": string;
        "meta.canonical": string;
        "meta.internal_links_count": number;
        "meta.external_links_count": number;
        "meta.images_count": number;
        "meta.images_size": number;
        "meta.scripts_count": number;
        "meta.scripts_size": number;
        "meta.stylesheets_count": number;
        "meta.stylesheets_size": number;
        "meta.title_length": number;
        "meta.description_length": number;
        "meta.content.plain_text_size": number;
        "meta.content.plain_text_rate": number;
        "meta.content.plain_text_word_count": number;
        "meta.content.automated_readability_index": number;
        "meta.content.coleman_liau_readability_index": number;
        "meta.content.dale_chall_readability_index": number;
        "meta.content.flesch_kincaid_readability_index": number;
        "meta.content.smog_readability_index": number;
        "meta.content.description_to_content_consistency": number;
        "meta.content.title_to_content_consistency": number;
        "meta.content.meta_keywords_to_content_consistency": number;
        "meta.spell": string;
        "page_timing.time_to_interactive": number;
        "page_timing.dom_complete": number;
        "page_timing.connection_time": number;
        "page_timing.time_to_secure_connection": number;
        "page_timing.request_sent_time": number;
        "page_timing.waiting_time": number;
        "page_timing.download_time": number;
        "page_timing.duration_time": number;
        "page_timing.fetch_start": number;
        "page_timing.fetch_end": number;
        total_dom_size: number;
        broken_resources: boolean;
        broken_links: boolean;
        duplicate_title: boolean;
        duplicate_description: boolean;
        duplicate_content: boolean;
        status_code: number;
        location: string;
        url: string;
        size: number;
        encoded_size: number;
        total_transfer_size: number;
        fetch_time: "time";
        "cache_control.cachable": boolean;
        "cache_control.ttl": number;
        "checks.no_content_encoding": boolean;
        "checks.high_loading_time": boolean;
        "checks.is_redirect": boolean;
        "checks.is_broken": boolean;
        "checks.is_www": boolean;
        "checks.is_https": boolean;
        "checks.is_http": boolean;
        "checks.high_waiting_time": boolean;
        "checks.no_doctype": boolean;
        "checks.canonical_tag": boolean;
        "checks.no_encoding_meta_tag": boolean;
        "checks.no_h1_tags": boolean;
        "checks.recursive_canonical": boolean;
        "checks.low_content_rate": boolean;
        "checks.high_content_rate": boolean;
        "checks.low_character_count": boolean;
        "checks.high_character_count": boolean;
        "checks.small_page_size": boolean;
        "checks.large_page_size": boolean;
        "checks.low_readability_rate": boolean;
        "checks.irrelevant_description": boolean;
        "checks.irrelevant_title": boolean;
        "checks.irrelevant_meta_keywords": boolean;
        "checks.title_too_long": boolean;
        "checks.title_too_short": boolean;
        "checks.deprecated_html_tags": boolean;
        "checks.duplicate_meta_tags": boolean;
        "checks.duplicate_title_tag": boolean;
        "checks.no_image_alt": boolean;
        "checks.no_image_title": boolean;
        "checks.no_description": boolean;
        "checks.no_title": boolean;
        "checks.no_favicon": boolean;
        "checks.seo_friendly_url": boolean;
        "checks.flash": boolean;
        "checks.frame": boolean;
        "checks.lorem_ipsum": boolean;
        "checks.seo_friendly_url_characters_check": boolean;
        "checks.seo_friendly_url_dynamic_check": boolean;
        "checks.seo_friendly_url_keywords_check": boolean;
        "checks.seo_friendly_url_relative_length_check": boolean;
        content_encoding: string;
        media_type: string;
        server: string;
        is_resource: boolean;
    };
    non_indexable: {
        reason: string;
        url: string;
    };
    links: {
        type: string;
        domain_from: string;
        domain_to: string;
        page_from: string;
        page_to: string;
        link_from: string;
        link_to: string;
        dofollow: boolean;
        page_from_scheme: string;
        page_to_scheme: string;
        direction: string;
    };
    pages_by_resource: {
        resource_type: string;
        "meta.title": string;
        "meta.charset": number;
        "meta.follow": boolean;
        "meta.generator": string;
        "meta.description": string;
        "meta.favicon": string;
        "meta.meta_keywords": string;
        "meta.canonical": string;
        "meta.internal_links_count": number;
        "meta.external_links_count": number;
        "meta.images_count": number;
        "meta.images_size": number;
        "meta.scripts_count": number;
        "meta.scripts_size": number;
        "meta.stylesheets_count": number;
        "meta.stylesheets_size": number;
        "meta.title_length": number;
        "meta.description_length": number;
        "meta.content.plain_text_size": number;
        "meta.content.plain_text_rate": number;
        "meta.content.plain_text_word_count": number;
        "meta.content.automated_readability_index": number;
        "meta.content.coleman_liau_readability_index": number;
        "meta.content.dale_chall_readability_index": number;
        "meta.content.flesch_kincaid_readability_index": number;
        "meta.content.smog_readability_index": number;
        "meta.content.description_to_content_consistency": number;
        "meta.content.title_to_content_consistency": number;
        "meta.content.meta_keywords_to_content_consistency": number;
        "meta.spell": string;
        "page_timing.time_to_interactive": number;
        "page_timing.dom_complete": number;
        "page_timing.connection_time": number;
        "page_timing.time_to_secure_connection": number;
        "page_timing.request_sent_time": number;
        "page_timing.waiting_time": number;
        "page_timing.download_time": number;
        "page_timing.duration_time": number;
        "page_timing.fetch_start": number;
        "page_timing.fetch_end": number;
        total_dom_size: number;
        broken_resources: boolean;
        broken_links: boolean;
        duplicate_title: boolean;
        duplicate_description: boolean;
        duplicate_content: boolean;
        status_code: number;
        location: string;
        url: string;
        size: number;
        encoded_size: number;
        total_transfer_size: number;
        fetch_time: "time";
        "cache_control.cachable": boolean;
        "cache_control.ttl": number;
        "checks.no_content_encoding": boolean;
        "checks.high_loading_time": boolean;
        "checks.is_redirect": boolean;
        "checks.is_broken": boolean;
        "checks.is_www": boolean;
        "checks.is_https": boolean;
        "checks.is_http": boolean;
        "checks.high_waiting_time": boolean;
        "checks.no_doctype": boolean;
        "checks.canonical_tag": boolean;
        "checks.no_encoding_meta_tag": boolean;
        "checks.no_h1_tags": boolean;
        "checks.recursive_canonical": boolean;
        "checks.low_content_rate": boolean;
        "checks.high_content_rate": boolean;
        "checks.low_character_count": boolean;
        "checks.high_character_count": boolean;
        "checks.small_page_size": boolean;
        "checks.large_page_size": boolean;
        "checks.low_readability_rate": boolean;
        "checks.irrelevant_description": boolean;
        "checks.irrelevant_title": boolean;
        "checks.irrelevant_meta_keywords": boolean;
        "checks.title_too_long": boolean;
        "checks.title_too_short": boolean;
        "checks.deprecated_html_tags": boolean;
        "checks.duplicate_meta_tags": boolean;
        "checks.duplicate_title_tag": boolean;
        "checks.no_image_alt": boolean;
        "checks.no_image_title": boolean;
        "checks.no_description": boolean;
        "checks.no_title": boolean;
        "checks.no_favicon": boolean;
        "checks.seo_friendly_url": boolean;
        "checks.flash": boolean;
        "checks.frame": boolean;
        "checks.lorem_ipsum": boolean;
        "checks.seo_friendly_url_characters_check": boolean;
        "checks.seo_friendly_url_dynamic_check": boolean;
        "checks.seo_friendly_url_keywords_check": boolean;
        "checks.seo_friendly_url_relative_length_check": boolean;
        content_encoding: string;
        media_type: string;
        server: string;
        is_resource: boolean;
    };
}
