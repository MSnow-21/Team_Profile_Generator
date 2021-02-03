const Employee = require('./employee');

class Manager extends Employee {
    constructor (name,id,email,officeNumber){
        super(name,id,email);
        this.officeNumber = officeNumber;
    }

    getRole(){
        return Manager;
    }
}

// creating a reference constant
const manager = new Manager('Mark',21,helloemail,205);