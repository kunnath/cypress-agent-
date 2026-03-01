describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
  })

  it('home', function() {
    cy.visit('/')
    cy.get('.md\\:gap-3 > :nth-child(1)').click()
    cy.get('.space-y-4 > :nth-child(1) > .relative > .w-full').clear()
    cy.get('.space-y-4 > :nth-child(1) > .relative > .w-full').type('user1@gmail.com')
    cy.get('.space-y-4 > :nth-child(2) > .relative > .w-full').clear()
    cy.get('.space-y-4 > :nth-child(2) > .relative > .w-full').type('demo123')
    cy.get('.space-y-4 > .py-3').click()
  })

  it('menu', function() {
    cy.visit('/')
    cy.get('.md\\:gap-3 > :nth-child(3)').click()
  })
})
