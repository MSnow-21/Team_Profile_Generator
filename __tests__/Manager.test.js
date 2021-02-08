const Manager = require('../lib/manager.js');

describe("Manager", () => {
    describe("officeNumber", () => {
        it("should return the office number", () => {
            const str = "officenumber";

            const result = new Manager().officeNumber(str);

            expect(result).toEqual(str);
        });
    });
});