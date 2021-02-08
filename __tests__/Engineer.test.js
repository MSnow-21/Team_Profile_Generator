const Engineer = require('../lib/engineer.js');

describe("Engineer", () => {
    describe("getGitHub", () => {
        it("should return the name for Github", () => {
            const str = "Mikesgithub";

            const result = new Engineer(str).getGitHub();

            expect(result).toEqual(str);
        });
    });
});