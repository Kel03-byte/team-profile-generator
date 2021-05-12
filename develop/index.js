const inquirer = require('./node_modules/inquirer/lib/inquirer.js');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const employeeArray = [];

const addEmployeeDetails = () => {
    return inquirer.prompt([
        {
            type: 'input',
            message: "What is the employee's name?",
            name: 'name',

        },
        {
            type: 'input',
            message: "What is the empoyee's Id number?",
            name: 'id',

        },
        {
            type: 'input',
            message: "What is the empoyee's email address?",
            name: 'email',
        },
        {
            type: 'list',
            message: "What is the empoyee's role in the company?",
            name: 'role',
            choices: ['Manager', 'Engineer', 'Intern'],
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "What is the Manager's office number?",
            when: (input) => input.role === "Manager",
        },
        {
            type: 'input',
            name: 'gitHub',
            message: "What is the Engineer's github username?",
            when: (input) => input.role === "Engineer",
        },
        {
            type: 'input',
            name: 'school',
            message: "What school does the Intern go to?",
            when: (input) => input.role === "Intern",
        },
        {
            type: 'confirm',
            name: 'addAnotherEmployee',
            message: 'Would you like to add more team members?',
            default: false
        }

    ])
        .then(employeeDetails => {

            let { id, name, email, role, officeNumber, gitHub, school, addAnotherEmployee} = employeeDetails;
            let employee;

            if (role === "Engineer") {
                employee = new Engineer(id, name, email, role, gitHub);

                console.log(employee);

            } else if (role === "Intern") {
                employee = new Intern(id, name, email, role, school);

                console.log(employee);

            } else if (role === "Manager") {
                employee = new Manager(id, name, email, role, officeNumber);

                console.log(employee);
            }

            employeeArray.push(employee);

            if (addAnotherEmployee) {
                return addEmployeeDetails(employeeArray);
            } else {
                return employeeArray;
            }
        })
}

addEmployeeDetails()