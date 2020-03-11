import { DFSEO } from ".";
import * as dotenv from 'dotenv';
import { expect } from "chai";
import { assert } from "console";
dotenv.config();
const username = process.env.DATAFORSEO_USERNAME || '';
const password = process.env.DATAFORSEO_PASSWORD || '';




describe("DFSEO", () => {
    it('should create DFSEO class object', async () => {
        const dfseo = new DFSEO(username, password, true);
        assert(dfseo.serpAPI);
        assert(dfseo.fetch);
    })
})