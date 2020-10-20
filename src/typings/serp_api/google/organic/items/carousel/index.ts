import { ISERP_Item } from "../../task_get";

export interface IItem_Carousel extends ISERP_Item {
	type: "carousel";
	rank_group: number;
	rank_absolute: number;
	position: "left" | "right";
	xpath: string;
	title: string;
	items:
		| {
				type: "carousel_element";
				title: string;
				sub_title: string;
		  }[]
		| null;
}
