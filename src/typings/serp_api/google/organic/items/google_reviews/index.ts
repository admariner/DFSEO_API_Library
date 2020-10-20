import { ISERP_Item } from "../../task_get";

export interface IItem_Google_Review extends ISERP_Item {
	type: "google_reviews";
	rank_group: number;
	rank_absolute: number;
	position: "left" | "right";
	xpath: string;
	reviews_count: number;
	place_id: string;
	feature: string;
}
