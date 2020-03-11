export interface IITem_Jobs {
    type: "jobs";
    rank_group: number;
    rank_absolute: number;
    position: "left" | 'right';
    xpath: string;
    title: string;
    url: string;
    items: {
        type: "jobs_element";
        title: string;
        snippet: string;
        author: string;
        job_posted_time: string;
        contract_type: string;
        salary: string;
        url: string;
    }[] | null;
}