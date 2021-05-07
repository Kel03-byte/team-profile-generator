const inquirer = require('./node_modules/inquirer/lib/inquirer.js');
const fs = require('fs');

inquirer.prompt([
    {
        type: 'input',
        message: "What is the employee's name?",
        name: 'employeeName',
        validate: employeeName => {
            if (!employeeName) {
                return console.log("please enter employee's name")
            } else {
                return true
            }
        }
    },
    {
        type: 'input',
        message: "What is the empoyee's Id number?",
        name: 'employeeId',
        validate: employeeId => {
            if (!employeeId) {
                return console.log("please enter the employee's Id number!")
            } else {
                return true
            }
        }
    },
    {
        type: 'input',
        message: "What is the empoyee's email address?",
        name: 'employeeEmail',
        validate: employeeEmail => {
            if (!employeeEmail) {
                return console.log("please enter the employee's email address!")
            } else {
                return true
            }
        }
    }
])
