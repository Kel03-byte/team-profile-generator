class Employee {

    constructor(id, name, email, role) {
        const validId = Number(id) && id > 0;
        const validName = typeof name === "string" && name.length > 0;
        const validEmail = typeof email === "string" && email.length > 0;
        
        if (!validId) {
            throw Error("Please enter a valid number!")
        }

        if (!validName) {
            throw Error("Please enter a valid name!")
        }

        if (!validEmail) {
            throw Error("Please enter a valid email!")
        }
        
        this.name = name;
        this.email = email;
        this.id = id;
        this.role = role;
    };

    getName() {
        return this.name
    }

    getEmail() {
        return this.email
    }

    getId() {
        return this.id
    }
    
    getRole() {
        return "Employee"
    }
}

module.exports = Employee;