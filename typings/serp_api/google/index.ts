import { IDFSEO_API_Response, ISERP_Request } from '../..';

export * from './images';
export * from './languages';
export * from './locations';
export * from './maps';
export * from './news';
export * from './organic';

export interface ISERP_Google_Live_Request extends ISERP_Request {
}

export interface ISERP_Google_Request extends ISERP_Request { }

/**
 * 	the element’s rating
the popularity rate based on reviews and displayed in SERP
 */
export interface IDFSEOSERPGoogleRating {
    rating_type: DFSEORatingType
    /**
     * the value of the rating
     */
    value: number;
    /**
     * the amount of feedback
     */
    votes_count: number;
    /**
     * the maximum value for a rating_type
     */
    rating_max: number;
}
/**
 * the type of rating
here you can find the following elements: Max5, Percents, CustomMax
 */
export type DFSEORatingType = "Max5" | "Percents" | "CustomMax";