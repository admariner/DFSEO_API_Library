import { ISERP_Item } from "../../task_get";

export interface IItem_App extends ISERP_Item {
	type: "app";
	rank_group: number;
	rank_absolute: number;
	position: "left" | "right";
	xpath: string;
	items:
		| {
				type: "app_element";
				description: string;
				title: string;
				url: string;
				price: string;
		  }[]
		| null;
}
