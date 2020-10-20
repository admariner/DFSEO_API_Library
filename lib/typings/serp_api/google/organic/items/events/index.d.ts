import { ISERP_Item } from "../../task_get";
export interface IITem_Events extends ISERP_Item {
    type: "events";
    rank_group: number;
    rank_absolute: number;
    position: "left" | "right";
    xpath: string;
    title: string;
    url: string;
    items: {
        type: "events_element";
        title: string;
        snippet: string;
        url: string;
    }[] | null;
}
