export interface IItem_Images {
    type: "images";
    rank_group: number;
    rank_absolute: number;
    position: "left" | 'right';
    xpath: string;
    title: string;
    url: string;
    items: {
        type: "images_element";
        alt: string;
        url: string;
    }[] | null;
}