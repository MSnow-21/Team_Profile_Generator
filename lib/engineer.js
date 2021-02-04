const Engineer = requires ('./employee');

class Engineer extends Employee{
    constructor(name,id,email,github){
        super(name,id,email);
        this.github = github;
    }

    //from employees methods

    getName(){
        console.log(`The engineers name is ${this.name}`);
        return this.name;
    }

    getId(){
        console.log(`The engineers id is ${this.id}`);
        return this.id;
    }

    getEmail(){
        console.log(`The engineers email is ${this.email}`);
        return this.email;
    }

    // method for engineer

    getGitHub(){
        console.log(`The engineers git is ${this.github}`)
        return this.github;
    }

    getRole(){
        return Engineer;
    }

}

const engineer = new Engineer('Mark',21,"helloemail","msnow21");

console.log('---Engineer---');
engineer.getName();
engineer.getId();
engineer.getEmail();
engineer.getGithub();

