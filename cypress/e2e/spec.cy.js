describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
  })

  /* ==== Test Created with Cypress Studio ==== */
  it('home', function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('http://localhost:3000/');
    /* ==== End Cypress Studio ==== */
    /* ==== Generated with Cypress Studio ==== */
    cy.get('.md\\:gap-3 > :nth-child(1)').click();
    /* ==== End Cypress Studio ==== */
    /* ==== Generated with Cypress Studio ==== */
    cy.get('.space-y-4 > :nth-child(1) > .relative > .w-full').clear('user1@gmail.com');
    cy.get('.space-y-4 > :nth-child(1) > .relative > .w-full').type('user1@gmail.com');
    cy.get('.space-y-4 > :nth-child(2) > .relative > .w-full').clear('d');
    cy.get('.space-y-4 > :nth-child(2) > .relative > .w-full').type('demo123');
    cy.get('.space-y-4 > .py-3').click();
    /* ==== End Cypress Studio ==== */
  });

  /* ==== Test Created with Cypress Studio ==== */
  it('menu', function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('http://localhost:3000');
    /* ==== End Cypress Studio ==== */
    /* ==== Generated with Cypress Studio ==== */
    cy.get('.md\\:gap-3 > :nth-child(3)').click();
 
    /* ==== End Cypress Studio ==== */
  });
})