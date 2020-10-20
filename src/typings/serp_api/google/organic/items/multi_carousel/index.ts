import { ISERP_Item } from "../../task_get";

export interface IItem_Multi_Carousel extends ISERP_Item {
	type: "multi_carousel";
	rank_group: number;
	rank_absolute: number;
	position: "left" | "right";
	xpath: string;
	items:
		| {
				type: "multi_carousel_element";
				title: string;
				multi_carousel_snippets: {
					type: "multi_carousel_snippet";
					title: string;
				}[];
		  }[]
		| null;
}
