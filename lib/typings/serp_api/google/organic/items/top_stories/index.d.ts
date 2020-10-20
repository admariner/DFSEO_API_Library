import { ISERP_Item } from "../../task_get";
export interface IItem_Top_stories extends ISERP_Item {
    type: "top_stories";
    rank_group: number;
    rank_absolute: number;
    position: "left" | "right";
    xpath: string;
    items: {
        type: "top_stories_element";
        source: string;
        domain: string;
        title: string;
        date: string;
        url: string;
    }[] | null;
}
