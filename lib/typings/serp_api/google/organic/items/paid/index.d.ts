import { ISERP_Item } from "../../task_get";
export interface IItem_Paid extends ISERP_Item {
    type: "paid";
    rank_group: number;
    rank_absolute: number;
    position: string;
    xpath: string;
    domain: string;
    description: string;
    title: string;
    url: string;
    breadcrumb: string;
    highlighted: string[];
    extra: {
        ad_aclk: string;
    }[];
    description_rows: string[] | null;
    links: {
        type: "link_element";
        title: string;
        description: string;
        url: string;
        ad_aclk: string;
    }[];
}
