import { IDFSEO_API_Response, IDFSEO_API_Task, ISO_639_1_Language_Code } from "../../..";
export interface ISERP_Google_Languages_Response extends IDFSEO_API_Response {
    tasks: ISERP_Google_Languages_Task[];
}
export interface ISERP_Google_Languages_Task extends IDFSEO_API_Task {
    data: string[];
    result: {
        language_name: string;
        language_code: ISO_639_1_Language_Code;
    }[];
}
