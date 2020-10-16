import { IDFSEOSERPGoogleRating } from "../../../../..";

export interface IItem_Mention_Carousel {
    type: "mention_carousel";
    rank_group: number;
    rank_absolute: number;
    position: "left" | 'right';
    xpath: string;
    title: string;
    items: {
        type: "mention_carousel_element";
        title: string;
        price: string;
        rating: IDFSEOSERPGoogleRating[]
        mentioned_in: {
            type: "link_element";
            title: string;
            snippet: string;
            url: string;
        }
    }[] | null;
}