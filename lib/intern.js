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
        //console.log(`The interns school is ${this.school}`);
        return this.school;
    }

    getRole(){
        return "Intern";
    }

    returnHTML(){
        return `<div class="col-md-3 bg-transparent rounded" style="max-width: 24rem;">
        <div class="card-header bg-primary text-white">
            <h5 class="card-title">${this.name}</h5>
            <p class="card-text">Intern</p>
        </div>
        <div class="card-body bg-light">
            <ul class="internlist">
                <li class="internlist-id">ID: ${this.id}</li>
                <li class="internlist-email">Email: <a href="mailto:"${this.email}>${this.email}</a></li>
                <li class="internlist-school">School: ${this.school}</li>
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