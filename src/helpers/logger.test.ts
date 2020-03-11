import { Logger } from "./logger";
import { expect } from "chai";

const logger = new Logger();

describe("Logger", () => {
    it('should be able to log things', () => {
        logger.error(418, "I'm a teapot");
        expect(true).to.equal(true);
    })
})