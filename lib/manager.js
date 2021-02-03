const Employee = require('./employee');

class Manager extends Employee {
    constructor (name,id,email,officeNumber){
        super(name,id,email);
        this.officeNumber = officeNumber;
    }
    
    //methods from employee

    getName(){
        console.log(`The employees name is ${this.name}`);
        return this.name;
    }

    getId(){
        console.log(`The employees id is ${this.id}`);
        return this.id;
    }

    getEmail(){
        console.log(`The employees email is ${this.email}`);
        return this.email;
    }
    //method for manager

    getRole(){
        return Manager;
    }
}

// creating a reference constant
const manager = new Manager('Mark',21,"helloemail",205);

manager.getName();
manager.getId();
manager.getEmail();
manager.getRole();

