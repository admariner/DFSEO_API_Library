import { IDFSEO_API_Response, IDFSEO_API_Task } from "../../..";
import { ISERP_Google_Languages_Task } from "../languages";
export interface ISERP_Google_Locations_Response extends IDFSEO_API_Response {
    tasks: ISERP_Google_Languages_Task[];
}
export interface ISERP_Google_Locations_Task extends IDFSEO_API_Task {
    data: string[];
    result: {
        location_code: number;
        location_name: string;
        location_code_parent: number;
        country_iso_code: string;
        location_type: string;
    }[];
}
