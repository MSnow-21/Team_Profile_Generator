const Employee = require("./employee");

class Intern extends Employee{
    constructor(name,id,email,school){
        super(name,id,email);
        this.school = school;
    }

    //inherited methods

    // getName(){
    //     console.log(`The interns name is ${this.name}`);
    //     return this.name;
    // }

    // getId(){
    //     console.log(`The interns id is ${this.id}`);
    //     return this.id;
    // }

    // getEmail(){
    //     console.log(`The interns email is ${this.email}`);
    //     return this.email;
    // }

    // methods for intern

    getSchool(){
        console.log(`The interns school is ${this.school}`);
        return this.school;
    }

    getRole(){
        return Intern;
    }

    returnHTML(){
        return `<div class="col-md-2">
        <div class="card-header">
            <h5 class="card-title">${this.name}</h5>
            <p class="card-text">Manager</p>
        </div>
        <div class="card-body">
            <ul class="internlist">
                <li class="internlist-id">${this.id}</li>
                <li class="internlist-email">${this.email}</li>
                <li class="internlist-school">${this.school}</li>
            </ul>
        </div>
    </div>`;
    }

}

// console.log('--Intern---');
// intern.getName();
// intern.getId();
// intern.getEmail();
// intern.getSchool();

module.exports = Intern;