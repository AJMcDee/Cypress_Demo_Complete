describe('MadLibs Login Tests', () => {
    it('logs in successfully', () => {

        const username = "anna.mcdougall"
        const password = "LetsTryCypress2021"

        // ARRANGE
        cy.visit('http://localhost:3000')

        // ACT
        cy.get('input[name=username]').type(username)
        cy.get('input[name=password]').type(password)
        cy.get('button').click()

        // ASSERT
        cy.get('h2').should('contain.text','Enter Your Choices!')
        cy.get('table').should('be.visible').within(() => {
            cy.get('input').should('have.length', 10)
        })
    })
});

