import { IDFSEO_API_Response, IDFSEO_API_Task } from "../../../..";
import { ISERP_Google_Request } from "../../..";

export interface ISERP_Google_Organic_Task_Post_Data extends ISERP_Google_Request {
     /**
 * device type
optional field
can take the values:desktop, mobile
default value: desktop
 */
     device?: "desktop" | "mobile";
     /**
device operating system
optional field
if you specify desktop in the device field, choose from the following values: windows, macos
default value: windows
if you specify mobile in the device field, choose from the following values: android, ios
default value: android
 */
     os?: "windows" | "macos";
     /**
postback_url datatype
required field if you specify postback_url
corresponds to the function you used for setting a task
possible values:
regular, advanced, html
 */
     postback_data?: "regular" | "advanced" | "html";
}

export interface ISERP_Google_Organic_Task_Post_Response extends IDFSEO_API_Response {
     tasks: ISERP_Google_Organic_Task_Post_Task[];
}

export interface ISERP_Google_Organic_Task_Post_Task extends IDFSEO_API_Task {
     data: ISERP_Google_Organic_Task_Post_Data[];
     result: null;
}