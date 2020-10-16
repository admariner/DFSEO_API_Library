export interface IItem_Twitter {
    type: "twitter";
    rank_group: number;
    rank_absolute: number;
    position: "left" | 'right';
    xpath: string;
    title: string;
    url: string;
    items: {
        type: "twitter_element";
        tweet: string;
        date: string;
        url: string;
    }[]
}