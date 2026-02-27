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
    cy.wait(1000);
    cy.get(':nth-child(1) > .mt-2').click();
    cy.wait(500);
    cy.get('[href="/listing/69735dbacfd54289b12745bf"] > .rounded-xl > .relative > .inset-0').click();
    cy.wait(1000);
    cy.get('.space-y-4 > :nth-child(1) > .relative > .w-full').click();
    cy.wait(500);
    cy.get('.top-full > :nth-child(1)').click();
    cy.wait(500);
    cy.get(':nth-child(2) > .relative > .w-full').click();
    cy.wait(500);
    cy.get(':nth-child(2) > .relative > .w-full').click();
    cy.wait(500);
    cy.get(':nth-child(3) > .relative > .w-full').click();
    cy.wait(500);
    cy.get('.px-6 > .w-full').click();
    cy.wait(500);
    cy.get(':nth-child(4) > .flex > .w-5').check();
    cy.wait(500);
    cy.get('.px-2').click();
    cy.wait(500);
    cy.get('.space-y-6 > :nth-child(1) > .w-full').clear('m');
    cy.wait(200);
    cy.get('.space-y-6 > :nth-child(1) > .w-full').type('maya');
    cy.wait(200);
    cy.get('.space-y-6 > :nth-child(2) > .w-full').clear('4');
    cy.wait(200);
    cy.get('.space-y-6 > :nth-child(2) > .w-full').type('4111111111111111');
    cy.wait(200);
    cy.get('.grid > :nth-child(1) > .w-full').clear('0');
    cy.wait(200);
    cy.get('.grid > :nth-child(1) > .w-full').type('02/29');
    cy.wait(200);
    cy.get('.grid > :nth-child(2) > .w-full').clear('34');
    cy.wait(200);
    cy.get('.grid > :nth-child(2) > .w-full').type('345');
      /* ==== End Cypress Studio ==== */
  });
})