export interface IItem_People_Also_Search {
    type: "people_also_search";
    rank_group: number;
    rank_absolute: number;
    position: "left" | 'right';
    xpath: string;
    title: string;
    items: any[] | null;
}
