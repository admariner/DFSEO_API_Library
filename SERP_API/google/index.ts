import { Organic } from './organic';
import { DFSEO } from '../..';
export class Google {
    public organic: Organic = new Organic(this.DFSEO);
    constructor(private DFSEO: DFSEO) {

    }
}