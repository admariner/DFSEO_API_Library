export interface IItem_Google_Flights {
    type: "google_flights";
    rank_group: number;
    rank_absolute: number;
    position: "left" | "right";
    xpath: string;
    title: string;
    url: string;
    items: {
        type: "google_flights_element";
        description: string;
        url: string;
    }[] | null;
}
