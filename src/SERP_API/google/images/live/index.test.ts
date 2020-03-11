import { DFSEO } from "../../../..";
import * as dotenv from 'dotenv';
import { expect } from "chai";
dotenv.config();
const username = process.env.DATAFORSEO_USERNAME || '';
const password = process.env.DATAFORSEO_PASSWORD || '';
const dfseo = new DFSEO(username, password, true);

describe("DFSEO SERP Google Images Live Advanced Function", () => {
    it('should return okay status code', async () => {
        const result = await dfseo.serpAPI.google.images.live.advanced([{
            keyword: 'test',
            priority: 1,
            location_code: 2840,
            language_code: 'en'
        }]);

        expect(result.status_code).to.equal(20000);
    })
});

describe("DFSEO SERP Google Images Live HTML Function", () => {
    it("should return okay status code", async () => {
        const result = await dfseo.serpAPI.google.images.live.html([{
            keyword: 'test',
            priority: 1,
            location_code: 2840,
            language_code: 'en'
        }]);

        expect(result.status_code).to.equal(20000);
    })
})