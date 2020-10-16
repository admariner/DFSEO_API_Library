import { IDFSEOSERPGoogleRating } from "../../../../..";
export interface IItem_Local_Pack {
    type: "local_pack";
    rank_group: number;
    rank_absolute: number;
    position: "left" | "right";
    xpath: string;
    title: string;
    description: string;
    domain: string;
    phone: string;
    url: string;
    is_paid: boolean;
    rating: IDFSEOSERPGoogleRating[];
}
