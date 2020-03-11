import { Organic } from './organic';
import { DFSEO } from '../..';
import { ISERP_Google_Languages_Response, ISERP_Google_Locations_Response } from '../../../typings';
import { Images } from './images';
export class Google {
    public organic: Organic = new Organic(this.DFSEO);
    public images: Images = new Images(this.DFSEO);
    constructor(private DFSEO: DFSEO) {

    }

    languages(): Promise<ISERP_Google_Languages_Response> {
        return this.DFSEO.fetch({ method: "GET", url: 'serp/google/languages' });
    }

    locations(country?: string): Promise<ISERP_Google_Locations_Response> {
        return this.DFSEO.fetch({ method: 'GET', url: `serp/google/locations${country ? `/${country}` : ''}` })
    }
}