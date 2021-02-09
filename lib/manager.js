const Employee = require('./employee');

class Manager extends Employee {
    constructor (name,id,email,officeNumber){
        super(name,id,email);
        this.officeNumber = officeNumber;
    }
    
    //methods from employee
    // this inherits the properties of employee

    // getName(){
    //     console.log(`The employees name is ${this.name}`);
    //     return this.name;
    // }

    // getId(){
    //     console.log(`The employees id is ${this.id}`);
    //     return this.id;
    // }

    // getEmail(){
    //     console.log(`The employees email is ${this.email}`);
    //     return this.email;
    // }
    //method for manager



    getOfficeNumber(){
        return this.officeNumber;
    }

    

    getRole(){
        return "Manager";
    }

    returnHTML(){
        return `<div class="col-md-3 bg-transparent rounded" style="max-width: 24rem;">
        <div class="card-header bg-primary text-white">
            <h5 class="card-title">${this.name}</h5>
            <p class="card-text">Manager</p>
        </div>
        <div class="card-body bg-light">
            <ul class="managerlist">
                <li class="managerlist-id">ID: ${this.id}</li>
                <li class="managerlist-email">Email: <a href="mailto:"${this.email}>${this.email}</a></li>
                <li class="managerlist-officenumber">Office Number: ${this.officeNumber}</li>
            </ul>
        </div>
    </div>`;
    }
}


// creating a reference constant


// manager.getName();
// manager.getId();
// manager.getEmail();
// manager.getOfficeNumber();
// manager.getRole();

module.exports = Manager;

