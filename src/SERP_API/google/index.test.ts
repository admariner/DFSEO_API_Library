import { DFSEO } from "../.."
import { assert } from "console";
import * as dotenv from 'dotenv';
import { expect } from "chai";

dotenv.config();
const username = process.env.DATAFORSEO_USERNAME || '';
const password = process.env.DATAFORSEO_PASSWORD || '';
const dfseo = new DFSEO(username, password, true);


describe("DFSEO SERP Google Organic", () => {
    it('should create DFSEO SERP Google Organic Class object', () => {
        assert(dfseo.serpAPI.google.organic);
    })
})

describe("DFSEO SERP Google Maps", () => {
    it("should create DFSEO SERP Google Maps Class Object", () => {
        assert(dfseo.serpAPI.google.maps)
    })
})

describe("DFSEO SERP Google Images", () => {
    it("should create DFSEO SERP Google Images Class Object", () => {
        assert(dfseo.serpAPI.google.images);
    })
});

describe("DFSEO SERP Google News", () => {
    it("should create DFSEO SERP Google News Class Object", () => {
        assert(dfseo.serpAPI.google.news);
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