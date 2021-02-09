const Employee = require('./employee');

class Engineer extends Employee{
    constructor(name,id,email,github){
        super(name,id,email);
        this.github = github;
    }

    //from employees methods
    //inherit methods from employee

    // getName(){
    //     console.log(`The engineers name is ${this.name}`);
    //     return this.name;
    // }

    // getId(){
    //     console.log(`The engineers id is ${this.id}`);
    //     return this.id;
    // }

    // getEmail(){
    //     console.log(`The engineers email is ${this.email}`);
    //     return this.email;
    // }

    // method for engineer

    getGitHub(){
        //console.log(`The engineers git is ${this.github}`)
        return this.github;
    }

    getRole(){
        return "Engineer";
    }

    returnHTML(){
        return `<div class="col-md-3 bg-transparent rounded" style="max-width: 24rem;">
        <div class="card-header bg-primary text-white">
            <h5 class="card-title">${this.name}</h5>
            <p class="card-text">Engineer</p>
        </div>
        <div class="card-body bg-light">
            <ul class="engineerlist">
                <li class="engineerlist-id">ID: ${this.id}</li>
                <li class="engineerlist-email">Email: <a href="mailto:"${this.email}>${this.email}</li>
                <li class="engineerlist-github">Github: <a href="https://github.com/${this.github}">${this.github}</a></li>
            </ul>
        </div>
    </div>`;
        
    }

}

// console.log('---Engineer---');
// engineer.getName();
// engineer.getId();
// engineer.getEmail();
// engineer.getGitHub();

module.exports = Engineer;

