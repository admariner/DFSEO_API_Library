import { ISERP_Item } from "../../task_get";

export interface IItem_Images extends ISERP_Item {
	type: "images";
	rank_group: number;
	rank_absolute: number;
	position: "left" | "right";
	xpath: string;
	title: string;
	url: string;
	items:
		| {
				type: "images_element";
				alt: string;
				url: string;
		  }[]
		| null;
}
