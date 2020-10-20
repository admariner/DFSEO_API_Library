import { IDFSEOSERPGoogleRating } from "../../../../..";
import { ISERP_Item } from "../../task_get";

export interface IItem_Organic extends ISERP_Item {
	type: "organic";
	rank_group: number;
	rank_absolute: number;
	position: string;
	xpath: string;
	domain: string;
	title: string;
	url: string;
	cache_url: string;
	breadcrumb: string;
	is_image: boolean;
	is_video: boolean;
	is_featured_snippet: boolean;
	is_malicious: boolean;
	description: string;
	pre_snippet: string;
	extended_snippet: string;
	amp_version: boolean;
	rating: IDFSEOSERPGoogleRating[];
	highlighted: string[];
	links: {
		type: "link_element";
		title: string;
		description: string;
		url: string;
	}[];
}
