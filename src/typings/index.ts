export * from "./keywords_data_api";
export * from "./keywords_finder_api";
export * from "./merchant_api";
export * from "./onPage_api";
export * from "./serp_api";
export * from "./traffic_analytics_api";

export interface IDFSEO_API_Request {}

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

type Status_Code = 20000 | 20100 | 40000 | 40001 | 40002 | 40003 | 40004 | 40005 | 40006 | 40100 | 40101 | 40102 | 40201 | 40202 | 40203 | 40400 | 40401 | 40402 | 40403 | 40501 | 40601 | 40602 | 50000 | 50001 | 50301 | 50303 | 50304;

type Status_Message =
	| "Ok."
	| "Task Created."
	| "You can set only one task at a time."
	| "This id is used by another client, check the id."
	| "This id is used by another search engine, check the Path."
	| "This id is used by another search type, check the Path."
	| "This id is used by another function, check the id."
	| "This id is used by another device type, check the id."
	| "You can set no more than 100 tasks at a time."
	| "You are not authorized to access this resource. See your login details here: https://app.dataforseo.com/api-dashboard ."
	| "Internal SE Server Error."
	| "No Search Results."
	| "Payment Required."
	| "Our algorithms found suspicious activity in your DataForSEO account. It has been temporarily blocked. For further details please contact our support team."
	| "The rate-limit per minute has been exceeded."
	| "The cost limit has been exceeded. You can modify your cost limit in the user panel https://app.dataforseo.com/api-dashboard ."
	| "Not Found."
	| "Task Not Found."
	| "Invalid Path."
	| "Results Expired."
	| "Invalid Field."
	| "Task Handed."
	| "Task In Queue."
	| "Internal Error."
	| "Error While Checking the Balance."
	| "3rd Party API Service Unavailable."
	| "Update in progress. Please try after a few minutes."
	| "This function temporarily unavailable. Please contact support for more information.";

export type ISO_639_1_Language_Code =
	| "ab"
	| "aa"
	| "af"
	| "sq"
	| "am"
	| "ar"
	| "an"
	| "hy"
	| "as"
	| "av"
	| "ae"
	| "ay"
	| "az"
	| "bm"
	| "ba"
	| "eu"
	| "be"
	| "bn"
	| "bh"
	| "bi"
	| "bi"
	| "bs"
	| "br"
	| "bg"
	| "my"
	| "ca"
	| "ce"
	| "ny"
	| "zh"
	| "cv"
	| "kw"
	| "co"
	| "cr"
	| "hr"
	| "cs"
	| "da"
	| "dv"
	| "nl"
	| "dz"
	| "en"
	| "eo"
	| "et"
	| "ee"
	| "fo"
	| "fj"
	| "fi"
	| "fr"
	| "ff"
	| "gl"
	| "ka"
	| "de"
	| "el"
	| "gn"
	| "gu"
	| "ht"
	| "ha"
	| "he"
	| "hz"
	| "hi"
	| "ho"
	| "hu"
	| "ia"
	| "id"
	| "ie"
	| "ga"
	| "ig"
	| "ik"
	| "io"
	| "is"
	| "it"
	| "iu"
	| "ja"
	| "jv"
	| "kl"
	| "kn"
	| "kr"
	| "ks"
	| "kk"
	| "km"
	| "kn"
	| "ko"
	| "kr"
	| "ks"
	| "ku"
	| "kv"
	| "kw"
	| "ky"
	| "na"
	| "nb"
	| "nd"
	| "ne"
	| "ng"
	| "nl"
	| "nn"
	| "no"
	| "nr"
	| "nv"
	| "ny"
	| "oc"
	| "oj"
	| "om"
	| "or"
	| "os"
	| "pa"
	| "pi"
	| "pl"
	| "ps"
	| "pt"
	| "qu"
	| "ru"
	| "rw"
	| "sa"
	| "sc"
	| "sd"
	| "se"
	| "sg"
	| "si"
	| "sk"
	| "sl"
	| "sm"
	| "sn"
	| "so"
	| "sq"
	| "sr"
	| "ss"
	| "st"
	| "su"
	| "sv"
	| "sw"
	| "ta"
	| "te"
	| "tg"
	| "th"
	| "ti"
	| "tk"
	| "tl"
	| "tn"
	| "to"
	| "tr"
	| "ts"
	| "tt"
	| "tw"
	| "ty"
	| "ug"
	| "uk"
	| "ur"
	| "uz"
	| "ve"
	| "vi"
	| "vo"
	| "wa"
	| "wo"
	| "xh"
	| "yi"
	| "yo"
	| "za"
	| "zh"
	| "zu";
