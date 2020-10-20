import { ISERP_Item } from "../../task_get";
export interface IItem_video extends ISERP_Item {
    type: "video";
    rank_group: number;
    rank_absolute: number;
    position: "left" | "right";
    xpath: string;
    items: {
        type: "video_element";
        source: string;
        title: string;
        url: string;
    }[] | null;
}
