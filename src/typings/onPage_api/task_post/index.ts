import { IDFSEO_API_Request, IDFSEO_API_Response } from "../..";

export interface onPageAPI {}

export interface IOnPage_Task_Post_Request extends IDFSEO_API_Request {
	/**
     * target domain
required field
domain name should be specified without https:// and www.
if you specify the page URL, the results will be returned for the domain included in the URL
     */
	target: string;
	/**
     * crawled pages limit
required field
the number of pages to crawl on the specified domain
     */
	max_crawl_pages: number;
	/**
     * the first url to crawl
optional field
Note: you should specify the absolute URL
if you want to crawl a single page, specify its URL in this field and additionally set the max_crawl_pages parameter to 1
     */
	start_url?: string;
	/**
     * crawl depth
optional field
the linking depth of the pages to crawl
for example, home page is level 0, pages that have links from the home page are level 1, etc.
default value: 0
     */
	max_crawl_depth?: number;
	/**
     * delay between hits, ms
optional field
the custom delay between crawler hits to the server
default value: 2000
     */
	crawl_delay?: number;
	/**
     * store HTML of crawled pages
optional field
set to true if you want get the HTML of the page using the OnPage Raw HTML endpoint
default value: false
     */
	store_raw_html?: boolean;
	/**
     * support cookies on crawled pages
optional field
set to true to support cookies when crawling the pages
default value: false
     */
	support_cookies?: boolean;
	/**
     * 	custom robots.txt settings
optional field
example: Disallow: /directory1/
note that this parameter will only work if robots_txt_merge_mode is set to "override"
     */
	custom_robots_txt?: string;
	/**
     * merge with or override robots.txt settings
optional field
possible values: merge, override
set to override if you want to ignore website crawling restrictions and other robots.txt settings
default value: merge
     */
	robots_txt_merge_mode?: string;
	/**
     * custom user agent
optional field
custom user agent for crawling a website
example: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.116 Safari/537.36
     */
	custom_user_agent?: string;
	/**
     * 	respect sitemap when crawling
optional field
set to false if you want to ignore the order of pages indicated in the primary sitemap when crawling
default value: true
     */
	respect_sitemap?: boolean;
	/**
     * custom sitemap url
optional field
the URL of the page where the alternative sitemap is located
Note: if you want to use this parameter, set the respect_sitemap to false
     */
	custom_sitemap?: string;
	/**
     * load resources
optional field
set to true if you want to load image, stylesheets, scripts, and broken resources
default value: false
Note: if you use this parameter, additional charges will apply; the cost can be calculated on the Pricing Page
     */
	load_resources?: boolean;
	/**
     * 	load javascript on a page
optional field
set to true if you want to load the scripts available on a page
default value: false
Note: if you use this parameter, additional charges will apply; the cost can be calculated on the Pricing Page
     */
	enable_javascript?: boolean;
	/**
     * 	custom javascript
optional field
for example, you can use the following JS snippet to check if the website contains Google Tag Manager as a scr attribute:
let meta = { haveGoogleAnalytics: false, haveTagManager: false };\r\nfor (var i = 0; i < document.scripts.length; i++) {\r\n let src = document.scripts[i].getAttribute(\"src\");\r\n if (src != undefined) {\r\n if (src.indexOf(\"analytics.js\") >= 0)\r\n meta.haveGoogleAnalytics = true;\r\n\tif (src.indexOf(\"gtm.js\") >= 0)\r\n meta.haveTagManager = true;\r\n }\r\n}\r\nmeta;
the returned value depends on what you specified in this field. For instance, if you specify the following script:
meta = {}; meta.url = document.URL; meta.test = 'test'; meta;
as a response you will receive the following data:
"custom_js_response": {
"url": "https://dataforseo.com/",
"test": "test"
}

Note: if you use this parameter, additional charges will apply; the cost can be calculated on the Pricing Page
     */
	custom_js?: string;
	/**
     * include pages on subdomains
optional field
set to true if you want to crawl all subdomains of a target website
default value: false
     */
	allow_subdomains?: boolean;
	/**
     * 	subdomains to crawl
optional field
specify subdomains that you want to crawl
example: ["blog.site.com", "my.site.com", "shop.site.com"]
Note: to use this parameter, the allow_subdomains parameter should be set to false;
otherwise, the content of allowed_subdomains field will be ignored and the results will be returned for all subdomains
     */
	allowed_subdomains?: string[];
	/**
     * check spelling
optional field
set to true to check spelling on a website using Hunspell library
default value: false
     */
	check_spell?: boolean;
	/**
     * 	custom threshold values for checks
optional field
you can specify custom threshold values for the parameters included in the checks array of OnPage API responses;
Note: only integer threshold values can be modified;
for example, the high_loading_time and large_page_size parameters are set to 3 seconds and 256 kbytes respectively by default;
if you want to change these thresholds to 1 second and 1000 kbytes, use the following snippet:
"checks_threshold": {
"high_loading_time": 1,
"large_page_size": 1000
}
available customizable parameters with default values:
"title_too_short", default value: 30, type: "int"
"title_too_long", default value: 65, type: "int"
"small_page_size", default value: 1024, type: "int"
"large_page_size", default value: 1048576 (1024 * 1024), type: "int"
"low_character_count", default value: 1024, type: "int"
"high_character_count", default value: 256000 (250 * 1024), type: "int"
"low_content_rate", default value: 0.1, type: "float"
"high_content_rate", default value: 0.9, type: "float"
"high_loading_time", default value: 3000, type: "int"
"high_waiting_time", default value: 1500, type: "int"
"low_readability_rate", default value: 15.0, type: "float"
"irrelevant_description", default value: 0.2, type: "float"
"irrelevant_title", default value: 0.3, type: "float"
"irrelevant_meta_keywords", default value: 0.6, type: "float"
     */
	checks_threshold?: {
		title_too_short?: number;
		title_too_long?: number;
		small_page_size?: number;
		large_page_size?: number;
		low_character_count?: number;
		high_character_count?: number;
		low_content_rate?: number;
		high_content_rate?: number;
		high_waiting_time?: number;
		low_readability_rate?: number;
		irrelevant_description?: number;
		irrelevant_title?: number;
		irrelevant_meta_keywords?: number;
	}[];
	/**
     * user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data array of the response
     */
	tag?: string;
	/**
     * notification URL of a completed task
optional field
when a task is completed we will notify you by GET request sent to the URL you have specified
you can use the ‘$id’ string as a $id variable and ‘$tag’ as $tag variable. We will set the necessary values before sending the request.
example:
http://your-server.com/pingscript?id=$id
http://your-server.com/pingscript?id=$id&tag=$tag
     */
	pingback_url?: string;
}

export interface IOnPage_Task_Post_Response extends IDFSEO_API_Response {}
