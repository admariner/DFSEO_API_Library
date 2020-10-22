import { IITem_Page } from "..";

export interface IRedirect_Page extends IITem_Page {
	resource_type: "redirect";
	status_code: number;
	location: string;
	url: string;
	size: number;
	encoded_size: number;
	total_transfer_size: number;
	fetch_time: string;
	fetch_timing: {
		duration_time: number;
		fetch_start: number;
		fetch_end: number;
	}[];
	cache_control: {
		cachable: boolean;
		ttl: number;
	}[];
	checks: {
		no_content_encoding: boolean;
		high_loading_time: boolean;
		is_redirect: boolean;
		is_broken: boolean;
		is_www: boolean;
		is_https: boolean;
		is_http: boolean;
	}[];
	content_encoding: string;
	media_type: string;
	server: string;
	is_resource: boolean;
}
