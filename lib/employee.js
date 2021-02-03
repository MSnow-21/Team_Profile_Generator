class Employee {
    constructor(name,id,email){
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName(){
        console.log(`The employees name is ${this.name}`);
    }

    getId(){
        console.log(`The employees id is ${this.id}`);
    }

    getEmail(){
        console.log(`The employees email is ${this.email}`);
    }

    getRole(){
        return Employee;
    }

}

module.exports = Employee;

