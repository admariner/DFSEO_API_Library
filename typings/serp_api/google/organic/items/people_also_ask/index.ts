export interface IITem_People_Also_Ask {
    type: "people_also_ask";
    rank_group: number;
    rank_absolute: number;
    position: "left" | 'right';
    xpath: string;
    items: {
        type: "people_also_ask_element"
        title: string;
        xpath: string;
        expanded_element: {
            type: "people_also_ask_expanded_element";
            featured_title: string;
            url: string;
            domain: string;
            title: string;
            description: string;
            table: {
                table_header: string[];
                table_content: string[];
            }[] | null;
        }[]
    }[] | null;
}