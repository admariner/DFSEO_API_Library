import { IDFSEO_API_Request, IDFSEO_API_Response, IDFSEO_API_Task } from "..";

export * from "./bing";
export * from "./google";
export * from "./yandex";
export * from "./yahoo";

export interface ISERP_Live_Request extends IDFSEO_API_Request {
  /**
 * direct URL of the search query
optional field
you can specify a direct URL and we will sort it out to the necessary fields. Note that this method is the most difficult for our API to process and also requires you to specify the exact language and location in the URL. In most cases, we wouldn’t recommend using this method.
example:
https://www.google.co.uk/search?q=%20rank%20tracker%20api&hl=en&gl=GB&uule=w+CAIQIFISCXXeIa8LoNhHEZkq1d1aOpZS
 */
  url?: string;
  /**
     * keyword
required field
you can specify up to 700 symbols in the keyword filed
all %## will be decoded (plus symbol ‘+’ will be decoded to a space character)
if you need to use the “%” symbol for your keyword, please specify it as “%25”;
if this field contains such parameters as ‘allinanchor:’, ‘allintext:’, ‘allintitle:’, ‘allinurl:’, ‘define:’, ‘filetype:’, ‘id:’, ‘inanchor:’, ‘info:’, ‘intext:’, ‘intitle:’, ‘inurl:’, ‘link:’, ‘related:’, ‘site:’ the charge per task will be multiplied by 5
     */
  keyword: string;
  /**
     * full name of search engine location
optional field if you specify location_code or location_coordinate
if you use this field, you don’t need to specify location_code or location_coordinate
you can receive the list of available locations of the search engine with their location_name by making a separate request to the https://api.dataforseo.com/v3/serp/google/locations
example:
London,England,United Kingdom
     */
  location_name?: string;
  /**
     * search engine location code
optional field if you specify location_name or location_coordinate
if you use this field, you don’t need to specify location_name or location_coordinate
you can receive the list of available locations of the search engines with their location_code by making a separate request to the https://api.dataforseo.com/v3/serp/google/locations
example:
2840
     */
  location_code?: number;
  /**
     * GPS coordinates of a location
optional field if you specify location_name or location_code
if you use this field, you don’t need to specify location_name or location_code
location_coordinate parameter should be specified in the “latitude,longitude,radius” format
the maximum number of decimal digits for “latitude” and “longitude”: 7
the minimum value for “radius”: 199.9
example:
52.6178549,-155.352142,200
     */
  location_coordinate?: string;
  /**
     * 	full name of search engine language
optional field if you specify language_code
if you use this field, you don’t need to specify language_code
you can receive the list of available languages of the search engine with their language_name by making a separate request to the https://api.dataforseo.com/v3/serp/google/languages
example:
English
     */
  language_name?: string;
  /**
     * search engine language code
optional field if you specify language_name
if you use this field, you don’t need to specify language_name
you can receive the list of available languages of the search engine with their language_code by making a separate request to the https://api.dataforseo.com/v3/serp/google/languages
example:
en
     */
  language_code?: string;

  /**
     * device operating system
optional field
note that this API provides results for desktop only
choose from the following values: windows, macos
default value: windows
     */
  os?: "windows" | "macos";
  /**
     * search engine domain
optional field
we choose the relevant search engine domain automatically according to the location and language you specify
however, you can set a custom search engine domain in this field
example:
google.co.uk, google.com.au, google.de, etc.
     */
  se_domain?: string;
  /**
     * parsing depth
optional field
number of results in SERP
default value: 100
max value: 700
     */
  depth?: number;
  /**
     * additional parameters of the search query
optional field
get the list of available parameters and additional details here
     */
  search_param?: string;
  /**
     * user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data array of the response
     */
  tag?: string;
}

export interface ISERP_Request extends ISERP_Live_Request {
  /**
 * task priority
optional field
can take the following values:
1 – normal execution priority (set by default)
2 – high execution priority
 */
  priority?: number;
  /**
     * return URL for sending task results
optional field
once the task is completed, we will send a POST request with its results compressed in the gzip format to the postback_url you specified
you can use the ‘$id’ string as a $id variable and ‘$tag’ as $tag variable. We will set the necessary values before sending the request.
example:
http://your-server.com/postbackscript?id=$id
http://your-server.com/postbackscript?id=$id&tag=$tag
     */
  postback_url?: string;
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

export interface ISERP_Task_Ready_Response extends IDFSEO_API_Response {
  tasks: ISERP_Task_Ready_Task[];
}

export interface ISERP_Task_Ready_Task extends IDFSEO_API_Task {
  data: string[];
}
