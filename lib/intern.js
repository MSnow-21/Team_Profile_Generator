const Employee = require("./Employee");

class Intern extends Employee{
    constructor(name,id,email,school){
        super(name,id,email);
        this.school = school;
    }

    getName(){
        console.log(`The interns name is ${this.name}`);
        return this.name;
    }

    getId(){
        console.log(`The interns id is ${this.id}`);
        return this.id;
    }

    getEmail(){
        console.log(`The interns email is ${this.email}`);
        return this.email;
    }

    // methods for intern

    getSchool(){
        console.log(`The interns school is ${this.school}`);
        return this.school;
    }

    getRole(){
        return Intern;
    }

}

const intern = new Intern('Mike',25,'internemail','case');

console.log('--Intern---');
intern.getName();
intern.getId();
intern.getEmail();
intern.getSchool();