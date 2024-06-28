describe('Home page', () => {
    it('should have header', () => {
        // Start from the index page
        cy.visit('http://localhost:3000/')

        // The new page should contain an h1 with "About"
        cy.get('h1').contains('time to transform farming.')
    })
})