import { DFSEO } from "../../..";
import * as dotenv from 'dotenv';
import { expect } from "chai";
import { assert } from "console";
dotenv.config();
const username = process.env.DATAFORSEO_USERNAME || '';
const password = process.env.DATAFORSEO_PASSWORD || '';
const dfseo = new DFSEO(username, password, true);

describe("DFSEO SERP Google Images Live", () => {
    it("should create DFSEO SERP Google Images Live Class Object", () => {
        assert(dfseo.serpAPI.google.images.live);
    })
})

describe("DFSEO SERP Google Images Task Ready", () => {
    it("should create DFSEO SERP Google Images Task Ready Class Object", () => {
        assert(dfseo.serpAPI.google.images.taskReady);
    })
})

describe("DFSEO SERP Google Images Task Post Function", () => {
    it("should return okay status code", async () => {
        const result = await dfseo.serpAPI.google.images.taskPost([{
            keyword: 'test',
            priority: 1,
            location_code: 2840,
            language_code: 'en'
        }]);

        expect(result.status_code).to.equal(20000);
    });
})

describe("DFSEO SERP Google Image Task Ready Function", () => {
    it("should return okay status code", async () => {
        const result = await dfseo.serpAPI.google.organic.taskReady();

        expect(result.status_code).to.equal(20000);
    })
})