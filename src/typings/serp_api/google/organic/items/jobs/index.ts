import { ISERP_Item } from "../../task_get";

export interface IITem_Jobs extends ISERP_Item {
	type: "jobs";
	rank_group: number;
	rank_absolute: number;
	position: "left" | "right";
	xpath: string;
	title: string;
	url: string;
	items:
		| {
				type: "jobs_element";
				title: string;
				snippet: string;
				author: string;
				job_posted_time: string;
				contract_type: string;
				salary: string;
				url: string;
		  }[]
		| null;
}
