export interface IItem_Top_stories {
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