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
        return Manager;
    }

    returnHTML(){
        return `<div class="col-md-2">
        <div class="card-header">
            <h5 class="card-title">Employee name</h5>
            <p class="card-text">Manager</p>
        </div>
        <div class="card-body">
            <ul class="managerlist">
                <li class="managerlist-name">${this.name}</li>
                <li class="managerlist-id">${this.id}</li>
                <li class="managerlist-email">${this.email}</li>
                <li class="managerlist-officenumber">${this.officeNumber}</li>
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

