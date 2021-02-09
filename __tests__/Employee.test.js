const Employee = require("../lib/employee");

describe("Employee", () => {
    describe("name", () => {
        it("Should return a given name", () => {
            const str = "name";

            const result = new Employee.getName(str);

            expect(result).toEqual(str);
        });
    });

    describe("id", () => {
        it("Should return a given id", () => {
            const str = 20;
            
            const result = new Employee.getId(str);

            expect(result).toEqual(str);
        });
    });

    describe("email", () => {
        it("Should return a give email", () =>{
            const str = "name@email.com";

            const result = new Employee.getEmail(str);

            expect(result).toEqual(str);
        });
    });

    
});