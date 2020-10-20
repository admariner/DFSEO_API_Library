import { ISERP_Item } from "../../task_get";

export interface IItem_Related_Searches extends ISERP_Item {
	type: "related_searches";
	rank_group: number;
	rank_absolute: number;
	position: "left" | "right";
	xpath: string;
	items: any[] | null;
}
