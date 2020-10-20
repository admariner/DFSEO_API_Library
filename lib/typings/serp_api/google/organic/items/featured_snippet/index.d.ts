import { ISERP_Item } from "../../task_get";
export interface IITem_Featured_Snippet extends ISERP_Item {
    type: "featured_snippet";
    rank_group: number;
    rank_absolute: number;
    position: "left" | "right";
    xpath: string;
    domain: string;
    title: string;
    featured_title: string;
    description: string;
    url: string;
    table: {
        table_header: string[];
        table_content: string[];
    }[] | null;
}
