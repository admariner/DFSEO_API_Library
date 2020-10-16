export interface IItem_Knowledge_graph {
    type: "knowledge_graph";
    rank_group: number;
    rank_absolute: number;
    position: "left" | "right";
    xpath: string;
    title: string;
    sub_title: string;
    description: string;
    card_id: string;
    url: string;
    items: {
        type: "knowledge_graph_part_element";
        text: string | null;
        anchor: string;
        url: string;
        links: {
            type: "link_element";
            title: string;
            description: string;
            url: string;
        }[] | null;
    }[] | null;
}
