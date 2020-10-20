import { ISERP_Item } from "../../task_get";

export interface IItem_Map extends ISERP_Item {
	type: "map";
	rank_group: number;
	rank_absolute: number;
	position: "left" | "right";
	xpath: string;
	title: string;
	url: string;
}
