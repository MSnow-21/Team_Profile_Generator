const inquirer = require('inquirer');
const fs = require('fs');
//const Employee = require('./lib/employee.js');
const Manager = require('./lib/manager.js');
const Engineer = require('./lib/engineer.js');
const Intern = require('./lib/intern.js');

const employeeArray = [];


function generateHTML(employeeArray){

let HTML = `<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatibile" content="ie=edge">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
        <link rel="stylesheet" href="style.css">
        <title>Team Profile Generator</title>
    </head>

    <body>
        <h1 class="team">My Team</h1>
        <div class="row">
            ${employeeArray.forEach(employee=>{employee.returnHTML()})}
        </div>
    </body>b
</html>`
return HTML

}


//build array

// Funtion that initiates the program
// Creating Manager. Only one manager.

function init(){
    createManager();
}

function createNewTeam(){
    let teammembers = ""
    employeeArray.forEach(employee =>{
        teammembers+=employee.returnHTML();
    })
    
let HTML = `<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatibile" content="ie=edge">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
        <link rel="stylesheet" href="style.css">
        <title>Team Profile Generator</title>
    </head>

    <body>
        <h1 class="team">My Team</h1>
        <div class="row">
            ${teammembers}
        </div>
    </body>b
</html>`


//console.log(HTML);
fs.writeFileSync('dist/index.html', HTML);
}

//testing another create team function.

// function createNewTeam(){
//     const generateHTML = (employeeArray) =>

//     `<!DOCTYPE html>
//     <html lang="en">
//         <head>
//             <meta charset="UTF-8">
//             <meta http-equiv="X-UA-Compatibile" content="ie=edge">
//             <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
//             <link rel="stylesheet" href="style.css">
//             <title>Team Profile Generator</title>
//         </head>
    
//         <body>
//             <h1 class="team">My Team</h1>
//             <div class="row">
//                 ${employeeArray.forEach(employee=>{employee.returnHTML()})}
//                 <div class="col-md-2">
//                     <div class="card-header">
//                         <h5 class="card-title">Employee name</h5>
//                         <p class="card-text">Manager</p>
//                     </div>
//                     <div class="card-body">
//                         <ul class="managerlist">
//                             <li class="managerlist-name"></li>
//                             <li class="managerlist-id"></li>
//                             <li class="managerlist-email"></li>
//                             <li class="managerlist-officenumber"></li>
//                         </ul>
//                     </div>
//                 </div>
//             </div>
//         </body>b
//     </html>`

   

//     console.log(employeeArray);
    
//     const HTML = generateHTML(employeeArray);
//     fs.writeFileSync('dist/index.html', HTML);



// }

//First Team Member Selection

function pickTeamFirst(){
    inquirer.prompt([
        {
            type: 'list',
            name: 'teammember',
            choices: ["Engineer","Intern","End"]
        }

    ])
    .then(response => {
        const answer = response.teammember
        if(answer === "Engineer"){
            createEngineer();
        }else if(answer === "Intern"){
            createIntern();
        }else if(answer === "End"){
            //testing function calls
            createNewTeam();
            // generateHTML(employeeArray);
            // console.log(employeeArray);
        }
    });
}

// Adds an engineer
// function addEngineer(){
//     createEngineer();
// }

//Adds an intern

// function addIntern(){
//     createIntern();

// }

function createManager(){
    inquirer.prompt([
        {
            type: 'input',
            name: 'managerName',
            message: 'What is the managers name?',        
        },
        {
            type: 'input',
            name: 'managerId',
            message: 'Please pick the managers id',
        },
        {
            type: 'input',
            name: 'managerEmail',
            message: 'Please enter the email address',
        },
        {
            type: 'input',
            name: 'managerOfficeNumber',
            message: 'Please enter in the office number',
        }
    ])
    .then((answers)=>{
    console.log(answers);
    const manager = new Manager(answers.managerName,answers.managerId,answers.managerEmail,answers.managerOfficeNumber);
    console.log(manager.getName());
    employeeArray.push(manager);
    console.log(manager.returnHTML());
    // console.log(employeeArray);

    // const HTML = generateHTML(answers);
    // fs.writeFileSync('dist/index.html', HTML);
    //addEngineer();
    pickTeamFirst();
    });
}

function createEngineer(){
    inquirer.prompt([
        {
            type: 'input',
            name: 'engineerName',
            message: 'What is the name of the engineer?'
        },
        {
            type: 'input',
            name: 'engineerId',
            message: 'What is the id of the engineer',
        },
        {
            type: 'input',
            name: 'engineerEmail',
            message: 'What is the engineers email?',
        },
        {
            type: 'input',
            name: 'engineerGithub',
            message: 'What is the employees github username',
        }

    ])    
    .then((answers)=>{
        console.log(answers);
        const engineer = new Engineer(answers.engineerName,answers.engineerId, answers.engineerEmail,answers.engineerGithub);
        console.log(engineer.getName());
        employeeArray.push(engineer);
        console.log(engineer.returnHTML());

        //console.log(employeeArray);
        //addIntern();
        pickTeamFirst();
    });
}

// Adding option for second engineer

function createIntern(){
    inquirer.prompt([
        {
            type: 'input',
            name: 'internName',
            message: 'What is the interns name?'
        },
        {
            type: 'input',
            name: 'internId',
            message: 'What is the interns id?',
        },
        {
            type: 'input',
            name: 'internEmail',
            message: 'What is the interns email',
        },
        {
            type: 'input',
            name: 'internSchool',
            message: 'What school did the intern go to?',
        }
    ])
    .then((answers)=>{
    console.log(answers);
    const intern = new Intern(answers.internName,answers.internId,answers.internEmail,answers.internSchool);
    console.log(intern);
    console.log(intern.getName());
    employeeArray.push(intern);
    console.log(intern.returnHTML());
    //testing calling write to html function
    //createProjectTeam();
    pickTeamFirst();
    });
}

init();