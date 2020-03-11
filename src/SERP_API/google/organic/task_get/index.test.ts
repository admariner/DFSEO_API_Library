import { DFSEO } from "../../../..";
import * as dotenv from 'dotenv';
import { expect } from "chai";
dotenv.config();
const username = process.env.DATAFORSEO_USERNAME || '';
const password = process.env.DATAFORSEO_PASSWORD || '';
const dfseo = new DFSEO(username, password, true);


describe("DFSEO SERP Google Organic Task Get regular Function", () => {
    it('should return okay status code', async () => {
        const result = await dfseo.serpAPI.google.organic.taskGet.regular("03111954-3683-0066-2000-8e12d6d815d8");

        expect(result.status_code).to.equal(20000);
    })
})

describe("DFSEO SERP Google Organic Task Get HTML Function", () => {
    it("should return okay status code", async () => {
        const result = await dfseo.serpAPI.google.organic.taskGet.html("03111954-3683-0066-2000-8e12d6d815d8");

        expect(result.status_code).to.equal(20000);
    })
})

describe("DFSEO SERP Google Organic Task Get Advanced Function", () => {
    it("should return okay status code", async () => {
        const result = await dfseo.serpAPI.google.organic.taskGet.advanced("03111954-3683-0066-2000-8e12d6d815d8");

        expect(result.status_code).to.equal(20000);
    })
})