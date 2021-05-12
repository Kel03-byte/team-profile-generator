const Employee = require('./Employee.js');

class Engineer extends Employee {
    
    constructor(id, name, email, role, gitHub) {
        super(id, name, email, role);

        const validGitHub =  typeof gitHub === 'string' && gitHub.length > 0;
        if (!validGitHub) {
            throw Error("Please enter a valid gitHub user name!")
        }

        this.gitHub = gitHub
        this.role = role
    }

    getGitHub() {
        return 'https://github.com/'+this.gitHub
    }

    getRole() {
        return "Engineer"
    }
}

module.exports = Engineer;