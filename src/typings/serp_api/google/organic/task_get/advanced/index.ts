import { ISERP_Google_Organic_Task_Post_Data } from "../../task_post";
import { IItem_Answer_Box, IItem_Carousel, IItem_Multi_Carousel, IITem_Featured_Snippet, IItem_Google_Flights, IItem_Google_Review, IItem_Images, IITem_Jobs, IItem_Knowledge_graph, IItem_Local_Pack, IItem_Map, IItem_Organic, IItem_Paid, IITem_People_Also_Ask, IItem_Related_Searches, IItem_People_Also_Search, IItem_Shopping, IItem_Top_stories, IItem_Twitter, IItem_video, IITem_Events, IItem_Mention_Carousel, IItem_App } from "../../items";
import { IDFSEO_API_Response, IDFSEO_API_Task } from "../../../../..";

export interface ISERP_Google_Organic_Task_Get_Advanced_Response extends IDFSEO_API_Response {
	tasks: ISERP_Google_Organic_Task_Get_Advanced_Task[];
}

export interface ISERP_Google_Organic_Task_Get_Advanced_Task extends IDFSEO_API_Task {
	data: {
		api: "serp";
		function: "task_get";
		se: "google";
		se_type: "organic";
		language_name: string;
		location_name: string;
		keyword: string;
		priority: 1 | 2;
		tag: string;
		device: string;
		os: string;
	};
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
		item_types: ISERP_Google_Organic_Task_Get_Advanced_Item_Type[];
		se_results_count: number;
		items_count: number;
		items: SERP_Item[];
	}[];
}

export type ISERP_Google_Organic_Task_Get_Advanced_Item_Type = "answer_box" | "app" | "carousel" | "multi_carousel" | "featured_snippet" | "google_flights" | "google_reviews" | "images" | "jobs" | "knowledge_graph" | "local_pack" | "map" | "organic" | "paid" | "people_also_ask" | "related_searches" | "people_also_search" | "shopping" | "top_stories" | "twitter" | "video" | "events" | "mention_carousel";

export type SERP_Item = IItem_Answer_Box | IItem_App | IItem_Carousel | IItem_Multi_Carousel | IITem_Featured_Snippet | IItem_Google_Flights | IItem_Google_Flights | IItem_Google_Review | IItem_Images | IITem_Jobs | IItem_Knowledge_graph | IItem_Local_Pack | IItem_Map | IItem_Organic | IItem_Paid | IITem_People_Also_Ask | IItem_Related_Searches | IItem_People_Also_Search | IItem_Shopping | IItem_Top_stories | IItem_Twitter | IItem_video | IITem_Events | IItem_Mention_Carousel;
