describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/')
    /* ==== Generated with Cypress Studio ==== */

    /* ==== End Cypress Studio ==== */
  })

  /* ==== Test Created with Cypress Studio ==== */
  it('test1', function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('http://localhost:3000/');
    /* ==== End Cypress Studio ==== */
    /* ==== Generated with Cypress Studio ==== */
    cy.get('.md\\:gap-3 > :nth-child(1)').click();
    cy.get('.space-y-4 > :nth-child(1) > .relative > .w-full').clear('user1@gmail.com');
    cy.get('.space-y-4 > :nth-child(1) > .relative > .w-full').type('user1@gmail.com');
    cy.get('.space-y-4 > :nth-child(2) > .relative > .w-full').clear('d');
    cy.get('.space-y-4 > :nth-child(2) > .relative > .w-full').type('demo123');
    cy.get('.space-y-4 > .py-3').click();
    /* ==== End Cypress Studio ==== */
  });

  /* ==== Test Created with Cypress Studio ==== */
  it('booking', function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('http://localhost:3000/');
    cy.wait(1000); // allow the page to settle
    /* ==== End Cypress Studio ==== */
    /* ==== Generated with Cypress Studio ==== */
    cy.get('.md\\:gap-3 > :nth-child(1)').click();
    cy.wait(500);
    cy.get('.space-y-4 > :nth-child(1) > .relative > .w-full').clear('maya@gmail.com');
    cy.wait(200);
    cy.get('.space-y-4 > :nth-child(1) > .relative > .w-full').type('maya@gmail.com');
    cy.wait(200);
    cy.get('.space-y-4 > :nth-child(2) > .relative > .w-full').clear('d');
    cy.wait(200);
    cy.get('.space-y-4 > :nth-child(2) > .relative > .w-full').type('demo123');
    cy.wait(200);
    cy.get('.space-y-4 > .py-3').click();
   
      /* ==== End Cypress Studio ==== */
  });
})