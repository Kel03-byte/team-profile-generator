const inquirer = require('./node_modules/inquirer/lib/inquirer.js');

inquirer.prompt([
    {
        type: 'input',
        message: "What is the employee's name?",
        name: 'employeeName',
        
    },
    {
        type: 'input',
        message: "What is the empoyee's Id number?",
        name: 'employeeId',
        
    },
    {
        type: 'input',
        message: "What is the empoyee's email address?",
        name: 'employeeEmail',
    },
    {
        type: 'list',
        message: "What is the empoyee's role in the company?",
        name: 'employeeRole',
        choices: ['Manager', 'Engineer', 'Intern'],
    },
])
    .then(function ({ employeeName, employeeRole, employeeId, employeeEmail, employeeRole }) {
        console.log(`This is ${employeeName}!`)
        console.log(`This is their id: ${employeeId}!`)
        console.log(`They work as a ${employeeRole}!`)
        console.log(`Their email adress is ${employeeEmail}!`)
        console.log(`Their role is ${employeeRole}!`)
    })
