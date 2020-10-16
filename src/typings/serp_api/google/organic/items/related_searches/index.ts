export interface IItem_Related_Searches {
    type: "related_searches";
    rank_group: number;
    rank_absolute: number;
    position: "left" | "right";
    xpath: string;
    items: any[] | null;
}