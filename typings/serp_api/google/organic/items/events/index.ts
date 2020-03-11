export interface IITem_Events {
    type: "events";
    rank_group: number;
    rank_absolute: number;
    position: "left" | "right";
    xpath: string;
    title: string;
    url: string;
    items: {
        type: "events_element";
        title: string;
        snippet: string;
        url: string;
    }[] | null;
}