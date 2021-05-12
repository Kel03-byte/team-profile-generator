const Engineer = require("../lib/engineer.js")
describe(`Engineer`, () => {

    // Tests if Id is an actual number
    it(`An error is thrown if id isn't a number`, () => {
        expect(() => {
            new Engineer('Jane Doe')
        }).toThrow("Please enter a valid number!")
    })

    // Tests if Id is a postive number and not a negative number
    it(`An error is thrown if id is a negative number`, () => {
        expect(() => {
            new Engineer(-1)
        }).toThrow("Please enter a valid number!")
    })

    // Tests if Name is actually entered and not an empty string
    it(`An error is thrown if name is an empty string`, () => {
        expect(() => {
            new Engineer(1, '')
        }).toThrow("Please enter a valid name!")
    })

    // Tests if Name is an actual string
    it(`An error is thrown if name isn't a string`, () => {
        expect(() => {
            new Engineer(1, 20)
        }).toThrow("Please enter a valid name!")
    })

    // Tests if Email is actually entered and not an empty string
    it(`An error is thrown if email is an empty string`, () => {
        expect(() => {
            new Engineer(1, 'Jane Doe', '')
        }).toThrow("Please enter a valid email!")
    })

    //Tests if Email is an actual string
    it(`An error is thrown if email isn't a string`, () => {
        expect(() => {
            new Engineer(1, 'Jane Doe', 20)
        }).toThrow("Please enter a valid email!")
    })

    //Tests if gitHub name is actually entered and not an empty string
    it(`An error is thrown if gitHub is an empty string`, () => {
        expect(() => {
            new Engineer(1, 'Jane Doe', 'example@gmail.com', 'Engineer', '');
        }).toThrow("Please enter a valid gitHub user name!")
    })

    //Tests if gitHub name is an actual string
    it(`An error is thrown if gitHub is not a string`, () => {
        expect(() => {
            new Engineer(1, 'Jane Doe', 'example@gmail.com', 'Engineer', 20);
        }).toThrow("Please enter a valid gitHub user name!")
    })

    // Test that a new "Engineer" Object is created with an id, email and gitHub profile link
    it(`Creates an Employee Object when given id, name and email`, () => {
        const employee = new Engineer(1, 'Jane Doe', 'example@gmail.com', 'Engineer', 'jane-doe');
        expect(employee).toEqual({
            id: 1,
            name: 'Jane Doe',
            email: 'example@gmail.com',
            role: 'Engineer',
            gitHub: 'jane-doe',
        });
    })

    // Tests that the "getName" function actually returns the name
    it(`When the getName function is invoked it returns the name`, () => {
        const employee = new Engineer(1, 'Jane Doe', 'example@gmail.com', 'Engineer', 'jane-doe');
        expect(employee.getName()).toEqual("Jane Doe");
    })

    // Tests that the "getName" function actually returns the name
    it(`When the getId function is invoked it returns the id`, () => {
        const employee = new Engineer(1, 'Jane Doe', 'example@gmail.com', 'Engineer', 'jane-doe');
        expect(employee.getId()).toEqual(1);
    })

    // Tests that the "getEmail" function actually returns the email
    it(`When the getEmail function is invoked it returns the email address`, () => {
        const employee = new Engineer(1, 'Jane Doe', 'example@gmail.com', 'Engineer', 'jane-doe');
        expect(employee.getEmail()).toEqual("example@gmail.com");
    })

    // Tests that the "getRole" function actually returns the role "Engineer"
    it(`When the getRole function is invoked it returns the role`, () => {
        const employee = new Engineer(1, 'Jane Doe', 'example@gmail.com', 'Engineer', 'jane-doe');
        expect(employee.getRole()).toEqual("Engineer");
    })

    // Tests that the "getHub" function actually returns the gitHub profile"
    it(`When the getGithub function is invoked it returns the github profile`, () => {
        const employee = new Engineer(1, 'Jane Doe', 'example@gmail.com', 'Engineer', 'jane-doe');
        expect(employee.getGitHub()).toEqual('https://github.com/jane-doe');
    })
})