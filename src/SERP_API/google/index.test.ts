import { DFSEO } from "../.."
import { assert } from "console";
import * as dotenv from 'dotenv';
import { expect } from "chai";

dotenv.config();
const username = process.env.DATAFORSEO_USERNAME || '';
const password = process.env.DATAFORSEO_PASSWORD || '';
const dfseo = new DFSEO(username, password, true);


describe("DFSEO SERP Google", () => {
    it('should create DFSEO SERP Google Class object', () => {
        assert(dfseo.serpAPI.google);
    })
})

describe("DFSEO SERP Google Languages", () => {
    it('should return okay status code', async () => {
        const response = await dfseo.serpAPI.google.languages();
        expect(response.status_code).to.equal(20000);
    })
})

describe("DFSEO SERP Google Locations", () => {
    it('should return okay status code', async () => {
        const response = await dfseo.serpAPI.google.locations();
        expect(response.status_code).to.equal(20000);
    })
})

describe("DFSEO SERP Google Locations Filter By Country", () => {
    it("should return okay status code", async () => {
        const response = await dfseo.serpAPI.google.locations("us");
        expect(response.status_code).to.equal(20000);
    })
})