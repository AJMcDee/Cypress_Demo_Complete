const {login} = require("../../../src/login");
describe('The MadLibs Main Form', () => {

    //define answers in an object for animal, action, object, food, name, drink, number, adjective, city, and mood

    it('activates the button when all form fields are filled', () => {

        // ARRANGE
        //visit the page
        //wrap the login function, giving our username as anna.mcdougall and password as LetsTryCypress2021

        // ACT
        // get each input with the ID of the type given in answers:
        // animal, action, object, food, name, drink, number, adjective, city, mood

        // ASSERT
        // check that the button is enabled

    })

    it('shows the completed story with our input data',() => {

        // ARRANGE
        // const finalStory = `Once upon a time in ${answers.city}, ${answers.name} got out of bed to start their day. To their surprise, sitting at the end of their bed was an enormous ${answers.animal} ${answers.action} the ${answers.object}.${answers.name} felt so ${answers.mood}, they knocked over the glass of ${answers.drink} on their bedside table.Suddenly, the ${answers.animal} spoke..."You must answer ${answers.number} ${answers.adjective} questions, or I will steal your soul... and your ${answers.food}!"`

        // ACT
        // click the button

        // ASSERT
        // The div with class 'results' should contain the text of the final story

    })
})