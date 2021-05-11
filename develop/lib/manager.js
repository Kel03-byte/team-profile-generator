const Employee = require('./Employee.js');

class Manager extends Employee {
    constructor(id, name, email, officeNumber) {
        super(id, name, email);

        const validOfficeNumber = Number.isInteger(officeNumber) && officeNumber > 0;
        if (!validOfficeNumber) {
            throw Error("Please enter a valid Office Number!")
        }
        this.officeNumber = officeNumber
    }

    getRole() {
        return "Manager"
    }
}

module.exports = Manager;