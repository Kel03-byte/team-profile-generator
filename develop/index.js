// Imports Inquirer, Employee, Manager, Engineer, Intern, FIle System and the Template HTML file
const inquirer = require("./node_modules/inquirer/lib/inquirer.js");
const Employee = require("./lib/employee.js");
const Manager = require("./lib/manager.js");
const Engineer = require("./lib/engineer.js");
const Intern = require("./lib/intern.js");
const fs = require("fs");
const generateProfilePageHTML = require("./src/html-template")

// Questions to get Employee Details to create the Team Profile
const addEmployeeDetails = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        message: "What is the employee's name?",
        name: "name",
      },
      {
        type: "input",
        message: "What is the empoyee's Id number?",
        name: "id",
      },
      {
        type: "input",
        message: "What is the empoyee's email address?",
        name: "email",
      },
      {
        type: "list",
        message: "What is the empoyee's role in the company?",
        name: "role",
        choices: ["Manager", "Engineer", "Intern"],
      },
      {
        type: "input",
        name: "officeNumber",
        message: "What is the Manager's office number?",
        when: (input) => input.role === "Manager",
      },
      {
        type: "input",
        name: "gitHub",
        message: "What is the Engineer's github username?",
        when: (input) => input.role === "Engineer",
      },
      {
        type: "input",
        name: "school",
        message: "What school does the Intern go to?",
        when: (input) => input.role === "Intern",
      },
      {
        type: "confirm",
        name: "addAnotherEmployee",
        message: "Would you like to add more team members?",
        default: false,
      },
    ])
    .then((employeeDetails) => {
      let {
        id,
        name,
        email,
        role,
        officeNumber,
        gitHub,
        school,
        addAnotherEmployee,
      } = employeeDetails;

      // Saves inputted data to arrays
      if (role === "Engineer") {
        const engineer = new Engineer(id, name, email, role, gitHub);
        employeeArray.push(engineer);
        engineerArray.push(engineer);
      } else if (role === "Intern") {
        const intern = new Intern(id, name, email, role, school);
        employeeArray.push(intern);
        internArray.push(intern);
      } else if (role === "Manager") {
        const manager = new Manager(id, name, email, role, officeNumber);
        employeeArray.push(manager);
        managerArray.push(manager);
      }

      // Allows User to add another employee or generate the HTML page
      if (addAnotherEmployee) {
        return addEmployeeDetails();
      } else {
        generateProfileHTML(employeeArray);
      }
    });
};

// Generates the HTML page and saves it to /dist folder
function generateProfileHTML(employeeArray) {
  fs.writeFile("./dist/team-profile.html", generateProfilePageHTML(employeeArray),
    function (error) {
      if (error) throw error;
      console.log("Saved!");
    })
}

// The arrays to save the employee details
let employeeArray = [];
let managerArray = [];
let engineerArray = [];
let internArray = [];

// Initiates the questions
addEmployeeDetails();