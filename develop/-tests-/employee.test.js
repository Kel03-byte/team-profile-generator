const Employee = require("../lib/employee.js")

describe(`Employee`, () => {

    // Tests if Id is an actual number
    it(`An error is thrown if id isn't a number`, () => {
        expect(() => {
            new Employee('Jane Doe')
        }).toThrow("Please enter a valid number!")
    })

    // Tests if Id is a postive number and not a negative number
    it(`An error is thrown if id is a negative number`, () => {
        expect(() => {
            new Employee(-1)
        }).toThrow("Please enter a valid number!")
    })

    // Tests if Name is actually entered and not an empty string
    it(`An error is thrown if name is an empty string`, () => {
        expect(() => {
            new Employee(1, '')
        }).toThrow("Please enter a valid name!")
    })

    // Tests if Name is an actual string
    it(`An error is thrown if name isn't a string`, () => {
        expect(() => {
            new Employee(1, 20)
        }).toThrow("Please enter a valid name!")
    })

    // Tests if Email is actually entered and not an empty string
    it(`An error is thrown if email is an empty string`, () => {
        expect(() => {
            new Employee(1, 'Jane Doe', '')
        }).toThrow("Please enter a valid email!")
    })

    //Tests if Email is an actual string
    it(`An error is thrown if email isn't a string`, () => {
        expect(() => {
            new Employee(1, 'Jane Doe', 20)
        }).toThrow("Please enter a valid email!")
    })

    // Test that a new "Employee" Object is created with an id, name and email
    it(`Creates an Employee Object when given id, name and email`, () => {
        const employee = new Employee(1, 'Jane Doe', 'example@gmail.com', 'Employee');
        expect(employee).toEqual({
            id: 1,
            name: 'Jane Doe',
            email: 'example@gmail.com',
            role: 'Employee'
        });
    })

    // Tests that the "getName" function actually returns the name
    it(`When the getName function is invoked it returns the name`, () => {
        const employee = new Employee(1, 'Jane Doe', 'example@gmail.com', 'Employee');
        expect(employee.getName()).toEqual('Jane Doe');
    })

    // Tests that the "getName" function actually returns the name
    it(`When the getId function is invoked it returns the id`, () => {
        const employee = new Employee(1, 'Jane Doe', 'example@gmail.com', 'Employee');
        expect(employee.getId()).toEqual(1);
    })

    // Tests that the "getEmail" function actually returns the email
    it(`When the getEmail function is invoked it returns the email address`, () => {
        const employee = new Employee(1, 'Jane Doe', 'example@gmail.com', 'Employee');
        expect(employee.getEmail()).toEqual('example@gmail.com');
    })

    // Tests that the "getRole" function actually returns the role "Employee"
    it(`When the getRole function is invoked it returns the role`, () => {
        const employee = new Employee(1, 'Jane Doe', 'example@gmail.com', 'Employee');
        expect(employee.getRole()).toEqual('Employee');
    })
})