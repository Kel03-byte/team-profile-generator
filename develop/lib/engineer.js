const Employee = require('./Employee.js');

class Engineer extends Employee {
    constructor(id, name, email, gitHub) {
        super(id, name, email);

        const validGitHub = typeof gitHub === "string"
        if (!validGitHub) {
            throw Error("Please enter a valid gitHub user name!")
        }
        this.gitHub = gitHub
    }
    
    getGitHub() {
        return "https://github.com/"+this.gitHub
    }

    getRole() {
        return "Engineer"
    }
}

module.exports = Engineer;