import { ISERP_Item } from "../../task_get";
export interface IItem_Shopping extends ISERP_Item {
    type: "shopping";
    rank_group: number;
    rank_absolute: number;
    position: "left" | "right";
    xpath: string;
    title: string;
    items: {
        type: "shopping_element";
        title: string;
        price: string;
        source: string;
        description: string;
        marketplace: string;
        marketplace_url: string;
        url: string;
    }[] | null;
}
