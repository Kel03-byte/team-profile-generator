const Employee = require('./Employee.js');

class Intern extends Employee {
    constructor(id, name, email, school) {
        super(id, name, email);

        const validSchool = typeof school === "string" && school.length > 0
        if (!validSchool) {
            throw Error("Please enter a valid school name!")
        }
        this.school = school
    }
    
    getSchool() {
        return this.school
    }

    getRole() {
        return "Intern"
    }
}

module.exports = Intern;