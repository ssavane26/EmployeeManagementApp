const inquirer = require('inquirer');
const fs = require('fs');
const generateHTML = require('./src/generateHTML');
// const Employee = require('./lib/Employee.js') 
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

// Please see line 64 to see where this const was used (inside promptAddition() else clause)
const employees = [];

function addManager() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Please enter your managers name:',
        },
        {
            type: 'input',
            name: 'id',
            message: 'Please enter your managers id:',
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter your managers email:',
        },
        {
            type: 'input',
            name: 'office',
            message: 'Please enter your managers office number:',
        },
    ])
        .then((answers) => {
            // same language from Manager.js
            const manager = new Manager(answers.name, answers.id, answers.email, answers.office);
            employees.push(manager);
            addEmployee()
        });
}

function addEmployee() {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'choice',
            message: 'Would you like an engineer or an intern?',
            choices: ['Engineer', 'Intern', 'No']
        },
    ])
        .then((answers) => {
            if (answers.choice == "Engineer") {
                addEngineer();
            } else if (answers.choice == "Intern") {
                addIntern();
            } else {
                const htmlPageContent = generateHTML(employees);
                fs.writeFile('./dist/index.html', htmlPageContent, (err) =>
                err ? console.log(err) : console.log('Successfully created your teams index.html!', '\n', 'Check Your /dist Folder')
                );
            };
        });
    }   

function addEngineer() {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Please enter your engineers name:',
        },
        {
            type: 'input',
            name: 'id',
            message: 'Please enter your engineers id:',
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter your engineers email:',
        },
        {
            type: 'input',
            name: 'github',
            message: 'Please enter your engineers github username:',
        },
    ])
        .then((answers) => {
            // same language from Engineer.js
            const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
            employees.push(engineer);
            addEmployee();
        });
}

function addIntern() {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Please enter your interns name:',
        },
        {
            type: 'input',
            name: 'id',
            message: 'Please enter your interns id:',
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter your interns email:',
        }, 
        {
            type: 'input',
            name: 'school',
            message: 'Which school does your intern attend:',
        },
    ])
        .then((answers) => {
            // same language from Intern.js
            const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
            employees.push(intern);
            addEmployee();
        });
}

addManager();