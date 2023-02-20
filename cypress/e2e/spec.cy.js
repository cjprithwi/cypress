describe('login', () => {
  it('passes', () => {
    //cy.visit(Cypress.env('baseurl')+'/en/login')
    cy.visit('staging-binary.epixelmlmsystem.com/en/login')
    cy.get('#id_user_consent_submit').click()
    cy.get('.card-header--title').contains('Sign in')                         //To check the form heading
    cy.get(':nth-child(2) > label').contains('Username')                      //To check the label
    cy.get('[for="id_auth-password"]').contains('Password')                   //To check the label
    
    //Testing the username and password with random data
    cy.get('#id_auth-username').type()
    cy.get('#id_auth-password')
    
  
  })
})