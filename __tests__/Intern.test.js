const Intern = require('../lib/intern.js');

describe("Intern", () => {
    describe("getSchool", () => {
        it("should return the name for school", () => {
            const str = "school";

            const result = new Intern.getSchool(str)

            expect(result).toEqual(str);
        });
    });
});