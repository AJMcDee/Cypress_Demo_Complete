const {login} = require("../../src/login");
describe('The MadLibs Main Form', () => {

    const answers = {
        animal: 'pigeon',
        action: 'diving',
        object: 'lollipop',
        food: 'spaghetti',
        name: 'Melissa',
        drink: 'margarita',
        number: '2',
        adjective: 'indefatigable',
        city: 'London',
        mood: 'serene'
    }

    it('activates the button when all form fields are filled', () => {

        // ARRANGE
        cy.visit('http://localhost:3000')
        cy.wrap(login({username: "anna.mcdougall", password:"LetsTryCypress2022"}))

        //ACT
        cy.get('input#animal').type(answers.animal)
        cy.get('input#action').type(answers.action)
        cy.get('input#object').type(answers.object)
        cy.get('input#food').type(answers.food)
        cy.get('input#name').type(answers.name)
        cy.get('input#drink').type(answers.drink)
        cy.get('input#number').type(answers.number)
        cy.get('input#adjective').type(answers.adjective)
        cy.get('input#city').type(answers.city)
        cy.get('input#mood').type(answers.mood)

        //ASSERT
        cy.get('button').should('be.enabled')

    })

    // same thing in a loop
    // it('activates the button when all form fields are filled', () => {
    //
    //     const answerKeys = Object.keys(answers)
    //
    //     //ACT
    //     cy.get('input').each(input => {
    //         const fieldName = input.attr('id')
    //         if (answerKeys.includes(fieldName)) {
    //             cy.wrap(input).type(answers[fieldName])
    //         }
    //     })
    //
    //     //ASSERT
    //     cy.get('button').should('be.enabled')
    //
    // })

    it('shows the completed story with our input data',() => {
        const finalStory = `Once upon a time in ${answers.city}, ${answers.name} got out of bed to start their day. To their surprise, sitting at the end of their bed was an enormous ${answers.animal} ${answers.action} the ${answers.object}.${answers.name} felt so ${answers.mood}, they knocked over the glass of ${answers.drink} on their bedside table.Suddenly, the ${answers.animal} spoke..."You must answer ${answers.number} ${answers.adjective} questions, or I will steal your soul... and your ${answers.food}!"`

        cy.get('button').click()

        cy.get('div.results').should('contain.text', finalStory)

    })
})