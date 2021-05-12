const Employee = require('./Employee.js');

class Manager extends Employee {
    constructor(id, name, email, role, officeNumber) {
        super(id, name, email, role);

        const validOfficeNumber = Number.isInteger(officeNumber) && officeNumber > 0;
        if (!validOfficeNumber) {
            throw Error("Please enter a valid Office Number!")
        }
        
        this.officeNumber = officeNumber
        this.role = role
    }

    getRole() {
        return "Manager"
    }
}

module.exports = Manager;