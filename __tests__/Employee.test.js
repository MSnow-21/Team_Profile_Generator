const Employee = require("../lib/employee");

describe("Employee", () => {
    describe("name", () => {
        it("Should return a given name", () => {
            const str = "name";
            const result = new Employee(str);

            expect(result.getName()).toEqual(str);
        });
    });

    describe("id", () => {
        it("Should return a given id", () => {
            const str = 20;            
            const result = new Employee("name", str);

            expect(result.getId()).toEqual(str);
        });
    });

    describe("email", () => {
        it("Should return a give email", () =>{
            const str = "email";

            const result = new Employee(str);

            expect(result.getEmail()).toEqual(str);
        });
    });

    
});