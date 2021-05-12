const Intern = require("../lib/intern.js")
describe(`Intern`, () => {

    // Tests if Id is an actual number
    it(`An error is thrown if id isn't a number`, () => {
        expect(() => {
            new Intern("Jane Doe")
        }).toThrow("Please enter a valid number!")
    })

    // Tests if Id is a postive number and not a negative number
    it(`An error is thrown if id is a negative number`, () => {
        expect(() => {
            new Intern(-1)
        }).toThrow("Please enter a valid number!")
    })

    // Tests if Name is actually entered and not an empty string
    it(`An error is thrown if name is an empty string`, () => {
        expect(() => {
            new Intern(1, "")
        }).toThrow("Please enter a valid name!")
    })

    // Tests if Name is an actual string
    it(`An error is thrown if name isn't a string`, () => {
        expect(() => {
            new Intern(1, 20)
        }).toThrow("Please enter a valid name!")
    })

    // Tests if Email is actually entered and not an empty string
    it(`An error is thrown if email is an empty string`, () => {
        expect(() => {
            new Intern(1, "Jane Doe", "")
        }).toThrow("Please enter a valid email!")
    })

    //Tests if Email is an actual string
    it(`An error is thrown if email isn't a string`, () => {
        expect(() => {
            new Intern(1, "Jane Doe", 20)
        }).toThrow("Please enter a valid email!")
    })

    //Tests if school name is an actual string
    it(`An error is thrown if school is not a string`, () => {
        expect(() => {
            new Intern(1, "Jane Doe", "example@gmail.com", "Intern", 20);
        }).toThrow("Please enter a valid school name!")
    })

    // Tests if Email is actually entered and not an empty string
    it(`An error is thrown if school is an empty string`, () => {
        expect(() => {
            new Intern(1, "Jane Doe", "example@gmail.com", "Intern", "")
        }).toThrow("Please enter a valid school name!")
    })

    // Test that a new "Intern" Object is created with an id, email and gitHub profile link
    it(`Creates an Employee Object when given id, name, email and school`, () => {
        const employee = new Intern(1, 'Jane Doe', 'example@gmail.com', "Intern", 'University of Notre Dame');
        expect(employee).toEqual({
            id: 1,
            name: 'Jane Doe',
            email: 'example@gmail.com',
            role: 'Intern',
            school: 'University of Notre Dame',
        });
    })

    // Tests that the "getName" function actually returns the name
    it(`When the getName function is invoked it returns the name`, () => {
        const employee = new Intern(1, 'Jane Doe', 'example@gmail.com', "Intern", 'University of Notre Dame');
        expect(employee.getName()).toEqual("Jane Doe");
    })

    // Tests that the "getName" function actually returns the name
    it(`When the getId function is invoked it returns the id`, () => {
        const employee = new Intern(1, 'Jane Doe', 'example@gmail.com', 'Intern', 'University of Notre Dame');
        expect(employee.getId()).toEqual(1);
    })

    // Tests that the "getEmail" function actually returns the email
    it(`When the getEmail function is invoked it returns the email address`, () => {
        const employee = new Intern(1, 'Jane Doe', 'example@gmail.com', 'Intern', 'University of Notre Dame');
        expect(employee.getEmail()).toEqual("example@gmail.com");
    })

    // Tests that the "getRole" function actually returns the role "Intern"
    it(`When the getRole function is invoked it returns the role`, () => {
        const employee = new Intern(1, 'Jane Doe', 'example@gmail.com', 'Intern', 'University of Notre Dame');
        expect(employee.getRole()).toEqual("Intern");
    })

    // Tests that the "getHub" function actually returns the gitHub profile"
    it(`When the getGithub function is invoked it returns the github profile`, () => {
        const employee = new Intern(1, 'Jane Doe', 'example@gmail.com', 'Intern', 'University of Notre Dame');
        expect(employee.getSchool()).toEqual('University of Notre Dame');
    })
})