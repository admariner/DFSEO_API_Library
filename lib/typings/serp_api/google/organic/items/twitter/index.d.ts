import { ISERP_Item } from "../../task_get";
export interface IItem_Twitter extends ISERP_Item {
    type: "twitter";
    rank_group: number;
    rank_absolute: number;
    position: "left" | "right";
    xpath: string;
    title: string;
    url: string;
    items: {
        type: "twitter_element";
        tweet: string;
        date: string;
        url: string;
    }[];
}
