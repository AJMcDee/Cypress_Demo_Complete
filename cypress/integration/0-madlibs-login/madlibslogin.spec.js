const {login} = require("../../../src/login");
describe('MadLibs Login Tests', () => {

    beforeEach(() => {
        sessionStorage.clear()
    })

    it('logs in successfully', () => {

        // ARRANGE
        // declare username anna.mcdougall
        // declare password LetsTryCypress2021
        // go to the homepage

        // ACT
        // type username into input field [name=username]
        // type password into input field
        // click the button

        // ASSERT
        // Form header "Enter Your Choices" should be in an H2
        // Should be able to see the table containing 10 input fields
    })

    // More tests here for failing logins?
});

